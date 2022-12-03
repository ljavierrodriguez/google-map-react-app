import { useEffect, useRef, useState } from 'react';
import './App.css';
import L from 'leaflet';

const App = () => {

  const [markers, setMarkers] = useState([
    { lat: 51.5, long: -0.09 },
    { lat: 51.4, long: -0.08 },
    { lat: 51.3, long: -0.07 }
  ]);

  let map = useRef();

  useEffect(() => {
    loadMap();

    return () => {
      map.remove();
    }
  }, [])

  const loadMap = () => {

    map = L.map('map', {
      center: [51.505, -0.09],
      zoom: 13
    });


    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 20,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);

    markers.forEach((marker) => {
      L.marker([marker.lat, marker.long]).addTo(map);
    });
  }



  return (
    <div id="map" ref={t => map = t}></div>
  )
}

export default App;