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
    status: "live page",
    url: "https://manisha-subedi.github.io/hotel-bookings/",
    code: "https://github.com/manisha-subedi/hotel-bookings",
    text: "119,390 real bookings from two hotels in Portugal, 2015 to 2017. The flat booking file becomes a star schema in DuckDB: one fact table of bookings, one of occupied room nights, four dimension tables, and a date table that serves both the arrival date and the cancellation date. The page shows occupancy, ADR, and RevPAR by month, computed from the room count and not from booked nights. It has a lookup for how often a booking like this one cancels, and a tool that says how many rooms to oversell on a night, using the rate of bookings still on the books a week before arrival.",
    example: `119,390 bookings, 37.0% cancelled
lead time 181+ days                    57.0% cancelled
still on the books 7 days out, city     8.5% cancel or no-show
still on the books 7 days out, resort   4.8% cancel or no-show

city hotel, 226 rooms, 8.5% late cancellation
  sell 18 more than you have
  expected cost €564 a night, against €2,055 with no overbooking`,
  },
  {
    title: "Executive Sales Performance Dashboard",
    status: "Tableau",
    text: "An interactive Tableau dashboard built on more than 10,000 sales records. It shows sales, profit, orders, and customers, with views by customer, product, and region. The Consumer segment was the strongest.",
    example: `sales growth, year over year     36.2%
profit growth, year over year    30.9%
customer growth                   6.0%`,
  },
  {
    title: "recount",
    status: "v0.1",
    url: "https://github.com/manisha-subedi/recount",
    text: "recount is an MCP server for data. Claude asks for a number. recount runs the SQL, checks the tables, and returns the number with warnings about duplicate rows, a monthly row count that is about twice the usual count, and data that may be out of date.",
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
    text: "This project looks at 100,000 real orders from a Brazilian online shop between 2016 and 2018. Late orders were 7 percent of all orders, but they accounted for 37 percent of one-star reviews. The analysis does not point to sellers as the main problem. In some states and months, it points instead to the promised delivery date.",
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
    text: "This project loads monthly CSV files from Chicago's bike-share system into DuckDB. dbt cleans the data and builds tables for reporting. Each file is loaded only once. The project loaded 2.3 million real rides in 25 seconds.",
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
