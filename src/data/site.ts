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
    status: "v0.1",
    url: "https://github.com/manisha-subedi/late-deliveries",
    text: "100,000 real orders from a Brazilian online shop, 2016 to 2018. Late deliveries are 7 percent of orders and 37 percent of one star reviews. It is not the sellers. It is the promised date, in some states and some months.",
    example: `96,470 delivered orders, 6,534 late (6.8%)
36.7% of all one star reviews come from a late order

bucket               orders  avg score  one star %
-------------------  ------  ---------  ----------
on time              89443   4.29       6.6
1 to 3 days late     1852    3.29       25.1
4 to 7 days late     1748    2.10       58.6
8 or more days late  2781    1.70       69.8

If the promised date had been 3 days later: 4.8% late`,
    image: "/late-deliveries-score.svg",
    install: "python analysis.py",
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
