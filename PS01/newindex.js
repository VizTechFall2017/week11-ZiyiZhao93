var width = document.getElementById('svg1').clientWidth;
var height = document.getElementById('svg1').clientHeight;

var width2 = document.getElementById('svg2').clientWidth;
var height2 = document.getElementById('svg2').clientHeight;

var width3 = document.getElementById('svg3').clientWidth;
var height3 = document.getElementById('svg3').clientHeight;

console.log(width,width2,width3);

var marginLeft = 0;
var marginTop = 0;

var marginLeft3 = 100;
var marginTop3 = 100;

var nestedData = [];

var svg = d3.select('#svg1')
    .append('g')
    .attr('transform', 'translate(' + marginLeft + ',' + marginTop + ')');

var svg2 = d3.select('#svg2')
    .append('g')
    .attr('transform', 'translate(' + marginLeft + ',' + marginTop + ')');

var svg3 = d3.select('#svg3')
    .append('g')
    .attr('transform', 'translate(' + marginLeft3 + ',' + marginTop3 + ')');


var albersProjection = d3.geoAlbers()
    .scale(170000)//tell it how big the map should be
    .rotate( [71.057,0] )
    .center( [0, 42.313] ) //FIND CENTER POINT LAT/LONG VALUE OF MASSACHUSETTS
    .translate([(width/2), (height/2)]);  //set the center of the map to show up in the center of the screen

//set up the path generator function to draw the map outlines
path = d3.geoPath()
    .projection(albersProjection);        //tell it to use the projection that we just made to convert lat/long to pixels

var cityLookup = d3.map();

var colorScale = d3.scaleLinear().range(['white','white']);

var scaleX = d3.scaleBand().rangeRound([0, width3-2*marginLeft3]).padding(0.1);
var scaleY = d3.scaleLinear().range([height3-2*marginTop3, 0]);


queue()
    .defer(d3.json, "./Boston.json")
    .defer(d3.json, "./Orange.json")
    .defer(d3.csv, "./subway.csv")
    .await(function(err, mapData,lineData, populationData){


        populationData.forEach(function(d){
            cityLookup.set(d.name, d.population);
        });


        colorScale.domain([0, d3.max(populationData.map(function(d){return +d.population}))]);

        svg.selectAll("path")               //make empty selection
            .data(mapData.features)          //bind to the features array in the map data
            .enter()
            .append("path")                 //add the paths to the DOM
            .attr("d", path)                //actually draw them
            .attr("class", "feature")
            .attr('fill',function(d){
                return colorScale(cityLookup.get(d.properties.NAME));
            })
            .attr('stroke','black')
            .attr('stroke-width',.2)


        svg2.background = 'none';

        svg2.selectAll("path")               //make empty selection
            .data(lineData.features)          //bind to the features array in the map data
            .enter()
            .append("path")                 //add the paths to the DOM
            .attr("d", path)                //actually draw them
            .attr("class", "feature")
            .attr('stroke', 'orange')
            .attr('stroke-width', 2)
            .attr('fill','none');

        svg2.append('circle')
            .attr('cx', 135)
            .attr('cy', 55)
            .attr('r', 5)
            .attr('fill', 'orange')
            .on('mouseover', function (d) {
                d3.select(this).attr('r', 8).attr('fill', 'red');
            })
            .on('mouseout', function (d) {
                d3.select(this).attr('r', 5).attr('fill', 'orange');
            });
        svg2.append('circle')
            .attr('cx', 128)
            .attr('cy', 75)
            .attr('r', 5)
            .attr('fill', 'orange')
            .on('mouseover', function (d) {
                d3.select(this).attr('r', 8).attr('fill', 'red');
            })
            .on('mouseout', function (d) {
                d3.select(this).attr('r', 5).attr('fill', 'orange');
            });
        svg2.append('circle')
            .attr('cx', 127)
            .attr('cy', 115)
            .attr('r', 5)
            .attr('fill', 'orange')
            .on('mouseover', function (d) {
                d3.select(this).attr('r', 8).attr('fill', 'red');
            })
            .on('mouseout', function (d) {
                d3.select(this).attr('r', 5).attr('fill', 'orange');
            });
        svg2.append('circle')
            .attr('cx', 127)
            .attr('cy', 125)
            .attr('r', 5)
            .attr('fill', 'orange')
            .on('mouseover', function (d) {
                d3.select(this).attr('r', 8).attr('fill', 'red');
            })
            .on('mouseout', function (d) {
                d3.select(this).attr('r', 5).attr('fill', 'orange');
            });
        svg2.append('circle')
            .attr('cx', 127)
            .attr('cy', 137)
            .attr('r', 5)
            .attr('fill', 'orange')
            .on('mouseover', function (d) {
                d3.select(this).attr('r', 8).attr('fill', 'red');
            })
            .on('mouseout', function (d) {
                d3.select(this).attr('r', 5).attr('fill', 'orange');
            });
        svg2.append('circle')
            .attr('cx', 138)
            .attr('cy', 156)
            .attr('r', 5)
            .attr('fill', 'orange')
            .on('mouseover', function (d) {
                d3.select(this).attr('r', 8).attr('fill', 'red');
            })
            .on('mouseout', function (d) {
                d3.select(this).attr('r', 5).attr('fill', 'orange');
            });
        svg2.append('circle')
            .attr('cx', 148)
            .attr('cy', 170)
            .attr('r', 5)
            .attr('fill', 'orange')
            .on('mouseover', function (d) {
                d3.select(this).attr('r', 8).attr('fill', 'red');
            })
            .on('mouseout', function (d) {
                d3.select(this).attr('r', 5).attr('fill', 'orange');
            });
        svg2.append('circle')
            .attr('cx', 150)
            .attr('cy', 175)
            .attr('r', 5)
            .attr('fill', 'orange')
            .on('mouseover', function (d) {
                d3.select(this).attr('r', 8).attr('fill', 'red');
            })
            .on('mouseout', function (d) {
                d3.select(this).attr('r', 5).attr('fill', 'orange');
            });
        svg2.append('circle')
            .attr('cx', 147)
            .attr('cy', 181)
            .attr('r', 5)
            .attr('fill', 'orange')
            .on('mouseover', function (d) {
                d3.select(this).attr('r', 8).attr('fill', 'red');
            })
            .on('mouseout', function (d) {
                d3.select(this).attr('r', 5).attr('fill', 'orange');
            });
        svg2.append('circle')
            .attr('cx', 145)
            .attr('cy', 185)
            .attr('r', 5)
            .attr('fill', 'orange')
            .on('mouseover', function (d) {
                d3.select(this).attr('r', 8).attr('fill', 'red');
            })
            .on('mouseout', function (d) {
                d3.select(this).attr('r', 5).attr('fill', 'orange');
            });
        svg2.append('circle')
            .attr('cx', 143)
            .attr('cy', 190)
            .attr('r', 5)
            .attr('fill', 'orange')
            .on('mouseover', function (d) {
                d3.select(this).attr('r', 8).attr('fill', 'red');
            })
            .on('mouseout', function (d) {
                d3.select(this).attr('r', 5).attr('fill', 'orange');
            });
        svg2.append('circle')
            .attr('cx', 130)
            .attr('cy', 195)
            .attr('r', 5)
            .attr('fill', 'orange')
            .on('mouseover', function (d) {
                d3.select(this).attr('r', 8).attr('fill', 'red');
            })
            .on('mouseout', function (d) {
                d3.select(this).attr('r', 5).attr('fill', 'orange');
            });
        svg2.append('circle')
            .attr('cx', 120)
            .attr('cy', 205)
            .attr('r', 5)
            .attr('fill', 'orange')
            .on('mouseover', function (d) {
                d3.select(this).attr('r', 8).attr('fill', 'red');
            })
            .on('mouseout', function (d) {
                d3.select(this).attr('r', 5).attr('fill', 'orange');
            });
        svg2.append('circle')
            .attr('cx', 110)
            .attr('cy', 215)
            .attr('r', 5)
            .attr('fill', 'orange')
            .on('mouseover', function (d) {
                d3.select(this).attr('r', 8).attr('fill', 'red');
            })
            .on('mouseout', function (d) {
                d3.select(this).attr('r', 5).attr('fill', 'orange');
            });
        svg2.append('circle')
            .attr('cx', 104)
            .attr('cy', 227)
            .attr('r', 5)
            .attr('fill', 'orange')
            .on('mouseover', function (d) {
                d3.select(this).attr('r', 8).attr('fill', 'red');
            })
            .on('mouseout', function (d) {
                d3.select(this).attr('r', 5).attr('fill', 'orange');
            });
        svg2.append('circle')
            .attr('cx', 97)
            .attr('cy', 238)
            .attr('r', 5)
            .attr('fill', 'orange')
            .on('mouseover', function (d) {
                d3.select(this).attr('r', 8).attr('fill', 'red');
            })
            .on('mouseout', function (d) {
                d3.select(this).attr('r', 5).attr('fill', 'orange');
            });
        svg2.append('circle')
            .attr('cx', 93)
            .attr('cy', 250)
            .attr('r', 5)
            .attr('fill', 'orange')
            .on('mouseover', function (d) {
                d3.select(this).attr('r', 8).attr('fill', 'red');
            })
            .on('mouseout', function (d) {
                d3.select(this).attr('r', 5).attr('fill', 'orange');
            });
        svg2.append('circle')
            .attr('cx', 89)
            .attr('cy', 259)
            .attr('r', 5)
            .attr('fill', 'orange')
            .on('mouseover', function (d) {
                d3.select(this).attr('r', 8).attr('fill', 'red');
            })
            .on('mouseout', function (d) {
                d3.select(this).attr('r', 5).attr('fill', 'orange');
            });
        svg2.append('circle')
            .attr('cx', 85)
            .attr('cy', 270)
            .attr('r', 5)
            .attr('fill', 'orange')
            .on('mouseover', function (d) {
                d3.select(this).attr('r', 8).attr('fill', 'red');
            })
            .on('mouseout', function (d) {
                d3.select(this).attr('r', 5).attr('fill', 'orange');
            });


        nestedData = d3.nest()
            .key(function(d){return d.gender})
            .entries(populationData);

        console.log(nestedData);

        var loadData = nestedData.filter(function(d){return d.key == 'total'})[0].values;


        svg3.append("g")
            .attr('class','xaxis')
            .attr('transform','translate(0,'+ (height3-2*marginTop3) +')')
            .call(d3.axisBottom(scaleX));

        svg3.append("g")
            .attr('class', 'yaxis')
            .call(d3.axisLeft(scaleY));

        svg3.append('text')
            .text('Total')
            .attr('transform','translate(160, 170)')
            .attr('font-size', 15);

        svg3.append('text')
            .text('Male')
            .attr('transform','translate(230, 170)')
            .attr('font-size', 15);

        svg3.append('text')
            .text('Female')
            .attr('transform','translate(290, 170)')
            .attr('font-size', 15);


        drawPoints(loadData,'total');

    });


function drawPoints(pointData,gender){


    scaleX.domain(pointData.map(function(d){return d.things;}));
    scaleY.domain([0, d3.max(pointData.map(function(d){return +d.number}))]);


    d3.selectAll('.xaxis')
        .call(d3.axisBottom(scaleX));

    d3.selectAll('.yaxis')
        .call(d3.axisLeft(scaleY));


    var rects = svg3.selectAll('.bars')
        .data(pointData, function(d){return d.things;});

    console.log(pointData);

    rects
        .transition()
        .duration(100)
        .attr('x',function(d){
            return scaleX(d.things);
        })
        .attr('y',function(d){
            return scaleY(+d.number);
        })
        .attr('width',function(d){
            return scaleX.bandwidth();
        })
        .attr('height',function(d){
            return height3-2*marginTop3 - scaleY(+d.number);
        })
        .attr('fill',function(d){
            if (gender == 'total'){return "mediumslateblue"}
            if (gender == 'male'){return "mediumturquoise"}
            if (gender == 'female'){return "palevioletred"}
        });

    console.log(gender);

    rects
        .enter()
        .append('rect')
        .attr('class','bars')
        .attr('fill',function(d){
            if (gender == 'total'){return "mediumslateblue"}
            if (gender == 'male'){return "lightblue"}
            if (gender == 'female'){return "pink"}
        })
        .attr('id',function (d) {return d.things})
        .attr('x',function(d){
            return scaleX(d.things);
        })
        .attr('y',function(d){
            return scaleY(+d.number);
        })
        .attr('width',function(d){
            return scaleX.bandwidth();
        })
        .attr('height',function(d){
            return height3-2*marginTop3 - scaleY(+d.number);
        })

}

function updateData(selectedGender){



    return nestedData.filter(function(d){return d.key == selectedGender})[0].values;
}


function sliderMoved(value){

    if(value == 0){
        newData = updateData('total');
        drawPoints(newData,'total');
    }

    if(value == 1){
        newData = updateData('male');
        drawPoints(newData,'male');
    }

    if(value == 2){
        newData = updateData('female');
        drawPoints(newData,'female');
    }


}

