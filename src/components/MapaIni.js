/* This example requires Tailwind CSS v2.0+ */

import React, { Component } from 'react';
//import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax
import ReactMapGL, { Marker } from 'react-map-gl'



//mapboxgl.accessToken = 'pk.eyJ1IjoicGF0cmljaW9wYXJlZGVzIiwiYSI6ImNsMzd6bjlmdDBkaXEzZHEzeWowcjk5YXIifQ.WYVipj4sOnuBOkZbKaSEGw';


const navigation = [
    { name: 'Empieza ya', href: '#' },
    { name: 'Novedades', href: '#' },
    { name: 'Contacto', href: '#' },
]



class Mapa1 extends Component{

    
   
    state = {
        viewport: {
          width: "100vw",
          height: '400px',
          latitude: 42.430472,
          longitude: -123.334102,
          zoom: 15
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
                zoom: 12
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
        console.log(this.state.viewport.latitude);
        return (
       /**  {<Marker 
              longitude = {}
              latitude ={}>
              <div className="Mi ubicacion"><span></span></div>
           </Marker>};
        </div> **/



        <div className="flex items-center justify-center py-1  bg-blue-400"  style={{height: '100%' ,width: '100%', position:'absolute', top: '0', left: '0' }}>
            <div className="w-full p-2 m-2 bg-gray-100 rounded-lg shadow ">
                <section class="bg-dark w-full space-y-3 w-full py-4 rounded-3xl shadow-lg border flex flex-col">

                    <ReactMapGL {...this.state.viewport} mapStyle='mapbox://styles/mapbox/streets-v11' onViewportChange={(viewport => this.setState({viewport}))}  mapboxAccessToken='pk.eyJ1IjoicGF0cmljaW9wYXJlZGVzIiwiYSI6ImNsMzd6bjlmdDBkaXEzZHEzeWowcjk5YXIifQ.WYVipj4sOnuBOkZbKaSEGw' style={{height: '400px'}} >
                        <Marker
                            longitude={longitud}
                            latitude={latitud}>
                            <div className="marker temporary-marker"><span></span></div>
                        </Marker>
                    
                    </ReactMapGL>
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

}


export default Mapa1;