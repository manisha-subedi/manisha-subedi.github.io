export const site = {
  name: "Manisha Subedi",
  role: "Data Analyst",
  location: "Amadora, Lisbon, Portugal",
  linkedin: "https://pt.linkedin.com/in/manisubedi",
  description:
    "The portfolio of Manisha Subedi, a data analyst based near Lisbon, Portugal.",
};

export const projects = [
  {
    title: "recount",
    status: "v0.1",
    url: "https://github.com/manisha-subedi/recount",
    text: "An MCP server for your data. Claude asks for a number, recount runs the SQL, checks the tables, and returns the number with warnings: duplicate rows, a month that doubled, old data.",
    example: `revenue = sum(amount) from orders where status in ('paid', 'fulfilled')

month    revenue
-------  -------
2026-06  46665
2026-07  47665
2026-08  90050

Warnings:
- orders: 4811 rows but only 3615 distinct order_id. Some rows are in twice.
- orders: 2392 rows in 2026-08, the usual month has about 1219. Loaded twice?`,
    install: "claude mcp add recount -- recount ./example ./example/metrics.yaml",
  },
  {
    title: "Late deliveries and bad reviews",
    status: "in development",
    text: "100,000 real orders from a Brazilian online shop. How much does a late delivery cost in review score, and which sellers cause the most late ones?",
  },
  {
    title: "A warehouse on a laptop",
    status: "v0.1",
    url: "https://github.com/manisha-subedi/laptop-warehouse",
    text: "Monthly CSV files from Chicago's bike share go into DuckDB, dbt cleans them and builds the tables for a report. A file is loaded only once. 2.3 million real rides, 25 seconds to load.",
    example: `$ python load.py 202605 202606 202607
202605-divvy-tripdata.zip: loaded 653704 rows
202606-divvy-tripdata.zip: loaded 762550 rows
202607-divvy-tripdata.zip: loaded 869051 rows

$ python load.py 202606
202606-divvy-tripdata.zip: already loaded, skipped`,
    image: "/laptop-warehouse-rides.svg",
    install: "dbt build --project-dir warehouse --profiles-dir warehouse",
  },
];
