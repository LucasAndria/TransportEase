var map = L.map("map", {
  center: [-18.933333, 47.516667],
  zoom: 11,
});

var tileLayer = L.tileLayer(
  "https://tile.openstreetmap.org/{z}/{x}/{y}.png?{foo}",
  {
    foo: "bar",
    attribution:
      '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  }
).addTo(map);

var marker = L.marker([-18.933333, 47.516667]).addTo(map);
