import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const dist = new URL("../dist/", import.meta.url);
const page = (p) => readFile(new URL(p, dist), "utf8");

test("home page", async () => {
  const html = await page("index.html");
  assert.match(html, /<title>Manisha Subedi<\/title>/);
  assert.match(html, /data engineer at Leapfrog Technology/);
  assert.match(html, /Bengen/);
  assert.match(html, /manisha-subedi\.jpg/);
  assert.match(html, /pt\.linkedin\.com\/in\/manisubedi/);
  assert.doesNotMatch(html, /chemical/i);
  for (const href of ["/projects/", "/blog/", "/about/"]) {
    assert.match(html, new RegExp(`href="${href}"`));
  }
});

test("about is short and has the illustration", async () => {
  const html = await page("about/index.html");
  for (const s of ["grew up in Nepal", "hike", "lisboa-illustration.svg"]) {
    assert.match(html, new RegExp(s));
  }
  assert.doesNotMatch(html, /Data Engineer I|placeholder|where I ended up/);
});

test("writing index and projects", async () => {
  const index = await page("blog/index.html");
  assert.match(index, /Simpson/);
  assert.match(index, /You could have invented the data agent/);
  assert.doesNotMatch(index, /Before opening Power BI|Before lab data/);
  const projects = await page("projects/index.html");
  assert.doesNotMatch(projects, /in development/);
  assert.match(projects, /github\.com\/manisha-subedi\/late-deliveries/);
  assert.match(projects, /github\.com\/manisha-subedi\/recount/);
});

test("data agent post has code and two figures", async () => {
  const html = await page("blog/you-could-have-invented-the-data-agent/index.html");
  assert.match(html, /data_agent/);
  assert.ok(html.match(/<pre/g).length >= 4, "four code blocks");
  assert.equal(html.match(/<figure/g).length, 2);
});

test("average post has six questions, code, and two figures", async () => {
  const html = await page("blog/yet-another-explanation-for-the-average-customer/index.html");
  assert.equal(html.match(/<strong>Q\d\./g).length, 6);
  assert.match(html, /without_whale/);
  assert.equal(html.match(/<figure/g).length, 2);
});

test("sample size post has the ball box, code, and two figures", async () => {
  const html = await page("blog/you-could-have-invented-the-sample-size-formula/index.html");
  assert.match(html, /data-ball-box/);
  assert.match(html, /users_per_arm/);
  assert.equal(html.match(/<figure/g).length, 2);
  assert.equal(html.match(/<button[^>]*data-n=/g).length, 2);
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
