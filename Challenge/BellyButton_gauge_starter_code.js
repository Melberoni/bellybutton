// Create the buildChart function.
function buildCharts(sample) {
  // Use d3.json to load the samples.json file 
  d3.json("samples.json").then((data) => {
    console.log(data);

  
    
    // 1. Create a variable that filters the metadata array for the object with the desired sample number.
    var metadata=data.metadata;
    var filterMetadata=metadata.filter(selectedID => selectedID.id===sample )
        
    // 2. Create a variable that holds the first sample in the metadata array.
    var selectedSample=filterMetadata[0];

    // 3. Create a variable that holds the washing frequency.
     var frequency=parseFloat(selectedSample.wFreq);
    
    // 4. Create the trace for the gauge chart.
    var gaugeData = [{
      value: frequency,
      type:"indicator",
      mode:"gauge+number",
      title:{text: "Washing Frequency"},
      gauge:{
        axis:{range:[null,10]},
        bar:{color:"black"},
        steps:[
          {range:[0,2], color: "red"},
          {range:[2,4],color:"orange"},
          {range:[4,6],color:"yellow"},
          {range:[6,8],color:"limegreen"},
          {range:[8,10],color:"green"}
        ]
      }
    }
    ];
    
    // 5. Create the layout for the gauge chart.
    var gaugeLayout = { 
     width: 600, 
     height: 450, 
     margin: { t: 0, b: 0 } 
    };

    // 6. Use Plotly to plot the gauge data and layout.
    Plotly.newPlot();
  });
}
