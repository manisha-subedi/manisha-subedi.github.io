export const site = {
  name: "Manisha Subedi",
  role: "Data Analyst",
  location: "Lisbon, Portugal",
  linkedin: "https://pt.linkedin.com/in/manisubedi",
  description:
    "Manisha Subedi is a data analyst based near Lisbon, Portugal.",
};

export const projects = [
  {
    title: "Hotel Revenue and Cancellation Analytics",
    status: "Power BI, DAX, DuckDB",
    url: "https://manisha-subedi.github.io/hotel-bookings/",
    code: "https://github.com/manisha-subedi/hotel-bookings",
    text: "I used booking data from two hotels in Portugal, from 2015 to 2017, to build a five-page Power BI report. It covers revenue, occupancy, booking patterns, and cancellations, with a drill-through page for individual bookings. The model has six tables and seven relationships. The web version includes monthly charts, a historical cancellation lookup, and an overbooking calculator based on adjustable assumptions.",
    example: `119,390 bookings, 37.0% cancelled
lead time 181+ days                    57.0% cancelled
active 7 days before arrival, city     8.5% cancel or no-show
active 7 days before arrival, resort   4.8% cancel or no-show

city hotel, 226 estimated rooms, 8.5% late cancellation
  model's lowest-cost option: 18 extra bookings
  expected cost €564 a night, compared with €2,055 without overbooking`,
  },
  {
    title: "Executive Sales Performance Dashboard",
    status: "Tableau",
    text: "A Tableau dashboard with more than 10,000 sales records, covering sales, profit, orders, and customers. The views compare performance by customer, product, and region. The Consumer segment performed best in this analysis.",
    example: `sales growth, year over year     36.2%
profit growth, year over year    30.9%
customer growth                   6.0%`,
  },
  {
    title: "recount",
    status: "v0.1",
    url: "https://github.com/manisha-subedi/recount",
    text: "recount lets Claude and other MCP-compatible assistants query data with SQL. It checks the tables for duplicate rows, unusual monthly row counts, and outdated data, then returns any warnings alongside the result.",
    example: `revenue = sum(amount) from orders where status in ('paid', 'fulfilled')

month    revenue
-------  -------
2026-06  46665
2026-07  47665
2026-08  90050

Warnings:
- orders: 4811 rows but only 3615 distinct order_id. Some rows appear twice.
- orders: 2392 rows in 2026-08. Other months usually have about 1219 rows. Was this month loaded twice?`,
    install: "claude mcp add recount -- recount ./example ./example/metrics.yaml",
  },
  {
    title: "Late deliveries and bad reviews",
    status: "v0.1",
    url: "https://github.com/manisha-subedi/late-deliveries",
    text: "I analysed about 100,000 orders from a Brazilian online marketplace to compare delivery delays and customer reviews. Late orders accounted for 7 percent of orders but 37 percent of one-star reviews. The analysis also looks at differences by seller, destination, and month, and how allowing more time in the promised delivery date would change the late-order rate.",
    example: `96,470 delivered orders, 6,534 late (6.8%)
36.7% of all one-star reviews are for late orders

bucket               orders  avg score  one-star reviews %
-------------------  ------  ---------  ----------
on time              89443   4.29       6.6
1 to 3 days late     1852    3.29       25.1
4 to 7 days late     1748    2.10       58.6
8 or more days late  2781    1.70       69.8

If each promised date were 3 days later, 4.8% of orders would be late`,
    image: "/late-deliveries-score.svg",
    install: "python analysis.py",
  },
  {
    title: "A warehouse on a laptop",
    status: "v0.1",
    url: "https://github.com/manisha-subedi/laptop-warehouse",
    text: "A local data warehouse for Chicago's Divvy bike-share data. A Python script downloads monthly ride files and loads them into DuckDB, then dbt cleans the data and prepares reporting tables. File hashes prevent the same file from loading twice. The test run loaded 2.3 million rides in 25 seconds.",
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
