$(document).on('turbolinks:load', function() {
  var TESTER0 = document.getElementById('tester0');
  var TESTER1 = document.getElementById('tester1');
  var TESTER2 = document.getElementById('tester2');
  var TESTER3 = document.getElementById('tester3');
  var TESTER4 = document.getElementById('tester4');
  var TESTER5 = document.getElementById('tester5');
  var TESTER6 = document.getElementById('tester6');
  var TESTER7 = document.getElementById('tester7');
  var TESTER8 = document.getElementById('tester8');
  var TESTER9 = document.getElementById('tester9');

  var trace1_1 = {
    x: [1, 2, 3, 4],
    y: [10, 15, 13, 17],
    type: 'scatter'
  };
  var trace1_2 = {
    x: [1, 2, 3, 4],
    y: [16, 5, 11, 9],
    type: 'scatter'
  };
  var data1 = [trace1_1, trace1_2];
  var layout1 = {
    title:"Ejemplo lineal",
    xaxis: {title: 'X axis'},
    yaxis: {title: 'Y axis'},
    margin: { t: 50 } };
  Plotly.plot( TESTER1, {data:data1, layout: layout1});

  var x2 = [1, 2, 3, 4];
  var trace1 = {
    x: x2,
    y: [1, 4, 9, 16],
    name: 'Trace1',
    type: 'bar'
  };
  var trace2 = {
    x: x2,
    y: [6, -8, -4.5, 8],
    name: 'Trace2',
    type: 'bar'
  };
  var trace3 = {
    x: x2,
    y: [-15, -3, 4.5, -8],
    name: 'Trace3',
    type: 'bar'
  };
  var trace4 = {
    x: x2,
    y: [-1, 3, -3, -4],
    name: 'Trace4',
    type: 'bar'
  };
  var data2 = [trace1, trace2, trace3, trace4];
  var layout2 = {
    title:"Ejemplo Barras",
    xaxis: {title: 'X axis'},
    yaxis: {title: 'Y axis'},
    margin: { t: 50 },
    barmode: 'relative'};
  Plotly.plot( TESTER2, {
    data: data2,
    layout: layout2 } );

  var data3 = [{
    values: [16, 15, 12, 6, 5, 4, 42],
    labels: ['US', 'China', 'European Union', 'Russian Federation', 'Brazil', 'India', 'Rest of World' ],
    domain: {
      x: [0, .48]
    },
    name: 'GHG Emissions',
    hoverinfo: 'label+percent+name',
    hole: .4,
    type: 'pie'
  },{
    values: [27, 11, 25, 8, 1, 3, 25],
    labels: ['US', 'China', 'European Union', 'Russian Federation', 'Brazil', 'India', 'Rest of World' ],
    text: 'CO2',
    textposition: 'inside',
    domain: {x: [.52, 1]},
    name: 'CO2 Emissions',
    hoverinfo: 'label+percent+name',
    hole: .4,
    type: 'pie'
  }];
  var layout3 = {
    title: 'Global Emissions 1990-2011',
    annotations: [
      {
        font: {
          size: 20
        },
        showarrow: false,
        text: 'GHG',
        x: 0.17,
        y: 0.5
      },
      {
        font: {
          size: 20
        },
        showarrow: false,
        text: 'CO2',
        x: 0.82,
        y: 0.5
      }
    ],
    margin: { t: 50 }
  };
  Plotly.plot( TESTER3, {
    data: data3, layout: layout3 });

  //Plotly.d3.csv('https://raw.githubusercontent.com/plotly/datasets/master/2014_usa_states.csv', function(err, rows){
  Plotly.d3.csv('plotly_examples/2014_usa_states.csv', function(err, rows){
    function unpack(rows, key) {
      return rows.map(function(row) { return row[key]; });
    }
    var data4 = [{
      type: 'choropleth',
      locationmode: 'USA-states',
      locations: unpack(rows, 'postal'),
      z: unpack(rows, 'pop'),
      text: unpack(rows, 'state'),
      autocolorscale: true
    }];
    var layout4 = {
      title: '2014 US Popultaion by State',
      margin: { t: 50 },
      geo:{
        scope: 'usa',
        countrycolor: 'rgb(255, 255, 255)',
        showland: true,
        landcolor: 'rgb(217, 217, 217)',
        showlakes: true,
        lakecolor: 'rgb(255, 255, 255)',
        subunitcolor: 'rgb(255, 255, 255)',
        lonaxis: {},
        lataxis: {}
      }
    };
    Plotly.plot(TESTER4, data4, layout4, {showLink: false});
  });

  Plotly.d3.csv('plotly_examples/mt_bruno_elevation.csv', function(err, rows){
    function unpack(rows, key) {
      return rows.map(function(row) { return row[key]; });
    }
    var z_data5=[ ];
    for(var i=0;i<24;i++) {
      z_data5.push(unpack(rows,i));
    }
    var data5 = [{
      z: z_data5,
      type: 'surface'
    }];
    var layout5 = {
      title: 'Mt Bruno Elevation',
      margin: { t: 50 }
    };
    Plotly.newPlot(TESTER5, data5, layout5);
  });

  var data6 = [
    {
      z: [[1, 20, 30, 50, 1], [20, 1, 60, 80, 30], [30, 60, 1, -10, 20]],
      x: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      y: ['Morning', 'Afternoon', 'Evening'],
      type: 'heatmap'
    }
  ];
  var layout6 = {
    title: 'HeatMap Chart',
    margin: { t: 50 }
  };
  Plotly.plot(TESTER6, data6, layout6);

  var trace7_1 = {
    x: [20, 14, 23],
    y: ['giraffes', 'orangutans', 'monkeys'],
    name: 'SF Zoo',
    orientation: 'h',
    marker: {
      color: 'rgba(55,128,191,0.6)',
      width: 1
    },
    type: 'bar'
  };
  var trace7_2 = {
    x: [12, 18, 29],
    y: ['giraffes', 'orangutans', 'monkeys'],
    name: 'LA Zoo',
    orientation: 'h',
    type: 'bar',
    marker: {
      color: 'rgba(255,153,51,0.6)',
      width: 1
    }
  };
  var data7 = [trace7_1, trace7_2];
  var layout7 = {
    title: 'Colored Bar Chart',
    barmode: 'stack',
    margin: { t: 50 }
  };
  Plotly.plot(TESTER7, data7, layout7);

  var rawDataURL = 'plotly_examples/2016-weather-data-seattle.csv';
  var xField = 'Date';
  var yField = 'Mean_TemperatureC';
  var selectorOptions = {
    buttons: [{
      step: 'month',
      stepmode: 'backward',
      count: 1,
      label: '1m'
    }, {
      step: 'month',
      stepmode: 'backward',
      count: 6,
      label: '6m'
    }, {
      step: 'year',
      stepmode: 'todate',
      count: 1,
      label: 'YTD'
    }, {
      step: 'year',
      stepmode: 'backward',
      count: 1,
      label: '1y'
    }, {
      step: 'all'
    }]
  };
  Plotly.d3.csv(rawDataURL, function(err, rawData) {
    if(err) throw err;
    var data8 = prepData(rawData);
    var layout8 = {
      title: 'Time series with range slider and selectors',
      xaxis: {
        rangeselector: selectorOptions,
        rangeslider: {}
      },
      yaxis: {
        fixedrange: true
      },
      margin: { t: 100 }
    };
    Plotly.plot(TESTER8, data8, layout8);
  });
  function prepData(rawData) {
    var x = [];
    var y = [];
    rawData.forEach(function(datum) {
      x.push(new Date(datum[xField]));
      y.push(datum[yField]);
    });
    return [{
      mode: 'lines',
      x: x,
      y: y
    }];
  }

  Plotly.d3.csv('plotly_examples/gapminderDataFiveYear.csv', function(err, rows){
    function unpack(rows, key) {
      return rows.map(function(row) { return row[key]; });
    }
    var allCountryNames = unpack(rows, 'country'),
      allYear = unpack(rows, 'year'),
      allGdp = unpack(rows, 'gdpPercap'),
      listofCountries = [],
      currentGdp = [],
      currentYear = [];
    for (var i = 0; i < allCountryNames.length; i++ ){
      if (listofCountries.indexOf(allCountryNames[i]) === -1 ){
        listofCountries.push(allCountryNames[i]);
      }
    }
    function getCountryData(chosenCountry) {
      currentGdp = [];
      currentYear = [];
      for (var i = 0 ; i < allCountryNames.length ; i++){
        if ( allCountryNames[i] === chosenCountry ) {
          currentGdp.push(allGdp[i]);
          currentYear.push(allYear[i]);
        }
      }
    }
    // Default Country Data
    setBubblePlot('Afghanistan');
    function setBubblePlot(chosenCountry) {
      getCountryData(chosenCountry);
      var trace9 = {
        x: currentYear,
        y: currentGdp,
        mode: 'lines+markers',
        marker: {
          size: 12,
          opacity: 0.5
        }
      };
      var data9 = [trace9];
      var layout9 = {
        title: 'GDP per cap according to Country<br>'+ chosenCountry + ' GDP',
        margin: { t: 50 }
      };
      Plotly.newPlot(TESTER9, data9, layout9);
    }
    var innerContainer = document.querySelector('[data-num="0"'),
      countrySelector = innerContainer.querySelector('.countrydata');
    function assignOptions(textArray, selector) {
      for (var i = 0; i < textArray.length;  i++) {
        var currentOption = document.createElement('option');
        currentOption.text = textArray[i];
        selector.appendChild(currentOption);
      }
    }
    assignOptions(listofCountries, countrySelector);
    function updateCountry(){
      setBubblePlot(countrySelector.value);
    }
    countrySelector.addEventListener('change', updateCountry, false);
  });

  var d3 = Plotly.d3;
  function normal_array( mean, stddev, size ){
    var arr = new Array(size), i;
    // from http://bl.ocks.org/nrabinowitz/2034281
    var generator = (function() {
      return d3.random.normal(mean, stddev);
    }());
    for( i=0; i< arr.length; i++ ){
      arr[i] = generator();
    }
    return arr;
  }
  var x0_ = normal_array(2, 0.45, 300);
  var y0_ = normal_array(2, 0.45, 300);
  var x1_ = normal_array(6, 0.4, 200);
  var y1_ = normal_array(6, 0.4, 200);
  var x2_ = normal_array(4, 0.3, 200);
  var y2_ = normal_array(4, 0.3, 200);
  // console.log(x0);
  var data0 = [
    {
      x: x0_,
      y: y0_,
      mode: 'markers'
    }, {
      x: x1_,
      y: y1_,
      mode: 'markers'
    }, {
      x: x2_,
      y: y2_,
      mode: 'markers'
    }, {
      x: x1_,
      y: y0_,
      mode: 'markers'
    }
  ];
  var layout0 = {
    shapes: [
      {
        type: 'circle',
        xref: 'x',
        yref: 'y',
        x0: d3.min(x0_),
        y0: d3.min(y0_),
        x1: d3.max(x0_),
        y1: d3.max(y0_),
        opacity: 0.2,
        fillcolor: 'blue',
        line: {
          color: 'blue'
        }
      },
      {
        type: 'circle',
        xref: 'x',
        yref: 'y',
        x0: d3.min(x1_),
        y0: d3.min(y1_),
        x1: d3.max(x1_),
        y1: d3.max(y1_),
        opacity: 0.2,
        fillcolor: 'orange',
        line: {
          color: 'orange'
        }
      },
      {
        type: 'circle',
        xref: 'x',
        yref: 'y',
        x0: d3.min(x2_),
        y0: d3.min(y2_),
        x1: d3.max(x2_),
        y1: d3.max(y2_),
        opacity: 0.2,
        fillcolor: 'green',
        line: {
          color: 'green'
        }
      },
      {
        type: 'circle',
        xref: 'x',
        yref: 'y',
        x0: d3.min(x1_),
        y0: d3.min(y0_),
        x1: d3.max(x1_),
        y1: d3.max(y0_),
        opacity: 0.2,
        fillcolor: 'red',
        line: {
          color: 'red'
        }
      }
    ],
    margin: { t: 50 },
    showlegend: false
  };
  Plotly.plot(TESTER0, data0, layout0);

  // Plotly.d3.json('https://raw.githubusercontent.com/plotly/plotly.js/master/test/image/mocks/sankey_energy_dark.json', function(fig){
  //   var data = {
  //     type: "sankey",
  //     domain: {
  //       x: [0,1],
  //       y: [0,1]
  //     },
  //     orientation: "h",
  //     valueformat: ".0f",
  //     valuesuffix: "TWh",
  //     node: {
  //       pad: 15,
  //       thickness: 15,
  //       line: {
  //         color: "black",
  //         width: 0.5
  //       },
  //       label: fig.data[0].node.label,
  //       color: fig.data[0].node.color
  //     },
  //     link: {
  //       source: fig.data[0].link.source,
  //       target: fig.data[0].link.target,
  //       value: fig.data[0].link.value,
  //       color: fig.data[0].link.color,
  //       label: fig.data[0].link.label
  //     }
  //   };
  //   var data6 = [data];
  //   var layout6 = {
  //     title: "Energy forecast for 2050, UK — Department of Energy & Climate Change",
  //     font: {
  //       size: 10
  //     },
  //     margin: { t: 50 }
  //   };
  //   Plotly.plot( TESTER6, {
  //     data: data6, layout: layout6 });
  // });
});

