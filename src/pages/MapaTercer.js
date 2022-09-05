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

function MapaTercer() {
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
            {componenteNavVar('Inicio', 'MAPA PRUEBA', 'Cerrar sesión')}
            <div className=" w-full bg-gray-100  shadow ">
                <section className="bg-dark  space-y-3 w-full  rounded-3xl shadow-lg ">
                    <div ref={mapElement} className="map-container" style={{ height: '600px'}}></div>
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
export default MapaTercer;
