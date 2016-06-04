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
