// scroll-driven steps for a sticky scene. shared by the illustrated posts.
// elements with data-from / data-until get class "on" while the step is in range.
export function trackSteps(root: HTMLElement, onStep?: (n: number) => void) {
  const parts = root.querySelectorAll<Element>("[data-from]");
  const sceneWrap = root.querySelector<HTMLElement>(".scene-wrap")!;
  const steps = [...root.querySelectorAll<HTMLElement>(".step")];
  const texts = steps.map((s) => s.querySelector("p")!);
  let current = 0;

  function setStep(n: number) {
    if (n === current) return;
    current = n;
    parts.forEach((el) => {
      const from = Number((el as HTMLElement).dataset.from);
      const until = (el as HTMLElement).dataset.until
        ? Number((el as HTMLElement).dataset.until)
        : Infinity;
      el.classList.toggle("on", n >= from && n <= until);
    });
    steps.forEach((s, i) => s.classList.toggle("is-active", i + 1 === n));
    onStep?.(n);
  }

  // the active step is the first one whose text is still visible under the sticky scene
  function onScroll() {
    const edge = sceneWrap.getBoundingClientRect().bottom;
    let n = steps.length;
    for (let i = 0; i < steps.length; i++) {
      if (texts[i].getBoundingClientRect().bottom > edge + 12) {
        n = i + 1;
        break;
      }
    }
    setStep(n);
  }

  let ticking = false;
  window.addEventListener(
    "scroll",
    () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        onScroll();
        ticking = false;
      });
    },
    { passive: true },
  );
  onScroll();
}
