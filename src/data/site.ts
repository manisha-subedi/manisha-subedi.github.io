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
    text: "An MCP server that never hands the model a number without the checks. Point it at a folder of CSV files, ask Claude for last month's revenue, and the number comes back with the warnings attached: duplicate rows, a month that doubled, stale data.",
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
    text: "100,000 real orders from a Brazilian online shop. How much does a late delivery cost in review score, and which sellers drive it?",
  },
  {
    title: "A warehouse on a laptop",
    status: "in development",
    text: "Monthly files into DuckDB with dbt, tests, a loader that refuses a file it already has, and one Power BI page on top.",
  },
];
