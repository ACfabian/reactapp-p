import componenteNavVar from "../Components/navVar";

export default function recargar() {
	return (

		<div className="App bg-white">

			{componenteNavVar('Inicio', 'Recargar', 'Cerrar sesión')}
			
			<div class="max-w-2xl mx-auto bg-white p-10">
				<form>
					<div class="grid gap-2 mb-5 lg:grid-cols-2">
						<div>
							<label for="first_name" class="block mb-2 text-lg font-medium text-gray-900 dark:text-gray-1000">Cantidad a recargar:</label>
						</div>
						<div>
							<input type="text" id="tipoUsuario" class="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Introducir hora" required />
						</div>
						<div>
							<label for="first_name" class="block text-lg mb-2  font-medium text-gray-900 dark:text-gray-1000">Banco de procedencia:</label>
						</div>
						<div>
							<input type="text" id="tipoUsuario" class="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Introducir hora" required />
						</div>
					</div>
					<div class="grid gap-5 mb-5 lg:grid-cols-1">
						<div>
							<label for="first_name" class="block text-lg mb-2  font-medium text-gray-900 dark:text-gray-1000">Comprobante:</label>
						</div>

						<div class="">


							<input class="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" id="file_input" type="file" />

						</div>
					</div>
					<div class="grid gap-2 mb-5 lg:grid-cols-2">
						<div>
							<label for="first_name" class="block text-lg mb-2  font-medium text-gray-900 dark:text-gray-1000">Cédula:</label>
						</div>
						<div>
							<input type="text" id="tipoUsuario" class="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Introducir hora" required />
						</div>
						
					</div>
					<div class="text-center">
							<button type="button" class="border text-lg border-indigo-500 bg-blue-500 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-indigo-600 focus:outline-none focus:shadow-outline">
								RECARGAR
							</button>
						</div>
						
				</form>
			</div>
			<script src="https://unpkg.com/flowbite@1.3.4/dist/flowbite.js"></script>
			<script src="https://unpkg.com/flowbite@1.4.0/dist/flowbite.js"></script>
		</div >
	);
}