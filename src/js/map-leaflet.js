let mymap = L.map('mapid').setView([50.4547, 30.5238], 12);

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoieWFuYW5hemFyZW5rbyIsImEiOiJja3R5ZnNtZWMwOHk3Mm5wYzB4eDh3ZW9zIn0.ItpgcoICH2mjjUD7rh7mSA', {
    maxZoom: 18,
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, ' +
        'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1
}).addTo(mymap);


let marker = L.marker([50.4547, 30.5238]).addTo(mymap);
