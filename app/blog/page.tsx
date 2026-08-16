import type { Metadata } from "next";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Blog",
  description: "Notes on data analysis and research by Manisha Subedi.",
};

export default function BlogPage() {
  return (
    <main className="page-content blog-page">
      <h1 className="small-page-title">Blog</h1>

      <ul className="blog-list">
        <li>
          <a href="/blog/what-hplc-taught-me/">
            Before lab data reaches a spreadsheet
          </a>
          <time dateTime="2026-08">August 2026</time>
        </li>
        <li>
          <a href="/blog/a-dashboard-is-not-the-analysis/">
            Before opening Power BI
          </a>
          <time dateTime="2026-08">August 2026</time>
        </li>
      </ul>
    </main>
  );
}
