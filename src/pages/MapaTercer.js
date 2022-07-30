/* This example requires Tailwind CSS v2.0+ */
/**import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'
import React, { useRef, useEffect, useState } from 'react';
import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax

mapboxgl.accessToken = 'pk.eyJ1IjoicGF0cmljaW9wYXJlZGVzIiwiYSI6ImNsMzd6bjlmdDBkaXEzZHEzeWowcjk5YXIifQ.WYVipj4sOnuBOkZbKaSEGw';
 **/

import React, { Component } from 'react';
//import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax
import ReactMapGL, { Marker } from 'react-map-gl'


/**export default function Example() {
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
    });**/
    class Mapa3 extends Component{

    
   
        state = {
            viewport: {
              width: "100vw",
              height: '400px',
              latitude: 42.430472,
              longitude: -123.334102,
              zoom: 10
            }
          };
    
        componentDidMount() { 
            this.setUserLocation();
        } 
    
        methodOne(someValue) {
            /* ... */
            this.setState({ latitude : someValue})
        }
        methodOne(someValue) {
            /* ... */
            this.setState({ longitude: someValue})
        }
        
        
      
        setUserLocation = () => {
            navigator.geolocation.getCurrentPosition(position => {
                let newViewport = {
                    height: "100vh",
                    width: "100vw",
                    latitude: position.coords.latitude,
                    longitude: position.coords.longitude,
                    zoom: 14
                }
                this.setState({
                    viewport: newViewport
    
                })
            })
            
        }
    
       /**  constructor(){
            this.state = {
                latituded: latitude,
                longituded: longitude,
            };
        }**/
    
    
    
        render(){
            const longitud = this.state.viewport.longitude;
            const latitud = this.state.viewport.latitude;
            console.log(this.state.viewport.longitude);
    return (

        <div className=" flex items-center justify-center  bg-blue-400"  style={{ height: '100%', width: '100%', position: 'absolute', top: '0', left: '0' }}>
            <div className=" w-full bg-gray-100  shadow ">
                <section className="bg-dark  space-y-3 w-full  rounded-3xl shadow-lg ">                
                <ReactMapGL {...this.state.viewport} mapStyle='mapbox://styles/mapbox/streets-v11' onViewportChange={(viewport => this.setState({viewport}))}  mapboxAccessToken='pk.eyJ1IjoicGF0cmljaW9wYXJlZGVzIiwiYSI6ImNsMzd6bjlmdDBkaXEzZHEzeWowcjk5YXIifQ.WYVipj4sOnuBOkZbKaSEGw' style={{height: '400px'}} >
                    <Marker
                        longitude={(longitud)}
                        latitude={(latitud)}>
                        <div className="marker">
                            <span><b>1</b></span>
                        </div>
                    </Marker>
                   
                    
                    </ReactMapGL>
                   
                    
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
}
export default Mapa3;
