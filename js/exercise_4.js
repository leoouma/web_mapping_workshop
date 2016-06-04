// Here is the javascript setup for a basic map:

// Enter your mapbox map id here to reference it for the base layer,
// this one references the ugly green map that I made.
var mapId = 'leoouma.0ad9on2b';

// And this is my access token, use yours.
var accessToken = 'pk.eyJ1IjoibGVvb3VtYSIsImEiOiJjaW54ZXRpemMwMHI1d2RrbDhwdWl6NDFlIn0.PPug4n7UfdTLmTetZOFuNQ';

// Create the map object with your mapId and token,
// referencing the DOM element where you want the map to go.
L.mapbox.accessToken = accessToken;
var map = L.mapbox.map('map', mapId);

// Set the initial view of the map to the whole US
map.setView([-0.0236, 37.962], 6);

// Great, now we have a basic web map!

var dataFileToAdd = 'data/mpesaPoints.geojson';

//Then we need to create a featureLayer to hold the data
var featureLayer = L.mapbox.featureLayer()
    .loadURL(dataFileToAdd)
    .addTo(map);
//Finally we're going to set the style and zoom the map to the layer once the featureLayer is ready to render
featureLayer.on('ready', function() {
  this.eachLayer(function(layer){
    layer.setIcon(L.mapbox.marker.icon({
      'marker-color': '#fa0',
      'marker-size': 'large',
      'marker-symbol': 'restaurant'
    }))
  });
  map.fitBounds(featureLayer.getBounds());
});