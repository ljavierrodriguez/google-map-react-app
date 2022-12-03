import { useEffect, useRef, useState } from 'react';
import './App.css';
import L from 'leaflet';

const App = () => {

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
      zoom: 8
    });
  
    
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);
    let marker = L.marker([51.5, -0.09]).addTo(map);
    let marker2 = L.marker([31.5, -0.21]).addTo(map);
  
  }

  return (
    <div id="map" ref={t => map = t}></div>
  )
}

export default App;