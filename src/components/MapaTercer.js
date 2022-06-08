/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'
import React, { useRef, useEffect, useState } from 'react';
import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax

mapboxgl.accessToken = 'pk.eyJ1IjoicGF0cmljaW9wYXJlZGVzIiwiYSI6ImNsMzd6bjlmdDBkaXEzZHEzeWowcjk5YXIifQ.WYVipj4sOnuBOkZbKaSEGw';


const navigation = [
    { name: 'Empieza ya', href: '#' },
    { name: 'Novedades', href: '#' },
    { name: 'Contacto', href: '#' },
]

export default function Example() {
    const mapContainer = useRef(null);
    const map = useRef(null);
    const [lng, setLng] = useState(-70.9);
    const [lat, setLat] = useState(42.35);
    const [zoom, setZoom] = useState(9);

    useEffect(() => {
        if (map.current) return; // initialize map only once
        map.current = new mapboxgl.Map({
            container: mapContainer.current,
            style: 'mapbox://styles/mapbox/streets-v11',
            center: [lng, lat],
            zoom: zoom
        });
    });

    useEffect(() => {
        if (!map.current) return; // wait for map to initialize
        map.current.on('move', () => {
            setLng(map.current.getCenter().lng.toFixed(4));
            setLat(map.current.getCenter().lat.toFixed(4));
            setZoom(map.current.getZoom().toFixed(2));
        });
    });

    return (

        <div class=" flex items-center justify-center  bg-blue-400"  style={{ height: '100%', width: '100%', position: 'absolute', top: '0', left: '0' }}>
            <div className=" w-full bg-gray-100  shadow ">
                <section class="bg-dark  space-y-3 w-full  rounded-3xl shadow-lg ">
                <div className="sidebar">
                            Longitude: {lng} | Latitude: {lat} | Zoom: {zoom}
                        </div>
                        <div ref={mapContainer} className="map-container  " style={{ height: '400px' }} />
                   
                    
                </section>
                <div class="container mx-auto">
                        <div class="mt-4 mb-12 px-4 py-1/2  justify-between bg-blue-500 rounded-md">
                            <div class="justify-center">
                                <div class="text-base text-xl text-center  clear-both">Ball possession (%)</div>
                                <div>


                                </div>
                            </div>
                        </div>
                    </div>
            </div>
            
        </div>

    )
}
