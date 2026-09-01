import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const dist = new URL("../dist/", import.meta.url);
const page = (p) => readFile(new URL(p, dist), "utf8");

test("home page", async () => {
  const html = await page("index.html");
  assert.match(html, /<title>Manisha Subedi<\/title>/);
  assert.match(html, /data engineer at Company A/);
  assert.match(html, /Bengen/);
  assert.match(html, /manisha-subedi\.jpg/);
  assert.match(html, /pt\.linkedin\.com\/in\/manisubedi/);
  assert.doesNotMatch(html, /chemical/i);
  for (const href of ["/projects/", "/blog/", "/about/"]) {
    assert.match(html, new RegExp(`href="${href}"`));
  }
});

test("about lists experience and education", async () => {
  const html = await page("about/index.html");
  for (const s of [
    "Data Engineer I",
    "Data Engineering Intern",
    "Junior Data Analyst Intern",
    "Scientific Initiation Intern",
    "FCT NOVA",
  ]) {
    assert.match(html, new RegExp(s));
  }
});

test("writing index, posts, projects", async () => {
  const index = await page("blog/index.html");
  assert.match(index, /Before lab data reaches a spreadsheet/);
  assert.match(index, /Before opening Power BI/);
  assert.match(
    await page("blog/what-hplc-taught-me/index.html"),
    /Keep the context nearby/,
  );
  assert.match(
    await page("blog/a-dashboard-is-not-the-analysis/index.html"),
    /A quick check/,
  );
  assert.match(await page("projects/index.html"), /in development/);
});

test("simpson post has two figures, 40 dots each, and a table", async () => {
  const html = await page("blog/simpsons-paradox-drawn/index.html");
  assert.equal(html.match(/data-simpson="/g).length, 2);
  assert.equal(html.match(/class="city"/g).length, 80);
  assert.match(html, /<summary[^>]*>Data table<\/summary>/);
  assert.match(html, /data-role="dir"[^>]*>down</);
});

test("agent post has the scene and seven steps", async () => {
  const html = await page("blog/an-agent-and-one-duplicated-file/index.html");
  assert.match(html, /data-agent-loop/);
  assert.equal(html.match(/class="step[^"]*" data-step="/g).length, 7);
  assert.match(html, /84,000/);
  assert.match(html, /42,000/);
});

test("row journey post has the scene and eight stops", async () => {
  const html = await page("blog/one-row-to-power-bi/index.html");
  assert.match(html, /data-row-journey/);
  assert.equal(html.match(/class="step[^"]*" data-step="/g).length, 8);
  assert.match(html, /23:30:12Z/);
  assert.match(html, /42,000/);
});

test("no leftovers", async () => {
  for (const p of [
    "index.html",
    "about/index.html",
    "projects/index.html",
    "blog/index.html",
  ]) {
    assert.doesNotMatch(await page(p), /Topics|Seemron/);
  }
});
