window.addEventListener('load', () => {
  //Create a map
  let map = L.map('map', {
    rotate: true,
    bearing: -29,
    zoomControl: false
  });
  map.setView([40.77478878, -73.97125], 15);

  //Tile layer to add to the map
  L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 15,
    minZoom: 15,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
  }).addTo(map);

  //Let's add a marker icon
  let guitarIcon = L.icon({
    iconUrl: 'quaver.png',

    iconSize: [30, 30], // size of the icon
    // iconAnchor: [22, 90], // point of the icon which will correspond to marker's location
    // popupAnchor: [-7, -90] // point from which the popup should open relative to the iconAnchor
  iconAnchor: [22, 90],
    popupAnchor: [-7, -90]
  });

//Function to create styled popup
function popupContent(name, genre, location) {
  return `<div class="popup-content">
            <h3>${name}</h3>
            <p><strong>Genre:</strong> ${genre}</p>
            <p><strong>Location:</strong> ${location}</p>
            <button class ="view-profile">View Profile</button>
          </div>`;
}

  //Marker itself
 let marker = L.marker([40.769058539694675, -73.97618828116779], { icon: guitarIcon }).addTo(map);
  marker.bindPopup(popupContent(
    "Tom Serino",
    "Indie Folk Jazz",
    "Sheep Meadow"
  ),{
    maxWidth: 300,
    className: 'custom-popup'
  })
    .closePopup();

  let marker2 = L.marker([40.765058539694675, -73.97718828116779], { icon: guitarIcon }).addTo(map);
  marker2.bindPopup(popupContent(
    "James Smith",
    "Acoustic Blues",
    "Cop Cot"
  ),{
    maxWidth: 300,
    className: 'custom-popup'
  })
    .closePopup();

  let marker3 = L.marker([40.772058539694675, -73.97118828116779], { icon: guitarIcon }).addTo(map);
  marker3.bindPopup(popupContent(
    "Louise Johnson",
    "Classical Guitar",
    "Bethesda Fountain"
  ),{
    maxWidth: 300,
    className: 'custom-popup'
  })
    .closePopup();

});