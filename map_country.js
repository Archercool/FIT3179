// Import JSON configuration file
var vg_1 = "map_country.vg.json";

// Use vegaEmbed to embed Vega-Lite visualization
vegaEmbed("#map", vg_1).then(function(result) {
  // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);
