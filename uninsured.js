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

var uninsuredMap = L.map("div5", {
  center: [39.82, -98.57],
  zoom: 3,
  layers: [Esri, Wikimedia, Darkness]
});

var baseMaps = {
  "Esri WorldImagery": Esri,
  Wikimedia: Wikimedia,
  Darkness: Darkness
};

L.control.layers(baseMaps).addTo(uninsuredMap);
var uninsuredLayers = L.control.layers().addTo(uninsuredMap);

// Loading a GeoJSON file (using jQuery's $.getJSON)
$.getJSON("Uninsured.json", function(geojson) {
  var geojsonLayer = L.geoJson(geojson, {
    style: function(feature) {
      var fillColor,
        capital = feature.properties.Perc_Unins;
      if (capital < 5) fillColor = "#223a5e";
      else if (capital >= 5 && capital < 10) fillColor = "#365c96";
      else if (capital >= 10 && capital < 15) fillColor = "#5681c2";
      else if (capital >= 15 && capital < 20) fillColor = "#8fabd6";
      else if (capital >= 20 && capital < 25) fillColor = "#c7d5eb";
      else if (capital >= 25) fillColor = "#eef2f9";
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
          "Rate: " +
          "</strong>" +
          feature.properties.Perc_Unins
      );
    }
  }).addTo(uninsuredMap);
  uninsuredLayers.addOverlay(geojsonLayer, "1997 Uninsured Rate");
});

// Loading a GeoJSON file (using jQuery's $.getJSON)
$.getJSON("Uninsured.json", function(geojson) {
  var geojsonLayer = L.geoJson(geojson, {
    style: function(feature) {
      var fillColor,
        capital = feature.properties.Perc_Uni_1;
      if (capital < 5) fillColor = "#223a5e";
      else if (capital >= 5 && capital < 10) fillColor = "#365c96";
      else if (capital >= 10 && capital < 15) fillColor = "#5681c2";
      else if (capital >= 15 && capital < 20) fillColor = "#8fabd6";
      else if (capital >= 20 && capital < 25) fillColor = "#c7d5eb";
      else if (capital >= 25) fillColor = "#eef2f9";
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
          "Rate: " +
          "</strong>" +
          feature.properties.Perc_Uni_1
      );
    }
  }).addTo(uninsuredMap);
  uninsuredLayers.addOverlay(geojsonLayer, "2005 Uninsured Rate");
});

// Loading a GeoJSON file (using jQuery's $.getJSON)
$.getJSON("Uninsured.json", function(geojson) {
  var geojsonLayer = L.geoJson(geojson, {
    style: function(feature) {
      var fillColor,
        capital = feature.properties.Perc_Uni_2;
      if (capital < 5) fillColor = "#223a5e";
      else if (capital >= 5 && capital < 10) fillColor = "#365c96";
      else if (capital >= 10 && capital < 15) fillColor = "#5681c2";
      else if (capital >= 15 && capital < 20) fillColor = "#8fabd6";
      else if (capital >= 20 && capital < 25) fillColor = "#c7d5eb";
      else if (capital >= 25) fillColor = "#eef2f9";
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
          "Rate: " +
          "</strong>" +
          feature.properties.Perc_Uni_2
      );
    }
  }).addTo(uninsuredMap);
  uninsuredLayers.addOverlay(geojsonLayer, "2009 Uninsured Rate");
});

// Loading a GeoJSON file (using jQuery's $.getJSON)
$.getJSON("Uninsured.json", function(geojson) {
  var geojsonLayer = L.geoJson(geojson, {
    style: function(feature) {
      var fillColor,
        capital = feature.properties.Perc_Uni_3;
      if (capital < 5) fillColor = "#223a5e";
      else if (capital >= 5 && capital < 10) fillColor = "#365c96";
      else if (capital >= 10 && capital < 15) fillColor = "#5681c2";
      else if (capital >= 15 && capital < 20) fillColor = "#8fabd6";
      else if (capital >= 20 && capital < 25) fillColor = "#c7d5eb";
      else if (capital >= 25) fillColor = "#eef2f9";
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
          "Rate: " +
          "</strong>" +
          feature.properties.Perc_Uni_3
      );
    }
  }).addTo(uninsuredMap);
  uninsuredLayers.addOverlay(geojsonLayer, "2014 Uninsured Rate");
});
