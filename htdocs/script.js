const negozi = [
    {
        city: "Milano",
        latitude: 45.4642,
        longitude: 9.1900,
        address: "Via Giovanni Battista Pirelli, 30, 20124 Milano MI, Italy"
    },
    {
        city: "Roma",
        latitude: 41.9028,
        longitude: 12.4964,
        address: "Via della Magliana, 856, 00148 Roma RM, Italy"
    },
    {
        city: "Napoli",
        latitude: 40.8522,
        longitude: 14.2681,
        address: "Via Nuova Poggioreale, 160, 80143 Napoli NA, Italy"
    },
    {
        city: "Torino",
        latitude: 45.0703,
        longitude: 7.6869,
        address: "Corso Vittorio Emanuele II, 31, 10125 Torino TO, Italy"
    }
];




const map = L.map('map').setView([41.894621481605895, 12.48174259679298], 5,4);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);


//const marker = L.marker([51.5, -0.09]).addTo(map); //marker


document.getElementById('btm').addEventListener('click', ()=> {

    for (const negozio of negozi) {
        const city = negozio.city;
        const lat = negozio.latitude;
        const long = negozio.longitude;
        const address = negozio.address;


        const marker = L.marker([lat, long]).addTo(map);
        marker.bindPopup('<h1>${city}</h1><br>${address}');

    }

});