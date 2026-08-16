import type { Metadata } from "next";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Topics",
  description: "Topics that interest Manisha Subedi.",
};

export default function TopicsPage() {
  return (
    <main className="page-content">
      <h1 className="visually-hidden">Topics</h1>
      <p className="page-intro">
        Notes on data quality, research data, and business reporting.
      </p>

      <h2 className="small-page-title">Core topics</h2>
      <div className="topic-list">
        <details>
          <summary>Data quality and validation</summary>
          <p>
            How missing values, inconsistent units, and weak definitions can
            change an answer before the analysis begins.
          </p>
        </details>
        <details>
          <summary>Food and research data</summary>
          <p>
            Using careful measurement and clear comparisons to make scientific
            results easier to interpret.
          </p>
        </details>
        <details>
          <summary>Business intelligence</summary>
          <p>
            Building reports that answer a specific question instead of trying
            to place every available metric on one screen.
          </p>
        </details>
      </div>
    </main>
  );
}
