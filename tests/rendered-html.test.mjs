import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import test from "node:test";

const root = new URL("../", import.meta.url);

async function render(pathname = "/") {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request(new URL(pathname, "http://localhost"), {
      headers: { accept: "text/html" },
    }),
    {
      ASSETS: {
        fetch: async () => new Response("Not found", { status: 404 }),
      },
    },
    {
      waitUntil() {},
      passThroughOnException() {},
    },
  );
}

test("renders the quiet reference-mapped homepage", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /<title>Manisha Subedi<\/title>/i);
  assert.match(html, /Scientific Initiation Intern/);
  assert.match(html, /Data cleaning and quality checks/);
  assert.match(html, /manisha-subedi\.jpg/);
  assert.match(html, /href="\/projects\/"/);
  assert.match(html, /href="\/topics\/"/);
  assert.match(html, /href="\/blog\/"/);
  assert.match(html, /href="\/about\/"/);
  assert.match(
    html,
    /href="https:\/\/pt\.linkedin\.com\/in\/manisubedi"/,
  );
  assert.match(html, />LinkedIn<\/a>/);
  assert.doesNotMatch(html, /linkedin\.com\/search|manisubedi,/i);
  assert.doesNotMatch(
    html,
    /Evidence ledger|From lab evidence|I seek a junior data analyst role|Evidence ETL|Field notes/i,
  );
  assert.doesNotMatch(html, /Seemron|codex-preview|Starter Project/i);
});

test("renders every navigation page and both blog posts", async () => {
  const expectedPages = [
    ["/projects", /Coming soon/],
    ["/topics", /Data quality and validation/],
    ["/blog", /Before lab data reaches a spreadsheet/],
    ["/about", /A bit about me/],
    ["/blog/what-hplc-taught-me", /Keep the context nearby/],
    ["/blog/a-dashboard-is-not-the-analysis", /A quick check/],
  ];

  for (const [pathname, expectedText] of expectedPages) {
    const response = await render(pathname);
    assert.equal(response.status, 200, `${pathname} should return 200`);
    assert.match(await response.text(), expectedText);
  }
});

test("exports the complete GitHub Pages artifact", async () => {
  const html = await readFile(
    new URL("../dist/client/index.html", import.meta.url),
    "utf8",
  );

  assert.match(html, /Manisha Subedi/);
  assert.match(html, /index\.[A-Za-z0-9_-]+\.css/);

  await Promise.all([
    access(new URL("../dist/client/manisha-subedi.jpg", import.meta.url)),
    access(new URL("../dist/client/projects/index.html", import.meta.url)),
    access(new URL("../dist/client/topics/index.html", import.meta.url)),
    access(new URL("../dist/client/blog/index.html", import.meta.url)),
    access(new URL("../dist/client/about/index.html", import.meta.url)),
    access(
      new URL(
        "../dist/client/blog/what-hplc-taught-me/index.html",
        import.meta.url,
      ),
    ),
    access(
      new URL(
        "../dist/client/blog/a-dashboard-is-not-the-analysis/index.html",
        import.meta.url,
      ),
    ),
  ]);

  await assert.rejects(access(new URL("../app/_sites-preview", root)));
});
