export const site = {
  name: "Manisha Subedi",
  role: "Data Analyst",
  location: "Lisbon, Portugal",
  linkedin: "https://pt.linkedin.com/in/manisubedi",
  description:
    "Manisha Subedi is a data analyst based near Lisbon, Portugal.",
};

// url is where the title goes. live and code show as small links under the text.
export const projects = [
  {
    title: "Hotel Revenue and Cancellation Analytics",
    tools: "Power BI · DAX · DuckDB",
    url: "https://manisha-subedi.github.io/hotel-bookings/",
    live: "https://manisha-subedi.github.io/hotel-bookings/",
    code: "https://github.com/manisha-subedi/hotel-bookings",
    text: "A five-page Power BI report on 119,390 bookings from two hotels in Portugal. The web version adds a cancellation lookup and an overbooking calculator.",
  },
  {
    title: "Executive Sales Performance Dashboard",
    tools: "Tableau · DuckDB · SQL",
    url: "https://manisha-subedi.github.io/sales-dashboard/",
    live: "https://manisha-subedi.github.io/sales-dashboard/",
    code: "https://github.com/manisha-subedi/sales-dashboard",
    text: "A Tableau dashboard on four years of Superstore sales, 10,194 order lines. The web version shows the same numbers and lets you try a cap on discounts.",
  },
  {
    title: "recount",
    tools: "Python · DuckDB · MCP",
    url: "https://github.com/manisha-subedi/recount",
    code: "https://github.com/manisha-subedi/recount",
    text: "An MCP server that lets Claude query data with SQL. It checks the tables for duplicate rows, odd monthly counts, and stale data, and returns warnings with the result.",
  },
  {
    title: "Late deliveries and bad reviews",
    tools: "Python · DuckDB · SQL",
    url: "https://github.com/manisha-subedi/late-deliveries",
    code: "https://github.com/manisha-subedi/late-deliveries",
    text: "About 100,000 orders from a Brazilian online marketplace, compared with their reviews. Late orders were 7 percent of orders but 37 percent of one-star reviews.",
  },
  {
    title: "A warehouse on a laptop",
    tools: "Python · DuckDB · dbt",
    url: "https://github.com/manisha-subedi/laptop-warehouse",
    code: "https://github.com/manisha-subedi/laptop-warehouse",
    text: "A local data warehouse for Chicago bike-share data. A script loads monthly files into DuckDB and dbt builds the reporting tables.",
  },
];
