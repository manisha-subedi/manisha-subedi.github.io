import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const dynamic = "force-static";

export const metadata: Metadata = {
  metadataBase: new URL("https://levi09750.github.io/"),
  title: {
    default: "Manisha Subedi",
    template: "%s | Manisha Subedi",
  },
  description:
    "The portfolio of Manisha Subedi, a data analyst based near Lisbon, Portugal.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <header className="site-header">
          <div className="site-header-inner">
            <Link className="site-name" href="/">
              Manisha Subedi
            </Link>
            <nav className="site-nav" aria-label="Main navigation">
              <a href="/projects/">Projects</a>
              <a href="/topics/">Topics</a>
              <a href="/blog/">Blog</a>
              <a href="/about/">About</a>
            </nav>
          </div>
        </header>

        {children}

        <footer className="site-footer">
          <p>© 2026 Manisha Subedi</p>
        </footer>
      </body>
    </html>
  );
}
