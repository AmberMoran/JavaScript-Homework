// from data.js
var tableData = data;

// Select the submit button
var submit = d3.select("#filter-btn");

submit.on("click", function() {

    // Prevent the page from refreshing
    d3.event.preventDefault();
  
    // Select the input element and get the raw HTML node
    var inputElement = d3.select("#datetime");
  
    // Get the value property of the input element
    var inputValue = inputElement.property("value");  
    console.log(inputValue);      
    var filteredData = tableData.filter(sighting => sighting.datetime === inputValue);  
    console.log(filteredData);
    var tbody = d3.select("tbody");
    tbody.html("")
    filteredData.forEach(function(sighting) {
        var row = tbody.append("tr");
        Object.values(sighting).forEach(function(value) {
            var cell = tbody.append("td");
            cell.text(value);
        })
    }) 

    var inputElement = d3.select("#city");
    var inputValue = inputElement.property("value");
    console.log(inputValue);
    var filteredData = tableData.filter(sighting => sighting.city === inputValue);
    console.log(filteredData);
    var tbody = d3.select("tbody");
    tbody.html("")

    filteredData.forEach(function(sighting) {
        var row = tbody.append("tr");
        Object.values(sighting).forEach(function(value) {
            var cell = tbody.append("td");
            cell.text(value);
        })
    }) 

    var inputElement = d3.select("#state");
    var inputValue = inputElement.property("value");
    console.log(inputValue);
    var filteredData = tableData.filter(sighting => sighting.state === inputValue);
    console.log(filteredData);
    var tbody = d3.select("tbody");
    tbody.html("")

    filteredData.forEach(function(sighting) {
        var row = tbody.append("tr");
        Object.values(sighting).forEach(function(value) {
            var cell = tbody.append("td");
            cell.text(value);
        })
    }) 

    var inputElement = d3.select("#country");
    var inputValue = inputElement.property("value");
    console.log(inputValue);
    var filteredData = tableData.filter(sighting => sighting.country === inputValue);
    console.log(filteredData);
    var tbody = d3.select("tbody");
    tbody.html("")

    filteredData.forEach(function(sighting) {
        var row = tbody.append("tr");
        Object.values(sighting).forEach(function(value) {
            var cell = tbody.append("td");
            cell.text(value);
        })
    }) 

    var inputElement = d3.select("#shape");
    var inputValue = inputElement.property("value");
    console.log(inputValue);
    var filteredData = tableData.filter(sighting => sighting.shape === inputValue);
    console.log(filteredData);
    var tbody = d3.select("tbody");
    tbody.html("")

    filteredData.forEach(function(sighting) {
        var row = tbody.append("tr");
        Object.values(sighting).forEach(function(value) {
            var cell = tbody.append("td");
            cell.text(value);
        })
    }) 



        


})
  
    
  