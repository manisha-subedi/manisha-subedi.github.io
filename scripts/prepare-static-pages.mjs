import { copyFile, mkdir } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const outputRoot = new URL("../dist/client/", import.meta.url);
const routes = [
  "about",
  "blog",
  "blog/a-dashboard-is-not-the-analysis",
  "blog/what-hplc-taught-me",
  "projects",
  "topics",
];

for (const route of routes) {
  const source = new URL(`${route}.html`, outputRoot);
  const destination = new URL(join(route, "index.html"), outputRoot);
  await mkdir(dirname(fileURLToPath(destination)), { recursive: true });
  await copyFile(source, destination);
}
