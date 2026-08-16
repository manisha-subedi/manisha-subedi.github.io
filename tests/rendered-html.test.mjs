import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import test from "node:test";

const root = new URL("../", import.meta.url);

async function render() {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request("http://localhost/", {
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

test("renders Manisha's factual portfolio", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /<title>Manisha Subedi \| Data Analyst<\/title>/i);
  assert.match(html, /From lab evidence/);
  assert.match(html, /Evidence ledger/);
  assert.match(html, /Scientific Initiation Intern/);
  assert.match(html, /Evidence ETL/);
  assert.match(html, /In development/);
  assert.match(html, /Field notes/);
  assert.match(html, /manisha-subedi\.jpg/);
  assert.doesNotMatch(html, /Seemron|codex-preview|Starter Project/);
});

test("exports the complete GitHub Pages artifact", async () => {
  const html = await readFile(new URL("../dist/client/index.html", import.meta.url), "utf8");

  assert.match(html, /Skip to the main content/);
  assert.match(html, /https:\/\/levi09750\.github\.io\/og\.png/);
  assert.match(html, /application\/ld\+json/);
  assert.match(html, /prefers-reduced-motion|index\.[A-Za-z0-9_-]+\.css/);

  await Promise.all([
    access(new URL("../dist/client/manisha-subedi.jpg", import.meta.url)),
    access(new URL("../dist/client/og.png", import.meta.url)),
  ]);

  await assert.rejects(access(new URL("../app/_sites-preview", root)));
});
