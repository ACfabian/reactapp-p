import componenteNavVar from "../Components/navVar";

export default function acreditacionSaldo() {
	return (

		<div className="App bg-white">

			{componenteNavVar('Inicio', 'Registro del Parqueadero', 'Cerrar sesión')}

			<div class="max-w-2xl mx-auto bg-white p-16">
				<form>
					<div class="grid gap-6 mb-6 lg:grid-cols-2">
						<div>
							<label for="first_name" class="block mb-2 text-lg font-medium text-gray-900 dark:text-gray-1000">Nombre del Parqueadero:</label>
						</div>
						<div>
							<input type="text" id="tipoUsuario" class="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Introducir hora" required />
						</div>
						<div class="">
							<label for="first_name" class="block mb-2 text-lg font-medium text-gray-900 dark:text-gray-1000">Horario de atención:</label>
						</div>
						<div></div>
						<div>
							<label for="first_name" class="block mb-2 text-lg font-medium text-gray-900 dark:text-gray-1000">Inicio</label>
							<input type="text" id="tipoUsuario" class="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Introducir total" required />
						</div>
						<div>
							<label for="last_name" class="block mb-2 text-lg font-medium text-gray-900 dark:text-gray-1000">Cierre</label>
							<input type="text" id="tipoUsuario" class="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Introducir total" required />
						</div>
					</div>

					<div class="grid gap-6 mb-6 lg:grid-cols-3">
						<div>
							<label for="first_name" class="block mb-2 text-lg font-medium text-gray-900 dark:text-gray-1000">Celular de Trabajo:</label>
							<input type="text" id="nombreAdministrador" class="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Introducir saldo" required />
						</div>
						<div>
							<label for="last_name" class="block mb-2 text-lg font-medium text-gray-900 dark:text-gray-1000">Plazas totales:</label>
							<input type="text" id="tipoUsuario" class="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Introducir total" required />
						</div>
						<div>
							<label for="last_name" class="block mb-2 text-lg font-medium text-gray-900 dark:text-gray-1000">Precio por hora:</label>
							<input type="text" id="tipoUsuario" class="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Introducir total" required />
						</div>

					</div>
					<div class="grid gap-6 mb-6 lg:grid-cols-1">
						<div>
							<label for="first_name" class="block mb-2 text-lg font-medium text-gray-900 dark:text-gray-1000">Ubicación:</label>
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
			</div>



			<script src="https://unpkg.com/flowbite@1.3.4/dist/flowbite.js"></script>


		</div >
	);
}