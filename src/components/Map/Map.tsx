import React, {useContext, useEffect} from 'react';
import {MapContainer, Marker, Popup, TileLayer} from 'react-leaflet';
import '../../utils/fix-map-icon';

import 'leaflet/dist/leaflet.css';
import './Map.css';
import {SearchContext} from "../../contexts/search.context";

export const Map = () => {
    const {search} = useContext(SearchContext)

    useEffect(() => {
        console.log('Make request to search for', search);
    }, [search]);

    return (
        <div className="map">
            <h1>Search for: {search}</h1>
            <MapContainer center={[50.2656066, 18.9938998]} zoom={20}>
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> & contributors'
                />
                <Marker position={[50.2656066, 18.9938998]}>
                    <Popup>
                        <h2>IT.focus</h2>
                        <p>Super firma co programuje.</p>
                    </Popup>
                </Marker>
                <Marker position={[50, 19]}>
                    <Popup>
                        <h2>Nie IT FOCUS</h2>
                        <p>To nie jest IT focus</p>
                    </Popup>
                </Marker>
            </MapContainer>
        </div>
    );
};