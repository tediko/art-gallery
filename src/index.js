// Leaflet map
import L from 'leaflet';

let map = L.map('map', {
    center: ([41.48041, -71.31091])
}).setView([41.48041, -71.31091], 19);

let locationIcon  = L.icon({
    iconUrl: './assets/shared/icon-location.svg',
    iconSize: [66,88],
    iconAnchor: [33,88]
});

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

L.marker([41.48041, -71.31091], {icon: locationIcon}).addTo(map);