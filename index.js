var data = [
	{ date: '2015-09-01', submissions: 210 },
	{ date: '2015-10-01', submissions: 24 },
	{ date: '2015-11-02', submissions: 241 },
	{ date: '2015-12-03', submissions: 244 },
	{ date: '2016-01-04', submissions: 122 },
	{ date: '2016-02-05', submissions: 240 },
	{ date: '2016-03-06', submissions: 500 },
	{ date: '2016-04-07', submissions: 123 },
	{ date: '2016-05-08', submissions: 411 },
	{ date: '2016-06-09', submissions: 700 },
	{ date: '2016-07-10', submissions: 52 },
	{ date: '2016-08-11', submissions: 100 },
	{ date: '2016-09-12', submissions: 103 },
	{ date: '2016-10-13', submissions: 241 },
	{ date: '2016-11-14', submissions: 412 },
	{ date: '2016-12-15', submissions: 23 },
	{ date: '2017-01-16', submissions: 700 },
	{ date: '2017-02-17', submissions: 500 }
];


var svg = d3.select('#chart').append('svg').attr('height', '500px').attr('width', '500px');

var xExtent = d3.extent(data, function(d, i) { return d.date; });
var yExtent = d3.extent(data, function(d, i) { return d.submissions; });

var xScale = d3.scaleTime()
	.domain([ new Date(xExtent[0]), new Date(xExtent[1]) ])
	.range([40,495]);

var yScale = d3.scaleLinear()
	.domain(yExtent)
	.range([460,240]);


var xAxis = d3.axisBottom(xScale);
var yAxis = d3.axisLeft(yScale);

svg.append('g')
	.attr('id', 'xAxisG')
	.attr('transform', 'translate(0,460)')
	.call(xAxis);

svg.append('g')
	.attr('id', 'yAxisG')
	.attr('transform', 'translate(40,0)')
	.call(yAxis);



var submissionsLine = d3.line()
	.x(function(d) {
		console.log(d)
		return xScale(new Date(d.date));
	})
	.y(function(d) {
		return yScale(d.submissions);
	})
	.curve(d3.curveCatmullRom.alpha(0.5));

var path = svg.append('g').append('path')
	.attr('d', submissionsLine(data))
	.attr('fill', 'none')
	.attr('stroke', '#38CCCC')
	.attr('stroke-width', 3);

var totalLength = path.node().getTotalLength();

// path
// 	.attr("stroke-dasharray", totalLength + " " + totalLength)
// 	.attr("stroke-dashoffset", totalLength)
// 	.transition()
// 	.duration(2000)
//     .ease(d3.easeCubicInOut)
// 	.attr("stroke-dashoffset", 0);



    path.attr("stroke-dasharray",500 + " " + totalLength);

// svg.append('g')
// 	.selectAll('circle')
// 	.data(data)
// 	.enter()
// 	.append('circle')
// 	.attr('fill', '#24E0FB')
// 	.attr('r', 0)
// 	.attr('cx', function(d, i) {
// 		return xScale(new Date(d.date));
// 	})
// 	.attr('cy', function(d, i) {
// 		return yScale(d.submissions);
// 	})
// 	.on('mouseover', function(d, i) {
// 		d3.select(this)
// 			.transition()
// 			.duration(300)
// 			.attr('r', 50);
// 	})
// 	.on('mouseleave', function(d, i) {
// 		d3.select(this)
// 			.transition()
// 			.duration(300)
// 			.attr('r', 3);
// 	})
// 	.transition()
// 	.duration(500)
// 	.delay(1800)
// 	.attr('r', 5)
// 	.transition()
// 	.duration(500)
// 	.attr('r', 3);



