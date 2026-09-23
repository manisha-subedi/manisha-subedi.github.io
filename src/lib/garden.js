// Flowers for the home page. A flower is a list of strokes.
// Each stroke is a line of points that gets drawn in over time, like a pen.

export const PETAL_COLORS = ["#d9534f", "#e8a33d", "#c85f9a", "#5b7fc1", "#9b6fc6", "#e2b93b"];
const GREEN = "#5d8a5d";
const GRAY = "#888";
const INK = "#444";

// small seeded random, so a flower looks the same after a resize
export function random(seed) {
  let s = seed >>> 0 || 1;
  return () => {
    s = (s * 1664525 + 1013904223) >>> 0;
    return s / 4294967296;
  };
}

function stroke(points, color, start, end, fill) {
  const lengths = [0];
  for (let i = 1; i < points.length; i++) {
    const a = points[i - 1], b = points[i];
    lengths.push(lengths[i - 1] + Math.hypot(b.x - a.x, b.y - a.y));
  }
  return { points, lengths, color, start, end, fill };
}

// points along a curve from a to d, bending toward b and c
function curve(a, b, c, d, n, wobble) {
  const points = [];
  for (let i = 0; i <= n; i++) {
    const t = i / n, u = 1 - t;
    points.push({
      x: u * u * u * a.x + 3 * u * u * t * b.x + 3 * u * t * t * c.x + t * t * t * d.x + wobble(),
      y: u * u * u * a.y + 3 * u * u * t * b.y + 3 * u * t * t * c.y + t * t * t * d.y + wobble(),
    });
  }
  return points;
}

function circle(center, r, n, wobble) {
  const points = [];
  for (let i = 0; i <= n; i++) {
    const a = (i / n) * Math.PI * 2;
    points.push({ x: center.x + Math.cos(a) * r + wobble(), y: center.y + Math.sin(a) * r + wobble() });
  }
  return points;
}

// a petal is a loop that starts and ends at the flower center
function petal(center, angle, length, width, wobble) {
  const points = [];
  for (let i = 0; i <= 20; i++) {
    const t = (i / 20) * Math.PI * 2;
    const along = (length * (1 - Math.cos(t))) / 2;
    const across = (width / 2) * Math.sin(t);
    points.push({
      x: center.x + Math.cos(angle) * along - Math.sin(angle) * across + wobble(),
      y: center.y + Math.sin(angle) * along + Math.cos(angle) * across + wobble(),
    });
  }
  return points;
}

export function makeFlower(f) {
  const rand = random(f.seed);
  const wobble = () => (rand() - 0.5) * 1.2;
  const base = { x: f.x, y: f.ground };
  const top = { x: f.x + f.lean, y: f.ground - f.height };
  const stem = curve(
    base,
    { x: f.x, y: f.ground - f.height * 0.4 },
    { x: f.x + f.lean * 0.6, y: f.ground - f.height * 0.8 },
    top, 40, wobble,
  );
  stem[0] = base;
  const strokes = [stroke(stem, GREEN, 0, 900)];

  const leaves = 1 + Math.floor(rand() * 2);
  let side = rand() < 0.5 ? -1 : 1;
  for (let i = 0; i < leaves; i++) {
    const t = 0.3 + rand() * 0.35;
    const at = stem[Math.round(t * 40)];
    const len = 18 + rand() * 14;
    const tip = { x: at.x + side * len, y: at.y - len * 0.5 };
    const out = curve(at, { x: at.x + side * len * 0.2, y: at.y - len * 0.6 }, tip, tip, 12, wobble);
    const back = curve(tip, tip, { x: at.x + side * len * 0.7, y: at.y + len * 0.1 }, at, 12, wobble);
    const start = 300 + t * 600;
    strokes.push(stroke([...out, ...back.slice(1)], GREEN, start, start + 400));
    side = -side;
  }

  if (f.kind === "puff") {
    strokes.push(stroke(circle(top, 2.5, 12, wobble), GRAY, 800, 1000));
    for (let i = 0; i < 16; i++) {
      const a = (i / 16) * Math.PI * 2 + rand() * 0.2;
      const len = 13 + rand() * 5;
      const end = { x: top.x + Math.cos(a) * len, y: top.y + Math.sin(a) * len };
      const start = 900 + i * 45;
      strokes.push(stroke([top, end], GRAY, start, start + 200));
      strokes.push(stroke(circle(end, 1.6, 8, wobble), GRAY, start + 150, start + 300));
    }
    return strokes;
  }

  let angles, length, width;
  if (f.kind === "bud") {
    angles = [-Math.PI / 2 - 0.5, -Math.PI / 2 + 0.5, -Math.PI / 2];
    length = 22 + rand() * 6;
    width = 11;
  } else {
    const n = 7 + Math.floor(rand() * 5);
    const turn = rand() * Math.PI;
    angles = Array.from({ length: n }, (_, i) => turn + (i / n) * Math.PI * 2);
    length = 12 + rand() * 7;
    width = 6 + rand() * 3;
  }
  angles.forEach((a, i) => {
    const start = 900 + i * 80;
    strokes.push(stroke(petal(top, a, length, width, wobble), f.color, start, start + 260, f.color));
  });
  if (f.kind === "daisy") {
    strokes.push(stroke(circle(top, 3.5, 16, wobble), INK, 900, 1200, "#e2b93b"));
  }
  return strokes;
}
