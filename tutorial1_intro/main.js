// load in csv
d3.csv("../data/directory.csv").then(data => {
  console.log("data", data);
   //select single instance of table
  const table = d3.select("#temps-table");

  // table header
  const thead = table.append("thead"); // not already in html
  thead
    .append("tr")
    .append("th")
    .attr("colspan", "12")
    .text("NYC High schools")
      .style("text-align", "left")
      .style("font-size", "18px");

  // column names
  thead
    .append("tr")
    .selectAll("th")
    .data(data.columns)
    .join("th")
    .text(function(d){
      return d})
      .style("color","#808080");

  thead
    .selectAll("th:first-child")
      .style("color", "#404040");

  // rows
  const rows = table
    .append("tbody")
    .selectAll("tr")
    .data(data)
    .join("tr");

  // cells
  rows
    .selectAll("td")
    .data(d => Object.values(d))
    .join("td")
    .text(d => d);
  

  rows
    .selectAll("td:not(:first-child)")
    .attr("class", function(d){ 
    
      if(d == "M"){
        return "red-color";
      }
      if(d == "K"){
        return "green-color";
      }
      if(d == "Q"){
        return "purple-color";
      }
      if(d == "X"){
        return "pink-color";
      }
      if(d == "R"){
        return "yellow-color";
      } 
      return null;
    });
  

  rows
    .selectAll("td:last-child")
      .style("border-right", "none");



   
});
