// STEP 1 - Include Dependencies
// Include react
import React from "react";

// Include the react-fusioncharts component
import ReactFC from "react-fusioncharts";

// Include the fusioncharts library
import FusionCharts from "fusioncharts";

// Include the chart type
import radar from "fusioncharts/fusioncharts.charts";

// Include the theme as fusion
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";

// Adding the chart and theme as dependency to the core fusioncharts
ReactFC.fcRoot(FusionCharts, radar, FusionTheme);





const HourlySales = () => {


// Create a JSON object to store the chart configurations
const chartConfigs = {
  type: 'radar',
  renderAt: 'chart-container',
  width: '600',
  height: '350',
  dataFormat: 'json',
  dataSource: {
    "chart": {
      "caption": "Budget Analysis",
      "subCaption": "Current month",
      "numberPreffix": "$",
      "theme": "fusion",
      "radarfillcolor": "#ffffff"
    },
    "categories": [{
      "category": [{
          "label": "Marketing"
        },
        {
          "label": "Product Management"
        },
        {
          "label": "Customer Service"
        },
        {
          "label": "Human Resources"
        },
        {
          "label": "Sales & Distribution"
        }
      ]
    }],
    "dataset": [{
        "seriesname": "Allocated Budget",
        "data": [{
            "value": "19000"
          },
          {
            "value": "16500"
          },
          {
            "value": "14300"
          },
          {
            "value": "10000"
          },
          {
            "value": "9800"
          }
        ]
      },
      {
        "seriesname": "Actual Cost",
        "data": [{
            "value": "6000"
          },
          {
            "value": "9500"
          },
          {
            "value": "11900"
          },
          {
            "value": "8000"
          },
          {
            "value": "9700"
          }
        ]
      }
    ]
  }
};
  return <ReactFC {...chartConfigs} />;
};

export default HourlySales;
