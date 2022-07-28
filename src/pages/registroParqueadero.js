import componenteNavVar from "../components/navVar";
import {React, useState} from "react";
import { AgregarP } from '../Context/firestoreController'
import { useNavigate } from "react-router-dom";
import { useAuth } from '../Context/authContext'
export default function AcreditacionSaldo() {
	
	const navigate = useNavigate();
	const { user  } = useAuth();
  
	const [parq1, setParq] = useState({
		NombreP: "",
		Hinicio: "",
		Hcierre: "",
		Telefono: "",
		Plazas: "",
		PrecioH: "",
		Ubicacion: "",
	});
	
	const agg  = async (e)=> {
	  e.preventDefault();
	  navigate("/inicio");
	  try {
		 await AgregarP(parq1.NombreP,parq1.Hinicio,parq1.Hcierre,parq1.Telefono,parq1.Plazas,parq1.PrecioH,parq1.Ubicacion,user.uid);
	  } catch (error) {
		console.log(error)
	  }
	};
	return (

		<div className="App bg-white">

			{componenteNavVar('Inicio', 'Registro del Parqueadero', 'Cerrar sesión')}

			<div class="max-w-2xl mx-auto bg-white p-16">
				<form onSubmit={agg}>
					<div class="grid gap-6 mb-6 lg:grid-cols-2">
						<div>
							<label for="first_name" class="block mb-2 text-lg font-medium text-gray-900 dark:text-gray-1000">Nombre del Parqueadero:</label>
						</div>
						<div>
							<input type="text"  onChange={(e) => setParq({ ...parq1, NombreP: e.target.value })} id="tipoUsuario" class="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Nombre del parqueadero" required />
						</div>
						<div class="">
							<label for="first_name" class="block mb-2 text-lg font-medium text-gray-900 dark:text-gray-1000">Horario de atención:</label>
						</div>
						<div></div>
						<div>
							<label for="first_name" class="block mb-2 text-lg font-medium text-gray-900 dark:text-gray-1000">Inicio</label>
							<input type="time" id="tipoUsuario" onChange={(e) => setParq({ ...parq1, Hinicio: e.target.value })} class="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  required />
						</div>
						<div>
							<label for="last_name" class="block mb-2 text-lg font-medium text-gray-900 dark:text-gray-1000">Cierre</label>
							<input type="time" id="tipoUsuario" onChange={(e) => setParq({ ...parq1, Hcierre: e.target.value })} class="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  required />
						</div>
					</div>

					<div class="grid gap-6 mb-6 lg:grid-cols-3">
						<div>
							<label for="first_name" class="block mb-2 text-lg font-medium text-gray-900 dark:text-gray-1000">Celular de Trabajo:</label>
							<input type="tel" id="nombreAdministrador" onChange={(e) => setParq({ ...parq1, Telefono: e.target.value })} class="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Telefono" required />
						</div>
						<div>
							<label for="last_name" class="block mb-2 text-lg font-medium text-gray-900 dark:text-gray-1000">Plazas totales:</label>
							<input type="number" id="tipoUsuario" onChange={(e) => setParq({ ...parq1, Plazas: e.target.value })} class="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Plazas" required />
						</div>
						<div>
							<label for="last_name" class="block mb-2 text-lg font-medium text-gray-900 dark:text-gray-1000">Precio por hora:</label>
							<input type="number" id="tipoUsuario" onChange={(e) => setParq({ ...parq1, PrecioH: e.target.value })} class="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Precio" required />
						</div>

					</div>
					<div class="grid gap-6 mb-6 lg:grid-cols-1">
						<div>
							<label for="first_name" class="block mb-2 text-lg font-medium text-gray-900 dark:text-gray-1000">Ubicación:</label>
						</div>
						<div>
							<input type="text" id="tipoUsuario" onChange={(e) => setParq({ ...parq1, Ubicacion: e.target.value })} class="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Ubicación" required />
						</div>
						<div class="text-center">
							<button type="submit" class="border text-lg border-indigo-500 bg-blue-500 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-indigo-600 focus:outline-none focus:shadow-outline">
								REGISTRAR
							</button>
						</div>
					</div>
				</form>
			</div>
		</div >
	);
}