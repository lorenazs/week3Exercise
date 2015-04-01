
var svg = d3.select("body")
.append("svg")
.attr("width", 800)
.attr("height", 400);

 

d3.csv("R&D.csv", function(data) {
data.sort(function(a, b) {
return d3.descending(a.year2004, b.year2004);
});

var rects = svg.selectAll("rect")
.data(data)
.enter()
.append("rect");

rects.attr("x", 0)
.attr("y", function(d, i) {
return i * 10;
})
.attr("width", function(d) {
return d.year2004 * 20;
})
.attr("height", 8)
.attr('fill','green')
.append("title")
.text(function(d) {
return d.Location + "'s spend in R&D is " + d.year2004;
});
});