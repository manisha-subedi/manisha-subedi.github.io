import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://levi09750.github.io/"),
  title: "Manisha Subedi | Data Analyst",
  description:
    "Manisha Subedi connects research discipline, data analysis, and clear decisions.",
  keywords: [
    "Manisha Subedi",
    "data analyst",
    "SQL",
    "Python",
    "Power BI",
    "Tableau",
    "Lisbon",
  ],
  authors: [{ name: "Manisha Subedi" }],
  openGraph: {
    title: "Manisha Subedi | From lab evidence to clear decisions",
    description:
      "A data analyst with a chemical engineering and food science background.",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "https://levi09750.github.io/og.png",
        width: 1731,
        height: 909,
        alt: "Manisha Subedi, Data Analyst. From lab evidence to clear decisions.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Manisha Subedi | Data Analyst",
    description: "From lab evidence to clear decisions.",
    images: [
      "https://levi09750.github.io/og.png",
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
