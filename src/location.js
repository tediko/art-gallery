// Leaflet map
import L from 'leaflet';

// Change data-state on js load
// It won't display map container when js is not loaded.
document.querySelector('#map').dataset.state = 'ready';

// latitude and longitude of art gallery location
const locationLatLng = [41.48041, -71.31091];

// Helper classes to style leaflet elements
const iconClassName = 'location__map-icon';
const tileLayerClassName = 'location__map-layer';

// Instantiates a map object with options
let map = L.map('map', {
    center: (locationLatLng),
    zoomControl: false,
    attributionControl: false
}).setView(locationLatLng, 18);

// Creates an icon instance with the given options
let locationIcon  = L.icon({
    iconUrl: './assets/shared/icon-location.svg',
    iconSize: [66,88],
    iconAnchor: [33,88],
    className: iconClassName
});

// Instantiates a tile layer object
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    className: tileLayerClassName
}).addTo(map);


// Instantiates a Marker object given a geographical point and icon as options object.
L.marker(locationLatLng, {icon: locationIcon}).addTo(map);