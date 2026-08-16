import Image from "next/image";
import { SignalStory } from "./components/SignalStory";

const linkedinSearch =
  "https://www.linkedin.com/search/results/people/?keywords=Manisha%20Subedi%20Lisbon%20data%20analyst";

const personData = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Manisha Subedi",
  jobTitle: "Data Analyst",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Amadora",
    addressRegion: "Lisbon",
    addressCountry: "Portugal",
  },
  alumniOf: [
    "Universidade Politécnica de Bragança",
    "Faculdade de Ciências e Tecnologia da Universidade NOVA de Lisboa",
  ],
  knowsAbout: [
    "SQL",
    "Python",
    "Microsoft Excel",
    "Power BI",
    "Tableau",
    "High-performance liquid chromatography",
  ],
};

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to the main content
      </a>

      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="Manisha Subedi, home">
          MS<span>/</span>
        </a>
        <nav aria-label="Main navigation">
          <a href="#evidence">Evidence</a>
          <a href="#experience">Experience</a>
          <a href="#project">Next project</a>
          <a href="#notes">Notes</a>
        </nav>
      </header>

      <main id="main-content">
        <section className="hero" id="top">
          <div className="hero-copy">
            <p className="eyebrow">Data analyst · Lisbon, Portugal</p>
            <h1>
              From lab evidence
              <span>to clear decisions.</span>
            </h1>
            <p className="hero-intro">
              I use SQL, Python, Excel, Power BI, and Tableau to turn complex
              data into useful decisions.
            </p>
            <p className="hero-support">
              My chemical engineering and food science background gives each
              analysis a firm research base.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#evidence">
                Explore the evidence <span aria-hidden="true">↓</span>
              </a>
              <a
                className="text-link"
                href={linkedinSearch}
                target="_blank"
                rel="noreferrer"
              >
                Find Manisha on LinkedIn <span aria-hidden="true">↗</span>
              </a>
            </div>
            <p className="availability">
              <span aria-hidden="true" /> Open to entry-level data analyst roles
            </p>
          </div>

          <div className="portrait-wrap">
            <div className="portrait-frame">
              <Image
                src="/manisha-subedi.jpg"
                alt="Manisha Subedi smiles near a window with a green landscape."
                fill
                priority
                sizes="(max-width: 800px) 88vw, 42vw"
              />
            </div>
            <div className="portrait-caption">
              <span>Manisha Subedi</span>
              <span>Amadora · Lisbon</span>
            </div>
          </div>

          <div className="hero-ledger" aria-label="Profile facts">
            <div>
              <strong>06</strong>
              <span>months of research</span>
            </div>
            <div>
              <strong>05</strong>
              <span>core data tools</span>
            </div>
            <div>
              <strong>01</strong>
              <span>master&apos;s degree in progress</span>
            </div>
          </div>
        </section>

        <section className="section evidence-section" id="evidence">
          <div className="section-heading">
            <p className="eyebrow">01 · Evidence ledger</p>
            <h2>Each claim needs proof.</h2>
            <p>
              This ledger connects Manisha&apos;s data skills to her education and
              research.
            </p>
          </div>

          <div className="evidence-grid">
            <article className="evidence-card">
              <span className="card-number">01</span>
              <p className="card-label">Research practice</p>
              <h3>Experimental discipline</h3>
              <p>
                At CIMO, I measured physicochemical properties and analyzed
                phenolic compounds with HPLC.
              </p>
              <p>
                I also assessed antioxidant activity with OxHLIA and TBARS
                assays.
              </p>
              <div className="proof-line">
                <span>Proof</span>
                <p>Six-month research internship · Bragança</p>
              </div>
            </article>

            <article className="evidence-card accent-card">
              <span className="card-number">02</span>
              <p className="card-label">Analysis practice</p>
              <h3>A practical data toolkit</h3>
              <p>
                I use SQL and Python for analysis. I use Excel, Power BI, and
                Tableau for reports and visual stories.
              </p>
              <p>
                I focus on traceable data, useful comparisons, and direct
                conclusions.
              </p>
              <div className="proof-line">
                <span>Tools</span>
                <p>SQL · Python · Excel · Power BI · Tableau</p>
              </div>
            </article>

            <article className="evidence-card">
              <span className="card-number">03</span>
              <p className="card-label">Domain base</p>
              <h3>Science behind the analysis</h3>
              <p>
                Chemical engineering taught me to divide complex systems into
                measurable parts.
              </p>
              <p>
                Food science now adds a strong applied research context to my
                data work.
              </p>
              <div className="proof-line">
                <span>Education</span>
                <p>Chemical Engineering · Food Science and Technology</p>
              </div>
            </article>
          </div>
        </section>

        <SignalStory />

        <section className="section experience-section" id="experience">
          <div className="section-heading compact-heading">
            <p className="eyebrow">02 · Experience</p>
            <h2>A path from experiments to analysis.</h2>
          </div>

          <div className="timeline">
            <article className="timeline-item">
              <div className="timeline-date">
                <span>Sep 2023</span>
                <span>Feb 2024</span>
              </div>
              <div className="timeline-content">
                <p className="card-label">Centro de Investigação de Montanha</p>
                <h3>Scientific Initiation Intern</h3>
                <p>
                  I measured physicochemical properties. I analyzed phenolic
                  compounds with HPLC and processed data for a final report.
                </p>
                <ul className="tag-list" aria-label="Research methods">
                  <li>HPLC</li>
                  <li>OxHLIA</li>
                  <li>TBARS</li>
                  <li>Experimental data</li>
                </ul>
              </div>
            </article>

            <article className="timeline-item">
              <div className="timeline-date">
                <span>2025</span>
                <span>2027</span>
              </div>
              <div className="timeline-content">
                <p className="card-label">NOVA University Lisbon</p>
                <h3>Master&apos;s degree in Food Science and Technology</h3>
                <p>
                  This degree adds food science, research methods, and domain
                  context to my analysis work.
                </p>
                <span className="status-pill">In progress</span>
              </div>
            </article>

            <article className="timeline-item">
              <div className="timeline-date">
                <span>2021</span>
                <span>2024</span>
              </div>
              <div className="timeline-content">
                <p className="card-label">Universidade Politécnica de Bragança</p>
                <h3>Bachelor&apos;s degree in Chemical Engineering</h3>
                <p>
                  The program formed my base in quantitative analysis, process
                  logic, and structured problem work.
                </p>
              </div>
            </article>
          </div>
        </section>

        <section className="project-section" id="project">
          <div className="project-intro">
            <p className="eyebrow light">03 · Next case study · In development</p>
            <h2>Evidence ETL</h2>
            <p className="project-lede">
              A PDF-to-data pipeline with an error atlas.
            </p>
            <p>
              This project will convert public food reports into cited, typed
              rows. It will measure extraction errors before a person reviews
              uncertain fields.
            </p>
          </div>

          <ol className="project-flow">
            <li>
              <span>01</span>
              <div>
                <strong>Parse</strong>
                <p>Read reports and tables with deterministic tools.</p>
              </div>
            </li>
            <li>
              <span>02</span>
              <div>
                <strong>Structure</strong>
                <p>Map each field to a strict schema with source evidence.</p>
              </div>
            </li>
            <li>
              <span>03</span>
              <div>
                <strong>Test</strong>
                <p>Measure field accuracy, citation support, cost, and review rate.</p>
              </div>
            </li>
            <li>
              <span>04</span>
              <div>
                <strong>Explain</strong>
                <p>Show each error by field, document layout, and source.</p>
              </div>
            </li>
          </ol>

          <div className="project-footer">
            <p>
              <span>Interview summary</span>
              I turn messy reports into cited data and measure each failure.
            </p>
            <div className="project-tags" aria-label="Planned project tools">
              <span>Python</span>
              <span>SQL</span>
              <span>LLM evals</span>
              <span>Data lineage</span>
            </div>
          </div>
        </section>

        <section className="section notes-section" id="notes">
          <div className="section-heading compact-heading">
            <p className="eyebrow">04 · Field notes</p>
            <h2>Short notes on dependable data.</h2>
          </div>

          <div className="notes-grid">
            <article className="note-card">
              <p className="note-index">Note 01</p>
              <h3>Trace every value</h3>
              <p>
                A useful value needs a source, method, unit, and transformation.
                This rule applies to assay results and business metrics.
              </p>
              <span>Data lineage · 2 min read</span>
            </article>
            <article className="note-card">
              <p className="note-index">Note 02</p>
              <h3>When a rule beats a model</h3>
              <p>
                Use a fixed rule when the rule gives a dependable answer. Use a
                language model only for uncertain structure.
              </p>
              <span>AI systems · 2 min read</span>
            </article>
            <article className="note-card">
              <p className="note-index">Note 03</p>
              <h3>Valid JSON can still be wrong</h3>
              <p>
                A typed output proves its shape. A citation test proves its
                content. A dependable pipeline needs both tests.
              </p>
              <span>Evaluation · 2 min read</span>
            </article>
          </div>
        </section>

        <section className="contact-section">
          <p className="eyebrow light">Available for the next question</p>
          <h2>I seek a junior data analyst role.</h2>
          <p>
            I am based in Amadora, Lisbon. I bring research discipline, a
            practical data toolkit, and strong domain context.
          </p>
          <a
            className="button button-light"
            href={linkedinSearch}
            target="_blank"
            rel="noreferrer"
          >
            Find Manisha on LinkedIn <span aria-hidden="true">↗</span>
          </a>
        </section>
      </main>

      <footer>
        <p>Manisha Subedi · Data Analyst</p>
        <p>Amadora, Lisbon, Portugal · 2026</p>
      </footer>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personData) }}
      />
    </>
  );
}
