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
    text: "Real booking data from two hotels in Portugal, 2015 to 2017. I turned the flat booking file into a star schema in DuckDB. The page shows the numbers a hotel manager checks every month: occupancy, ADR, and RevPAR. It has a small tool that tells you how often a booking like yours gets cancelled, and a tool that tells the hotel how many extra rooms it can sell. The room counts are not in the data, so I estimated them from the busiest night.",
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
    text: "A Tableau dashboard built on more than 10,000 sales records. It shows sales, profit, orders, and customers. You can look at it by customer, by product, or by region. The Consumer segment was the strongest one.",
    example: `sales growth, year over year     36.2%
profit growth, year over year    30.9%
customer growth                   6.0%`,
  },
  {
    title: "recount",
    status: "v0.1",
    url: "https://github.com/manisha-subedi/recount",
    text: "recount is a small tool for Claude, or any AI that uses MCP. When you ask Claude a question about your data, recount runs the SQL. But before it gives back the number, it checks the tables. If some rows are in twice, or one month has double the usual rows, or the data is old, it says so next to the number. I built it because a number with no warning is easy to trust and easy to get wrong.",
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
    text: "This project looks at 100,000 real orders from a Brazilian online shop, from 2016 to 2018. I wanted to know one thing. When a parcel comes late, how much does the review drop? Late orders are only 7 percent of all orders, but they make 37 percent of the one-star reviews. The surprise was that it is not the sellers. It is the promised delivery date. In some states and some months, the shop promises a date it cannot keep.",
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
    text: "This is a small data warehouse that runs on a laptop. Every month, Chicago's bike share publishes a file of rides. My script downloads it and loads it into DuckDB. Then dbt cleans the data and builds the tables for a report. If you run the load twice by mistake, nothing happens. Each file is loaded only one time. It loaded 2.3 million real rides in 25 seconds.",
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
