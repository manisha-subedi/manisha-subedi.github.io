import Image from "next/image";

export default function Home() {
  return (
    <main className="page-content">
      <section className="profile" aria-labelledby="profile-name">
        <Image
          className="profile-photo"
          src="/manisha-subedi.jpg"
          alt="Manisha Subedi"
          width={180}
          height={180}
          priority
        />

        <div className="profile-details">
          <h1 id="profile-name">Manisha Subedi</h1>
          <p className="profile-role">Data Analyst</p>
          <p className="profile-location">Amadora, Lisbon, Portugal</p>
          <p className="profile-links">
            <a
              className="profile-link"
              href="https://pt.linkedin.com/in/manisubedi"
              target="_blank"
              rel="noreferrer"
              aria-label="Manisha Subedi on LinkedIn (opens in a new tab)"
            >
              LinkedIn
            </a>
          </p>
        </div>
      </section>

      <section className="intro" aria-label="Introduction">
        <p>
          I came to data analysis through chemical engineering and lab
          research. Much of that work involved the same basics: check a
          measurement, compare results, and explain what they mean.
        </p>
        <p>
          Since then, I have used SQL, Python, Excel, Power BI, and
          Tableau. I am now looking for my first data analyst role.
        </p>
      </section>

      <section className="content-section">
        <h2>Interests</h2>
        <p>
          My current focus is on the practical parts of analysis: cleaning the
          data, checking definitions, making useful comparisons, and keeping
          the final explanation clear.
        </p>
        <ul>
          <li>Data cleaning and quality checks</li>
          <li>Business reporting and dashboards</li>
          <li>Research and food data</li>
        </ul>
      </section>

      <section className="content-section">
        <h2>Experience</h2>
        <article className="resume-entry">
          <header className="resume-entry-heading">
            <div>
              <h3>Scientific Initiation Intern</h3>
              <p>Centro de Investigação de Montanha (CIMO)</p>
            </div>
            <p className="resume-date">Sep 2023 – Feb 2024</p>
          </header>
          <p>
            Measured physicochemical properties, analyzed phenolic compounds
            with HPLC, assessed antioxidant activity with OxHLIA and TBARS, and
            processed experimental data for a final report.
          </p>
        </article>
      </section>
    </main>
  );
}
