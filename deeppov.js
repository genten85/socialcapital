var Esri = L.tileLayer(
    "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}.png?access_token={accessToken}",
    {
      attribution:
        "Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community",
      maxZoom: 18,
      id: "mapbox.streets",
      accessToken:
        "pk.eyJ1IjoiZ2VudGVuIiwiYSI6ImNrMmdzOHFsdTA2Z2UzY252b3B1cjJqdXQifQ.B2doXxjSELmQIf7wIIDBZg"
    }
  ),

  Darkness = L.tileLayer(
    "https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png",
    {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
      subdomains: "abcd",
      maxZoom: 19
    }
  );

var deepMap = L.map("div2", {
  center: [39.82, -98.57],
  zoom: 3,
  layers: [Esri, Darkness]
});

var baseMaps = {
  "Esri World Imagery": Esri,
  Darkness: Darkness
};

L.control.layers(baseMaps).addTo(deepMap);
var deepLayers = L.control.layers().addTo(deepMap);

// Loading a GeoJSON file (using jQuery's $.getJSON)
$.getJSON("TANF_DeepPov.json", function(geojson) {
  var geojsonLayer = L.geoJson(geojson, {
    style: function(feature) {
      var fillColor,
        capital = feature.properties.TDP_Ratios;
      if (capital > 400) fillColor = "#223a5e";
      else if (capital <= 400 && capital > 200) fillColor = "#365c96";
      else if (capital <= 200 && capital > 100) fillColor = "#5681c2";
      else if (capital <= 100 && capital > 50) fillColor = "#8fabd6";
      else if (capital <= 50 && capital > 10) fillColor = "#c7d5eb";
      else if (capital <= 10) fillColor = "#eef2f9";
      else fillColor = "#f7f7f7"; // no data
      return {
        color: "#999",
        weight: 1,
        fillColor: fillColor,
        fillOpacity: 0.6
      };
    },
    onEachFeature: function(feature, layer) {
      layer.bindPopup(
        "<strong>" +
          "State: " +
          "</strong>" +
          feature.properties.STUSPS +
          "</br><strong>" +
          "Ratio: " +
          "</strong>" +
          feature.properties.TDP_Ratios
      );
    }
  }).addTo(deepMap);
  deepLayers.addOverlay(geojsonLayer, "1997 TANF-to-Deep Poverty Ratio");
});

// Loading a GeoJSON file (using jQuery's $.getJSON)
$.getJSON("TANF_DeepPov.json", function(geojson) {
  var geojsonLayer = L.geoJson(geojson, {
    style: function(feature) {
      var fillColor,
        capital = feature.properties.TDP_Rati_1;
      if (capital > 400) fillColor = "#223a5e";
      else if (capital <= 400 && capital > 200) fillColor = "#365c96";
      else if (capital <= 200 && capital > 100) fillColor = "#5681c2";
      else if (capital <= 100 && capital > 50) fillColor = "#8fabd6";
      else if (capital <= 50 && capital > 10) fillColor = "#c7d5eb";
      else if (capital <= 10) fillColor = "#eef2f9";
      else fillColor = "#f7f7f7"; // no data
      return {
        color: "#999",
        weight: 1,
        fillColor: fillColor,
        fillOpacity: 0.6
      };
    },
    onEachFeature: function(feature, layer) {
      layer.bindPopup(
        "<strong>" +
          "State: " +
          "</strong>" +
          feature.properties.STUSPS +
          "</br><strong>" +
          "Ratio: " +
          "</strong>" +
          feature.properties.TDP_Rati_1
      );
    }
  }).addTo(deepMap);
  deepLayers.addOverlay(geojsonLayer, "2005 TANF-to-Deep Poverty Ratio");
});

// Loading a GeoJSON file (using jQuery's $.getJSON)
$.getJSON("TANF_DeepPov.json", function(geojson) {
  var geojsonLayer = L.geoJson(geojson, {
    style: function(feature) {
      var fillColor,
        capital = feature.properties.TDP_Rati_2;
      if (capital > 400) fillColor = "#223a5e";
      else if (capital <= 400 && capital > 200) fillColor = "#365c96";
      else if (capital <= 200 && capital > 100) fillColor = "#5681c2";
      else if (capital <= 100 && capital > 50) fillColor = "#8fabd6";
      else if (capital <= 50 && capital > 10) fillColor = "#c7d5eb";
      else if (capital <= 10) fillColor = "#eef2f9";
      else fillColor = "#f7f7f7"; // no data
      return {
        color: "#999",
        weight: 1,
        fillColor: fillColor,
        fillOpacity: 0.6
      };
    },
    onEachFeature: function(feature, layer) {
      layer.bindPopup(
        "<strong>" +
          "State: " +
          "</strong>" +
          feature.properties.STUSPS +
          "</br><strong>" +
          "Ratio: " +
          "</strong>" +
          feature.properties.TDP_Rati_2
      );
    }
  }).addTo(deepMap);
  deepLayers.addOverlay(geojsonLayer, "2009 TANF-to-Deep Poverty Ratio");
});

// Loading a GeoJSON file (using jQuery's $.getJSON)
$.getJSON("TANF_DeepPov.json", function(geojson) {
  var geojsonLayer = L.geoJson(geojson, {
    style: function(feature) {
      var fillColor,
        capital = feature.properties.TDP_Rati_3;
      if (capital > 400) fillColor = "#223a5e";
      else if (capital <= 400 && capital > 200) fillColor = "#365c96";
      else if (capital <= 200 && capital > 100) fillColor = "#5681c2";
      else if (capital <= 100 && capital > 50) fillColor = "#8fabd6";
      else if (capital <= 50 && capital > 10) fillColor = "#c7d5eb";
      else if (capital <= 10) fillColor = "#eef2f9";
      else fillColor = "#f7f7f7"; // no data
      return {
        color: "#999",
        weight: 1,
        fillColor: fillColor,
        fillOpacity: 0.6
      };
    },
    onEachFeature: function(feature, layer) {
      layer.bindPopup(
        "<strong>" +
          "State: " +
          "</strong>" +
          feature.properties.STUSPS +
          "</br><strong>" +
          "Ratio: " +
          "</strong>" +
          feature.properties.TDP_Rati_3
      );
    }
  }).addTo(deepMap);
  deepLayers.addOverlay(geojsonLayer, "2014 TANF-to-Deep Poverty Ratio");
});
