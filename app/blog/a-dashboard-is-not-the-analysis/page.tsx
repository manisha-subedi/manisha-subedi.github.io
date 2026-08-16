import type { Metadata } from "next";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Before opening Power BI",
  description:
    "A short note on choosing the question before choosing the chart.",
};

export default function DashboardPost() {
  return (
    <main className="page-content blog-page">
      <article>
        <header className="post-header">
          <h1>Before opening Power BI</h1>
          <p className="post-meta">August 2026 · 2 min read</p>
        </header>

        <div className="post-body">
          <p>
            Power BI can turn data into a polished page quickly. That is useful,
            but it also makes it easy to start choosing charts before the
            question is settled.
          </p>
          <p>
            A monthly report, a one-time investigation, and a management summary
            do not need the same page. Before building anything, write down who
            will use it and what they need to decide.
          </p>

          <h2>A quick check</h2>
          <p>
            Finish the sentence, “We need to know this because…” If the ending
            is unclear, the dashboard probably does not have a clear job yet.
          </p>
          <p>
            Most business questions also need a comparison: this month against
            last month, one category against another, or actual results against
            a target. The layout should make that comparison easy to find.
          </p>
          <p>
            A crowded page is harder to read. If a chart does not help answer
            the main question, leave it out.
          </p>
        </div>
      </article>

      <a className="back-link" href="/blog/">
        ← Back to blog
      </a>
    </main>
  );
}
