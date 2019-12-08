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

var giniMap = L.map("div4", {
  center: [39.82, -98.57],
  zoom: 3,
  layers: [Esri, Wikimedia, Darkness]
});

var baseMaps = {
  "Esri WorldImagery": Esri,
  Wikimedia: Wikimedia,
  Darkness: Darkness
};

L.control.layers(baseMaps).addTo(giniMap);
var giniLayers = L.control.layers().addTo(giniMap);

// Loading a GeoJSON file (using jQuery's $.getJSON)
$.getJSON("Gini.json", function(geojson) {
  var geojsonLayer = L.geoJson(geojson, {
    style: function(feature) {
      var fillColor,
        capital = feature.properties.Gini_Index;
      if (capital < 0.4) fillColor = "#223a5e";
      else if (capital >= 0.4 && capital < 0.425) fillColor = "#365c96";
      else if (capital >= 0.425 && capital < 0.45) fillColor = "#5681c2";
      else if (capital >= 0.45 && capital < 0.475) fillColor = "#8fabd6";
      else if (capital >= 0.475 && capital < 0.5) fillColor = "#c7d5eb";
      else if (capital >= 0.5) fillColor = "#eef2f9";
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
          "Index: " +
          "</strong>" +
          feature.properties.Gini_Index
      );
    }
  }).addTo(giniMap);
  giniLayers.addOverlay(geojsonLayer, "2006 Gini Index");
});

// Loading a GeoJSON file (using jQuery's $.getJSON)
$.getJSON("Gini.json", function(geojson) {
  var geojsonLayer = L.geoJson(geojson, {
    style: function(feature) {
      var fillColor,
        capital = feature.properties.Gini_Ind_1;
      if (capital < 0.4) fillColor = "#223a5e";
      else if (capital >= 0.4 && capital < 0.425) fillColor = "#365c96";
      else if (capital >= 0.425 && capital < 0.45) fillColor = "#5681c2";
      else if (capital >= 0.45 && capital < 0.475) fillColor = "#8fabd6";
      else if (capital >= 0.475 && capital < 0.5) fillColor = "#c7d5eb";
      else if (capital >= 0.5) fillColor = "#eef2f9";
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
          "Index: " +
          "</strong>" +
          feature.properties.Gini_Ind_1
      );
    }
  }).addTo(giniMap);
  giniLayers.addOverlay(geojsonLayer, "2009 Gini Index");
});

// Loading a GeoJSON file (using jQuery's $.getJSON)
$.getJSON("Gini.json", function(geojson) {
  var geojsonLayer = L.geoJson(geojson, {
    style: function(feature) {
      var fillColor,
        capital = feature.properties.Gini_Ind_2;
      if (capital < 0.4) fillColor = "#223a5e";
      else if (capital >= 0.4 && capital < 0.425) fillColor = "#365c96";
      else if (capital >= 0.425 && capital < 0.45) fillColor = "#5681c2";
      else if (capital >= 0.45 && capital < 0.475) fillColor = "#8fabd6";
      else if (capital >= 0.475 && capital < 0.5) fillColor = "#c7d5eb";
      else if (capital >= 0.5) fillColor = "#eef2f9";
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
          "Index: " +
          "</strong>" +
          feature.properties.Gini_Ind_2
      );
    }
  }).addTo(giniMap);
  giniLayers.addOverlay(geojsonLayer, "2014 Gini Index");
});
