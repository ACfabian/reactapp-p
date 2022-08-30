import React, { useState, useEffect, useRef } from 'react';

// openlayers
import Map from 'ol/Map'
import View from 'ol/View'
import TileLayer from 'ol/layer/Tile'
import VectorLayer from 'ol/layer/Vector'
import VectorSource from 'ol/source/Vector'
import OSM from 'ol/source/OSM'
import XYZ from 'ol/source/XYZ'
import { transform } from 'ol/proj'
import { toStringXY } from 'ol/coordinate';

import componenteNavVar from "../Components/navVar";

function MapaSecundario() {
    // set intial state
    const [map, setMap] = useState()
    const [featuresLayer, setFeaturesLayer] = useState()
    const [selectedCoord, setSelectedCoord] = useState()

    // pull refs
    const mapElement = useRef()

    // create state ref that can be accessed in OpenLayers onclick callback function
    //  https://stackoverflow.com/a/60643670
    const mapRef = useRef()
    mapRef.current = map

    // initialize map on first render - logic formerly put into componentDidMount
    useEffect(() => {

        // create and add vector source layer
        const initalFeaturesLayer = new VectorLayer({
            source: new VectorSource()
        })

        // create map
        const initialMap = new Map({
            target: mapElement.current,
            layers: [
                new TileLayer({
                    source: new OSM()
                })
            ],
            view: new View({
                projection: 'EPSG:3857',
                center: [0, 0],
                zoom: 2
            }),
            controls: []
        })

        // save map and vector layer references to state
        setMap(initialMap)
        setFeaturesLayer(initalFeaturesLayer)

    }, [])
    return (
        <div class="items-center justify-center  bg-blue-400" style={{ height: '100%', width: '100%', position: 'absolute', top: '0', left: '0' }}>
            {componenteNavVar('Inicio', 'MAPA SECUNDARIO', 'Cerrar sesión')}

            <div class=" w-full bg-blue-400" >
                <div className="w-full bg-gray-100 rounded-lg shadow ">
                    <section className="bg-dark w-full rounded-3xl shadow-lg border flex flex-col">
                        <div ref={mapElement} className="map-container" style={{ height: '400px' }}></div>
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
export default MapaSecundario;