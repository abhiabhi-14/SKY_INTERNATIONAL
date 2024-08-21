import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import iconUrl from '../../../assets/location.png';

const customIcon = L.icon({
  iconUrl: iconUrl,
  iconSize: [40, 40],
  iconAnchor: [20, 40],
});

function Map() {
  return (
    <div className='relative flex justify-start items-center  h-[48.5vh] md:w-[49vw] w-[80vw]'>
      <div
        className='z-50 absolute bottom-3 left-[6vw] p-5 w-[300px] border rounded-md'
        style={{ background: 'rgba(255, 255, 255, 0.8)', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}>
        <h3>Current Address:</h3>
        <p>Dwarka fly-over ,  Palam , New Delhi , 110045 , India</p>
      </div>
      <div className="map-container">
        <MapContainer center={[28.595293248122008, 77.09491225016242]} zoom={15} className='h-[49vh] md:w-[30vw] w-[80vw] z-0 ml-20 shadow-lg'>

          <div className='absolute h-full w-full bg-opacity-50 bg-black z-10'>
          </div>

          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker className='shadow-2xl' position={[28.595293248122008, 77.09491225016242]} icon={customIcon}>
            <Popup>
              We are here
            </Popup>
          </Marker>
        </MapContainer>
      </div>
    </div>
  )
}

export default Map
