//Full screen map view
var mapId = document.getElementById('map');
function fullScreenView() {
    if (document.fullscreenElement) {
        document.exitFullscreen()
    } else {
        mapId.requestFullscreen();
    }
}

//Leaflet browser print function
L.control.browserPrint({ position: 'topleft' }).addTo(map);

//Leaflet search
L.Control.geocoder({
    position:'topleft'
}

).addTo(map);


//Leaflet measure
L.control.measure({
    position:'topleft',
    primaryLengthUnit: 'kilometers',
    secondaryLengthUnit: 'meter',
    primaryAreaUnit: 'sqmeters',
    secondaryAreaUnit: undefined
}).addTo(map);

//zoom to layer
$('.zoom-to-layer').click(function () {
    map.setView([33.11, 52.80], 5)
})