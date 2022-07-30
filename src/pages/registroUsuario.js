import componenteNavVar from "../Components/navVar";
import { Radio } from "react";

export default function registrarUsuario() {
	return (

		<div className="App bg-white">

			{componenteNavVar('Inicio', 'Registro de Usuario', 'Cerrar sesión')}

			<div class="max-w-2xl mx-auto bg-white p-10">
				<form>
					<div class="grid gap-2 mb-2 lg:grid-cols-2">
						<div>
							<label for="first_name" class="block text-lg font-medium text-gray-900 dark:text-gray-1000">Cédula:</label>
							<input type="text" id="tipoUsuario" class="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Introducir hora" required />
						</div>
						<div>
							<label for="first_name" class="block text-lg font-medium text-gray-900 dark:text-gray-1000">Nombre:</label>
							<input type="text" id="tipoUsuario" class="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Introducir hora" required />
						</div>
						<div>
							<label for="first_name" class="block text-lg font-medium text-gray-900 dark:text-gray-1000">Correo:</label>
							<input type="text" id="tipoUsuario" class="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Introducir hora" required />
						</div>
						<div>
							<label for="first_name" class="block text-lg font-medium text-gray-900 dark:text-gray-1000">Celular:</label>
							<input type="text" id="tipoUsuario" class="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Introducir hora" required />
						</div>

						<div class="">
							<label for="first_name" class="block text-lg font-medium text-gray-900 dark:text-gray-1000">Tipo de Cuenta:</label>
						</div>
						<div></div>
						<div class="flex items-center pl-4 rounded ">
							<input id="bordered-radio-1" type="radio" value="" name="bordered-radio" class="w-4 h-4 text-blue-600 bg-gray-100 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
							<label for="bordered-radio-1" class="py-4 ml-2 w-full text-lg font-medium font-medium text-gray-900 dark:text-gray-1000">Cliente</label>
						</div>
						<div class="flex items-center pl-4 rounded">
							<input checked id="bordered-radio-2" type="radio" value="" name="bordered-radio" class="w-4 h-4 text-blue-600 bg-gray-100 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
							<label for="bordered-radio-2" class="py-4 ml-2 w-full text-lg font-medium font-medium text-gray-900 dark:text-gray-1000">Dueño</label>
						</div>
					</div>

					<div class="grid gap-2 mb-5 lg:grid-cols-1">
						<div>
							<label for="first_name" class="block text-lg font-medium text-gray-900 dark:text-gray-1000">Contraseña:</label>
						</div>
						<div>
							<input type="text" id="tipoUsuario" class="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Introducir hora" required />
						</div>
						<div>
							<label for="first_name" class="block text-lg font-medium text-gray-900 dark:text-gray-1000">Confirmar Contraseña:</label>
						</div>
						<div>
							<input type="text" id="tipoUsuario" class="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Introducir hora" required />
						</div>
						<div class="text-center">
							<button type="button" class="border text-lg border-indigo-500 bg-blue-500 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-indigo-600 focus:outline-none focus:shadow-outline">
								REGISTRAR
							</button>
						</div>
					</div>
				</form>
			</div >
			<script src="https://unpkg.com/flowbite@1.3.4/dist/flowbite.js"></script>
		</div >
	);
}