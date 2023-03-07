// map class initialize 
var map = L.map('map').setView([33.11, 52.80], 5);
map.zoomControl.setPosition('topleft');

// adding osm tilelayer 


// var baseMaps = [
//     { 
//         groupName : "Base Maps",
//         expanded : true,
//         layers    : {
//             "Google Satellite": GoogleSatellite,"OpenStreetMap": osm,
//         }
//     }							
// ];


//Addming marker in the center of map
// var singleMarker = L.marker([38.8610, 71.2761])
//     .bindPopup('A pretty CSS3 popup.<br> Easily customizable.')
//     .openPopup();

//add map scale
// L.control.scale().addTo(map);

//Map coordinate display
map.on('mousemove', function (e) {
    $('.coordinate').html(`Lat: ${e.latlng.lat} Lng: ${e.latlng.lng}`)
})



//Geojson load
// var marker = L.markerClusterGroup();
// var taji = L.geoJSON(data, {
//     onEachFeature: function (feature, layer) {
//         layer.bindPopup(feature.properties.name)
//     }
// });
// taji.addTo(marker);
// marker.addTo(map);


//Leaflet layer control
// var baseMaps = {
//     'OSM': osm,
//     'GoogleSatellite': GoogleSatellite
// }

// var overlayMaps = {
    
// }

// L.control.layers(baseMaps, overlayMaps, { collapsed: false, position: 'topright' }).addTo(map);
