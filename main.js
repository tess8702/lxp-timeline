// Sample data
const data = [
  {
    date: "2023-01-01",
    title: "Event 1",
    image: "https://drive.google.com/drive/u/1/folders/1NV1A2R_VtKodboDvmN5UtJMMAT6iVg0m",
    description: "This is the description for Event 1."
  },
  {
    date: "2023-02-01",
    title: "Event 2",
    image: "https://drive.google.com/drive/u/1/folders/1NV1A2R_VtKodboDvmN5UtJMMAT6iVg0m",
    description: "This is the description for Event 2."
  }
];

// Select the timeline container
const container = d3.select("#timeline");

// Create a div for each event
const events = container.selectAll("div.event")
  .data(data)
  .enter()
  .append("div")
  .attr("class", "event");

// Add the date
events.append("div")
  .attr("class", "date")
  .text(d => d.date);

// Add the image
events.append("img")
  .attr("class", "image")
  .attr("src", d => d.image);

// Add the title
events.append("div")
  .attr("class", "title")
  .text(d => d.title);

// Add the description
events.append("div")
  .attr("class", "description")
  .text(d => d.description);
