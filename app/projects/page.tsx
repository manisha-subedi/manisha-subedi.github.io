import type { Metadata } from "next";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Projects",
  description: "Data analysis projects by Manisha Subedi.",
};

export default function ProjectsPage() {
  return (
    <main className="page-content">
      <h1 className="visually-hidden">Projects</h1>
      <p className="page-intro">
        This page is being kept simple until the first projects are selected.
      </p>

      <h2 className="small-page-title">Projects</h2>

      <p>
        <strong>Coming soon.</strong>
      </p>
      <p>
        The work will be added here after the project questions, data, and
        final format are agreed.
      </p>
    </main>
  );
}
