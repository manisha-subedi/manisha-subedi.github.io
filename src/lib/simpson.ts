// simulated cities for the simpson's paradox post. seeded so every reader sees the same dots.
export type City = { x: number; y: number; big: boolean };

const N = 20; // per group
const SLOPE = 0.05; // growth per euro, the same inside both groups
const X_SHIFT = 45; // big cities spend this much more per person at gap = 1
const Y_SHIFT = -4; // and land this much lower at gap = 1

// mulberry32, small and good enough for a picture
function rng(seed: number) {
  return () => {
    seed = (seed + 0x6d2b79f5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

// base spend and noise never change; gap only slides the big group right and down
const base = (() => {
  const r = rng(7);
  const mk = (big: boolean) =>
    Array.from({ length: N }, () => ({ x0: 10 + r() * 40, e: (r() - 0.5) * 1.2, big }));
  return [...mk(false), ...mk(true)];
})();

export function cities(gap = 1): City[] {
  return base.map(({ x0, e, big }) => {
    const x = x0 + (big ? X_SHIFT * gap : 0);
    return { x, y: 2 + SLOPE * x + e + (big ? Y_SHIFT * gap : 0), big };
  });
}

// ordinary least squares
export function fit(p: { x: number; y: number }[]) {
  const n = p.length;
  const mx = p.reduce((s, q) => s + q.x, 0) / n;
  const my = p.reduce((s, q) => s + q.y, 0) / n;
  let sxx = 0;
  let sxy = 0;
  for (const q of p) {
    sxx += (q.x - mx) ** 2;
    sxy += (q.x - mx) * (q.y - my);
  }
  const slope = sxy / sxx;
  return { slope, intercept: my - slope * mx };
}

// svg scales: viewBox 640x400, plot from (48,28) to (624,356)
export const X_MAX = 100;
export const Y_MAX = 6;
export const sx = (x: number) => 48 + (x / X_MAX) * 576;
export const sy = (y: number) => 356 - (y / Y_MAX) * 328;

export type Seg = { x1: number; y1: number; x2: number; y2: number };

function seg(p: { x: number; y: number }[], x0: number, x1: number): Seg {
  const f = fit(p);
  return {
    x1: sx(x0),
    y1: sy(f.intercept + f.slope * x0),
    x2: sx(x1),
    y2: sy(f.intercept + f.slope * x1),
  };
}

// one trend line for everything, one per group, in svg coordinates
export function lines(data: City[]) {
  const small = data.filter((c) => !c.big);
  const big = data.filter((c) => c.big);
  const span = (p: City[]) => {
    const xs = p.map((c) => c.x);
    return [Math.min(...xs) - 3, Math.max(...xs) + 3] as const;
  };
  return {
    all: seg(data, ...span(data)),
    small: seg(small, ...span(small)),
    big: seg(big, ...span(big)),
    allSlope: fit(data).slope,
  };
}
