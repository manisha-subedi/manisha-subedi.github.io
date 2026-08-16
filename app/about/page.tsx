import type { Metadata } from "next";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "About",
  description: "About Manisha Subedi.",
};

export default function AboutPage() {
  return (
    <main className="page-content">
      <h1 className="small-page-title">A bit about me</h1>
      <div className="about-copy">
        <p>
          I live in Amadora, near Lisbon. My academic background is in chemical
          engineering, and I am now studying food science and technology at FCT
          NOVA.
        </p>
        <p>
          My internship at CIMO included lab measurements, HPLC, antioxidant
          assays, experimental data, and a final research report.
        </p>
        <p>
          I am looking for an entry-level data analyst role where I can keep
          learning and work on real business problems.
        </p>
      </div>
    </main>
  );
}
