// STEP 1 - Include Dependencies
// Include react
import React from "react";

// Include the react-fusioncharts component
import ReactFC from "react-fusioncharts";

// Include the fusioncharts library
import FusionCharts from "fusioncharts";

// Include the chart type
import spline from "fusioncharts/fusioncharts.charts";

// Include the theme as fusion
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";


// Adding the chart and theme as dependency to the core fusioncharts
ReactFC.fcRoot(FusionCharts, spline, FusionTheme);

const List = (props) => {


  const chartConfigs = {
    type: "column2d", // The chart type
    width: "100%", // Width of the chart
    height: "250", // Height of the chart
    dataFormat: "json", // Data type
    dataSource: {
      // Chart Configuration
      chart: {
        // caption: "STATIONS ACTIVATES OVERVIEW",
        // captionFontSize: 7,
        captionAlignment: "left",
        yAxisValueFontColor: "#3D5161",
        labelFontColor: "#3D5161",
        captionFontSize: "20",
        captionFontColor: "#3D5161",
        captionFontBold: false,
        decimals: 0,
        pieRadius: "40%",
        paletteColors: "#FF7F5C",
        maxColWidth: 10,
        theme: "fusion",
      },
      // Chart Data
      data: [
        {
          label: "Station Name Dummy 1",
          value: 250,
        },
        {
          label: "Station Name Dummy 1",
          value: 130,
        },
        {
          label: "Station Name Dummy 1",
          value: 200,
        },
        {
          label: "Station Name Dummy 1",
          value: 240,
        },
        {
          label: "Station Name Dummy 1",
          value: 140,
        },
      ],
    },
  };
  return <ReactFC {...chartConfigs} />;
};

export default List;
