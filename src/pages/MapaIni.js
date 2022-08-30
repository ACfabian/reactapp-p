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

function MapaInicial() {
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
        <div className="items-center justify-center  bg-blue-400" style={{ height: '100%', width: '100%', position: 'absolute', top: '0', left: '0' }}>
            {componenteNavVar('Inicio', 'MAPA', 'Cerrar sesión')}
            <div className="p-2 m-2 bg-gray-100 rounded-lg shadow ">
                <section class="bg-dark w-full space-y-3 w-full py-4 rounded-3xl shadow-lg border flex flex-col">
                    <div ref={mapElement} className="map-container" style={{ height: '400px' }}></div>
                    <div class="relative overflow-x-auto shadow-md sm:rounded-lg ">

                        <table class="text-sm text-left text-white bg-blue-400 text-white w-full md:table-fixed " >
                            <thead class="text-xs text-gray-700 uppercase bg-blue-500 white:bg-gray-700 dark:text-white">
                                <tr>
                                    <th scope="col" class="p-1">
                                        <div class="flex items-center">

                                            <label for="checkbox-all-search" class="sr-only">checkbox</label>
                                        </div>
                                    </th>
                                    <th scope="col" class="px-6 py-1">
                                        Nombre
                                    </th>
                                    <th scope="col" class="px-6 py-1">
                                        Ubicación
                                    </th>
                                    <th scope="col" class="px-6 py-1">
                                        Plazas disponibles
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr
                                    class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                    <td class="w-4 p-1">
                                        <div class="flex items-center">

                                            <label for="checkbox-table-search-1" class="sr-only">checkbox</label>
                                        </div>
                                    </td>
                                    <th scope="row" class="px-6 py-1 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                                        Nombre1
                                    </th>
                                    <td class="px-6 py-1">
                                        ubicacion1
                                    </td>
                                    <td class="px-6 py-1 text-center">
                                        1
                                    </td>
                                </tr>
                                <tr
                                    class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                    <td class="w-4 p-1">
                                        <div class="flex items-center">

                                            <label for="checkbox-table-search-2" class="sr-only">checkbox</label>
                                        </div>
                                    </td>
                                    <th scope="row" class="px-6 py-1 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                                        Nombre2
                                    </th>
                                    <td class="px-6 py-1">
                                        Ubicacion2
                                    </td>
                                    <td class="px-6 py-1 text-center">
                                        2
                                    </td>
                                </tr>
                                <tr class="bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-600">
                                    <td class="w-4 p-1">
                                        <div class="flex items-center">

                                            <label for="checkbox-table-search-3" class="sr-only">checkbox</label>
                                        </div>
                                    </td>
                                    <th scope="row" class="px-6 py-1 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                                        Nombre3
                                    </th>
                                    <td class="px-6 py-1 ">
                                        ubicacion3
                                    </td>
                                    <td class="px-6 py-1 text-center">
                                        3
                                    </td>
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
    )
}
export default MapaInicial;