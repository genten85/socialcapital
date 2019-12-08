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
  Wikimedia = L.tileLayer(
    "https://maps.wikimedia.org/osm-intl/{z}/{x}/{y}{r}.png",
    {
      attribution:
        '<a href="https://wikimediafoundation.org/wiki/Maps_Terms_of_Use">Wikimedia</a>',
      minZoom: 1,
      maxZoom: 19
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

var myMap = L.map("mapid", {
  center: [39.82, -98.57],
  zoom: 4,
  layers: [Esri, Wikimedia, Darkness]
});

var baseMaps = {
  "Esri WorldImagery": Esri,
  Wikimedia: Wikimedia,
  Darkness: Darkness
};

L.control.layers(baseMaps).addTo(myMap);
var controlLayers = L.control.layers().addTo(myMap);

// Loading a GeoJSON file (using jQuery's $.getJSON)
$.getJSON("Dissolve_1997.json", function(geojson) {
  var geojsonLayer = L.geoJson(geojson, {
    style: function(feature) {
      var fillColor,
        capital = feature.properties.MEAN_sk97;
      if (capital > 1) fillColor = "#223a5e";
      else if (capital <= 1 && capital > 0.5) fillColor = "#365c96";
      else if (capital <= 0.5 && capital > 0) fillColor = "#5681c2";
      else if (capital <= 0 && capital > -0.5) fillColor = "#8fabd6";
      else if (capital <= -0.5 && capital > -1) fillColor = "#c7d5eb";
      else if (capital <= -1) fillColor = "#eef2f9";
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
          feature.properties.FIRST_stat +
          "</br><strong>" +
          "Capital Index: " +
          "</strong>" +
          feature.properties.MEAN_sk97
      );
    }
  }).addTo(myMap);
  controlLayers.addOverlay(geojsonLayer, "1997 Social Capital");
});

// Loading a GeoJSON file (using jQuery's $.getJSON)
$.getJSON("Dissolved_2005.json", function(geojson) {
  var geojsonLayer = L.geoJson(geojson, {
    style: function(feature) {
      var fillColor,
        capital = feature.properties.MEAN_Socia;
      if (capital > 1) fillColor = "#223a5e";
      else if (capital <= 1 && capital > 0.5) fillColor = "#365c96";
      else if (capital <= 0.5 && capital > 0) fillColor = "#5681c2";
      else if (capital <= 0 && capital > -0.5) fillColor = "#8fabd6";
      else if (capital <= -0.5 && capital > -1) fillColor = "#c7d5eb";
      else if (capital <= -1) fillColor = "#eef2f9";
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
          "Capital Index: " +
          "</strong>" +
          feature.properties.MEAN_Socia
      );
    }
  }).addTo(myMap);
  controlLayers.addOverlay(geojsonLayer, "2005 Social Capital");
});

// Loading a GeoJSON file (using jQuery's $.getJSON)
$.getJSON("Dissolved_2009.json", function(geojson) {
  var geojsonLayer = L.geoJson(geojson, {
    style: function(feature) {
      var fillColor,
        capital = feature.properties.MEAN_Socia;
      if (capital > 1) fillColor = "#223a5e";
      else if (capital <= 1 && capital > 0.5) fillColor = "#365c96";
      else if (capital <= 0.5 && capital > 0) fillColor = "#5681c2";
      else if (capital <= 0 && capital > -0.5) fillColor = "#8fabd6";
      else if (capital <= -0.5 && capital > -1) fillColor = "#c7d5eb";
      else if (capital <= -1) fillColor = "#eef2f9";
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
          "Capital Index: " +
          "</strong>" +
          feature.properties.MEAN_Socia
      );
    }
  }).addTo(myMap);
  controlLayers.addOverlay(geojsonLayer, "2009 Social Capital");
});

// Loading a GeoJSON file (using jQuery's $.getJSON)
$.getJSON("Dissolved_2014.json", function(geojson) {
  var geojsonLayer = L.geoJson(geojson, {
    style: function(feature) {
      var fillColor,
        capital = feature.properties.MEAN_sk201;
      if (capital > 1) fillColor = "#223a5e";
      else if (capital <= 1 && capital > 0.5) fillColor = "#365c96";
      else if (capital <= 0.5 && capital > 0) fillColor = "#5681c2";
      else if (capital <= 0 && capital > -0.5) fillColor = "#8fabd6";
      else if (capital <= -0.5 && capital > -1) fillColor = "#c7d5eb";
      else if (capital <= -1) fillColor = "#eef2f9";
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
          "Capital Index: " +
          "</strong>" +
          feature.properties.MEAN_sk201
      );
    }
  }).addTo(myMap);
  controlLayers.addOverlay(geojsonLayer, "2014 Social Capital");
});
