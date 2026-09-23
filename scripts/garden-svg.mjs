// Draws one garden as an SVG that draws itself in when opened.
// Used for the GitHub profile picture. Run: node scripts/garden-svg.mjs > garden.svg

import { makeFlower, PETAL_COLORS } from "../src/lib/garden.js";

const width = 730, height = 220, ground = height - 14;
const kinds = ["daisy", "daisy", "daisy", "bud", "puff"];
const count = 10;
const slots = Array.from({ length: count }, (_, i) => i).sort(() => Math.random() - 0.5);

const pick = (list) => list[Math.floor(Math.random() * list.length)];
const round = (n) => Math.round(n * 10) / 10;

let paths = "";
slots.forEach((slot, i) => {
  const flower = {
    x: ((slot + 0.2 + Math.random() * 0.6) / count) * width,
    ground,
    height: 60 + Math.random() * (ground - 90),
    lean: (Math.random() - 0.5) * 30,
    kind: pick(kinds),
    color: pick(PETAL_COLORS),
    seed: Math.floor(Math.random() * 1e9),
  };
  const born = 0.3 + i * 0.22;
  for (const s of makeFlower(flower)) {
    const d = s.points.map((p, j) => `${j ? "L" : "M"}${round(p.x)} ${round(p.y)}`).join("");
    const length = round(s.lengths[s.lengths.length - 1]);
    const delay = round(born + s.start / 1000);
    const time = round((s.end - s.start) / 1000);
    if (s.fill) {
      paths += `<path d="${d}" fill="${s.fill}" stroke="none" opacity="0" style="animation:show .3s ${round(delay + time)}s forwards"/>\n`;
    }
    paths += `<path d="${d}" stroke="${s.color}" stroke-dasharray="${length}" stroke-dashoffset="${length}" style="animation:draw ${time}s ${delay}s linear forwards"/>\n`;
  }
});

console.log(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${width} ${height}" width="${width}" height="${height}">
<style>
@keyframes draw { from { opacity: 1; } to { opacity: 1; stroke-dashoffset: 0; } }
@keyframes show { to { opacity: 0.25; } }
path { fill: none; stroke-width: 1.4; stroke-linecap: round; stroke-linejoin: round; opacity: 0; }
</style>
${paths}</svg>`);
