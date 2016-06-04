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
      'marker-size': 'small',
      'marker-symbol': 'bank'
    }))
  });
  map.fitBounds(featureLayer.getBounds());
});

// Adding popup
//featureLayer.on('ready', function(){
//  this.eachLayer(function(layer){
//    layer.bindPopup('Account opening available? ' + layer.feature.properties.Account_Op);
//  });
//});


//Start by adding a click handler function that takes the click event as a variable called 'e':

var clickHandler = function(e){
  $('#info').empty();

  var feature = e.target.feature;

  $('#sidebar').fadeIn(400,function(){
    var info = '';

    info += '<div>'
    info += '<h2>' + feature.properties.County + '</h2>'
    if(feature.properties.Other_Busi) info +=   '<p>'  + feature.properties.Trading_Ho + '</p>'
    if(feature.properties.Account_Op) info +=   '<p>'  + feature.properties.Account_Op + '</p>'
    if(feature.properties.Account_Op) info +=   '<p>'  + feature.properties.GPS_Accura + '</p>'
    if(feature.properties.Account_Op) info +=   '<p><a href="' + feature.properties.GPS_Accura + '">'  + feature.properties.GPS_Accura + '</a></p>'
    info += '</div>'

    $('#info').append(info);
  });
};

featureLayer.on('ready', function(){
  this.eachLayer(function(layer){
    layer.on('click', clickHandler);
  });
});

map.on('click',function(e){
    $('#info').fadeOut(200);
    $('#info').empty();
});