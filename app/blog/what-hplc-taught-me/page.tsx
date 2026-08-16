import type { Metadata } from "next";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Before lab data reaches a spreadsheet",
  description:
    "A short note on the context behind laboratory data.",
};

export default function HplcPost() {
  return (
    <main className="page-content blog-page">
      <article>
        <header className="post-header">
          <h1>Before lab data reaches a spreadsheet</h1>
          <p className="post-meta">August 2026 · 2 min read</p>
        </header>

        <div className="post-body">
          <p>
            During my internship at CIMO, I worked with physicochemical
            measurements, HPLC data, and two antioxidant assays. A result may
            look simple in a table, but it comes from a sample, a method, a
            unit, and a set of conditions.
          </p>

          <h2>Keep the context nearby</h2>
          <p>
            Two values can look comparable even when they came from different
            methods or conditions. A spreadsheet will not warn you. Units,
            source, date, and any transformation need to stay close to the
            result. If that context is missing, the number needs another check
            before it becomes a chart.
          </p>
          <p>
            An unusual result is not automatically an error. It may come from a
            transcription mistake, a measurement issue, or a real difference
            in the sample. Removing it because it looks awkward is not enough;
            the original record needs to be checked.
          </p>
          <p>
            A table can have no blank cells and still be wrong. The work before
            the chart matters just as much as the chart itself.
          </p>
        </div>
      </article>

      <a className="back-link" href="/blog/">
        ← Back to blog
      </a>
    </main>
  );
}
