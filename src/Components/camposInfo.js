
export default function camposInfo() {
	return (
		<div class=" grid gap-6 mb-6 xl:grid-cols-3">
			<div>
				<label for="first_name" class="block mb-2 text-lg font-medium text-gray-900 dark:text-gray-1000">Nombre del administrador</label>
				<input type="text" id="nombreAdministrador" class="bg-gray-50 text-lg border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Introducir nombre" required />
			</div>
			<div>
				<label for="last_name" class="block mb-2 text-lg font-medium text-gray-900 dark:text-gray-1000">Tipo de usuario</label>
				<input type="text" id="tipoUsuario" class="bg-gray-50 border text-lg border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Introducir tipo" required />
			</div>
			<div>
				<label for="phone" class="block mb-2 text-lg font-medium text-gray-900 dark:text-gray-1000">Hora de inicio Sesión</label>
				<input type="tel" id="horaInicioSesion" class="bg-gray-50 text-lg border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Introducir hora" required />

			</div>
		</div>
	);
}


