window.addEventListener('load', () => {
  //Create a map
  let map = L.map('map', {
    rotate: true,
  bearing: -29
  });
  map.setView([40.77478878, -73.97125], 15);

  //Tile layer to add to the map
  L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    // maxZoom: 15,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
  }).addTo(map);

  //Let's add a marker icon
  let guitarIcon = L.icon({
    iconUrl: 'guita.png',

    iconSize: [26, 26], // size of the icon
    iconAnchor: [22, 90], // point of the icon which will correspond to marker's location
    popupAnchor: [-7, -90] // point from which the popup should open relative to the iconAnchor
  });
  //Marker itself
//   let marker = L.marker([40.673058539694675, -73.95718828116779], { icon: guitarIcon }).addTo(map);
//   //Add popup text to the marker
//   marker.bindPopup("School!").openPopup();

  let marker2 = L.marker([40.763058539694675, -73.97718828116779], { icon: guitarIcon }).addTo(map);
  marker2.bindPopup("James!").closePopup();
});