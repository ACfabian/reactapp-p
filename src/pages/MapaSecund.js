/* This example requires Tailwind CSS v2.0+ */
/**import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'
import React, { useRef, useEffect, useState } from 'react';
import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax
**/

import React, { Component } from 'react';
//import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax
import ReactMapGL, { Marker } from 'react-map-gl'
import componenteNavVar from "../Components/navVar";
//mapboxgl.accessToken = 'pk.eyJ1IjoicGF0cmljaW9wYXJlZGVzIiwiYSI6ImNsMzd6bjlmdDBkaXEzZHEzeWowcjk5YXIifQ.WYVipj4sOnuBOkZbKaSEGw';


const navigation = [
    { name: 'Empieza ya', href: '#' },
    { name: 'Novedades', href: '#' },
    { name: 'Contacto', href: '#' },
]



/**export default function Example() {
    const mapContainer = useRef(null);
    const map = useRef(null);
    const [lng, setLng] = useState(-70.9);
    const [lat, setLat] = useState(42.35);
    const [zoom, setZoom] = useState(9);
    //const [center, setCenter] = useState<LngLatLike>([-70.9,42.35]);

    
    useEffect(() => {
        navigator.geolocation.getCurrentPosition(
           ({coords}) => {
                setLng( coords.longitude)
                setLat(coords.latitude);
           },
           () => {
            console.error("No se pudo acceder a la ubicación");
           }
        );
      }, []);

    useEffect(() => {
        if (map.current) return; // initialize map only once
        map.current = new mapboxgl.Map({
            container: mapContainer.current,
            style: 'mapbox://styles/mapbox/streets-v11',
            center: [lng, lat],
            zoom: zoom
        });
    });**/
class Mapa2 extends Component{

    
   
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
        <div class="items-center justify-center  bg-blue-400" style={{ height: '100%', width: '100%', position: 'absolute', top: '0', left: '0' }}>
{componenteNavVar('Inicio', 'MAPA SECUNDARIO', 'Cerrar sesión')}

            <div class=" w-full bg-blue-400" >
                <div className="w-full bg-gray-100 rounded-lg shadow ">
                    <section className="bg-dark w-full rounded-3xl shadow-lg border flex flex-col">
                        
                    <ReactMapGL {...this.state.viewport} mapStyle='mapbox://styles/mapbox/streets-v11' onViewportChange={(viewport => this.setState({viewport}))}  mapboxAccessToken='pk.eyJ1IjoicGF0cmljaW9wYXJlZGVzIiwiYSI6ImNsMzd6bjlmdDBkaXEzZHEzeWowcjk5YXIifQ.WYVipj4sOnuBOkZbKaSEGw' style={{height: '400px'}} >
                    <Marker
                        longitude={(longitud)}
                        latitude={(latitud)}>
                        <div className="marker">
                            <span><b>1</b></span>
                        </div>
                    </Marker>
                   
                    
                    </ReactMapGL>
                        <div class="relative overflow-x-auto shadow-md sm:rounded-lg ">
                            <table class="text-sm text-left text-white bg-blue-400 text-white w-full " >
                                <tbody>
                                    <tr
                                        class="bg-blue-500 border-b  ">
                                        <td class="w-1/2 p-4">
                                            <div class="flex items-center">

                                                VEHICULOS A ESTACIONAR 
                                            </div>
                                        </td>
                                        <th scope="row" class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                                            Plazas requeridas : 1
                                        </th>
                                    </tr>
                                    <tr
                                        class="bg-blue-500 border-b ">
                                        <td class="w-4 p-4">
                                            <div class="flex items-center">

                                                Placa del vehiculo
                                            </div>
                                        </td>
                                        <th scope="row" class="px-6 py-4 font-medium bg-blue-500 text-white dark:text-white whitespace-nowrap">
                                           <input className="bg-blue-500 border-2 border-b  font-bold " type="text" name="remember" defaultValue="Introducir placa" placeholder="Introducir placa" />
                                        </th>
                                    </tr>
                                    <tr class="bg-blue-500 border-b ">
                                        <td class="w-4 p-4">
                                            <div class="flex items-center">

                                                Cedula
                                            </div>
                                        </td>
                                        <th scope="row" class="px-6 py-4 font-medium   text-white ">                                            
                                            <input className="bg-blue-500 border-2 border-b  font-bold " type="text" name="remember" defaultValue="Introducir cedula" placeholder="Introducir placa" />
                                        </th>
                                    </tr>
                                    <tr class="bg-blue-500 border-b ">
                                        <td class="w-4 p-4">
                                            <div class="flex items-center">

                                                Al reservar tendra 3 minutos para llegar al lugar del parqueadero
                                            </div>
                                        </td>
                                        <th scope="row" class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                                            <button class="border-2 border-b bg-blue-500 ml-3 px-1/2 px-6 font-bold uppercase text-white rounded transition-all hover:border-blue-600 hover:bg-blue-600 hover:text-white">Reservar</button>
                                        </th>
                                    </tr>

                                </tbody>
                            </table>

                            <div class="flex justify-center w-full px-full mx-auto  rounded border-2 border-gray-200">
                                <button class="border-2 border-transparent bg-blue-500 ml-3 px-1/2 px-6 font-bold uppercase text-white rounded transition-all hover:border-blue-500 hover:bg-transparent hover:text-blue-500">Recargar</button>
                                <div class="border-2 border-transparent bg-gray-900 ml-3 px-1/2 px-6 font-bold uppercase text-white rounded ">
                                    Saldo disponible = $20
                                </div>
                            </div>
                        </div>



                    </section>

                </div>

            </div>

        </div>
    )
}
}
export default Mapa2;