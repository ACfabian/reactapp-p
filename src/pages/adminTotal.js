import componenteNavVar from "../Components/navVar";

export default function adminTotal() {
	return (
		<div className="App bg-white">

			{componenteNavVar('Inicio','Administración Total','Cerrar sesión')}
			
			<div class="max-w-2xl mx-auto bg-white p-16">
				<form>
					<div class="grid gap-6 mb-6 lg:grid-cols-2">
						<div>
							<label for="first_name" class="block mb-2 text-lg font-medium text-gray-900 dark:text-gray-1000">Nombre del administrador</label>
							<input type="text" id="nombreAdministrador" class="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Introducir nombre" required />
						</div>
						<div>
							<label for="last_name" class="block mb-2 text-lg font-medium text-gray-900 dark:text-gray-1000">Tipo de usuario</label>
							<input type="text" id="tipoUsuario" class="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Introducir tipo" required />
						</div>
						<div>

						</div>
						<div>
							<label for="phone" class="block mb-2 text-lg font-medium text-gray-900 dark:text-gray-1000">Hora de inicio Sesión</label>
							<input type="tel" id="horaInicioSesion" class="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Introducir hora" required />

						</div>
					</div>
					<div class="mb-6">
						<label for="email" class="block mb-2 text-lg font-medium text-gray-900 dark:text-gray-1000">Parqueaderos totales</label>
						<input type="email" id="plazasLibres" class="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Intrucir # de parqueaderos" required />
					</div>
					<div class="mb-6 items-center">
						<label for="password" class="block mb-2 text-lg font-medium text-gray-900 dark:text-gray-1000">Seleccionar ciudad</label>
						<select class=" flex-1 pbg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
							<option>Loja</option>
							<option>Cuenca</option>
							<option>Quito</option>
							<option>Santa Elena</option>
						</select>
					</div>
					<div class="mb-6">
						<label for="confirm_password" class="block mb-2 text-lg font-medium text-gray-900 dark:text-gray-1000">Buscar Nombre/Propietario</label>
						<div class="grid gap-6 mb-6 lg:grid-cols-2">
							<input type="text" id="tipoUsuario" class="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Nombre propietario" required />
							<input type="text" id="tipoUsuario" class="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Nombre parqueadero" required />
						</div>
					</div>
				</form>
			</div>


			<div class="max-w-4xl mx-auto">

				<div class="relative overflow-x-auto shadow-md sm:rounded-lg">
					<div class="p-4">

					</div>
					<table class="w-full text-base text-left text-gray-500 dark:text-gray-400">
						<thead class="text-base text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
							<tr>
								<th scope="col" class="px-6 py-3">
									NombreP
								</th>
								<th scope="col" class="px-6 py-3">
									Ubicacion
								</th>
								<th scope="col" class="px-6 py-3">
									Fecha Registro
								</th>
								<th scope="col" class="px-6 py-3">
									Plazas
								</th>
								<th scope="col" class="px-6 py-3">
									Precio
								</th>
								<th scope="col" class="px-6 py-3">
									Propietario
								</th>
								<th scope="col" class="px-6 py-3">
									Acción (Botón)
								</th>
							</tr>
						</thead>
						<tbody>
							<tr
								class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
								<td class="w-4 p-4" contentEditable>
									PARK A
								</td>
								<th scope="row" class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
									Calle #1
								</th>
								<td class="px-6 py-4">
									07/05/2022
								</td>
								<td class="px-6 py-4">
									20
								</td>
								<td class="px-6 py-4">
									$ 1.00
								</td>
								<td class="px-6 py-4">
									nombre1 
								</td>
								<td class="px-6 py-4 text-right">
									<a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Editar</a>
								</td>
							</tr>
							<tr
								class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
								<td class="w-4 p-4">
									PARK B
								</td>
								<th scope="row" class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
									Calle #2
								</th>
								<td class="px-6 py-4">
									07/05/2022
								</td>
								<td class="px-6 py-4">
									30
								</td>
								<td class="px-6 py-4">
									$ 1.00
								</td>
								<td class="px-6 py-4">
									nombre2
								</td>
								<td class="px-6 py-4 text-right">
									<a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Editar</a>
								</td>
							</tr>
							<tr class="bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-600">
							<td class="w-4 p-4">
									PARK C
								</td>
								<th scope="row" class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
									Calle #3
								</th>
								<td class="px-6 py-4">
									07/05/2022
								</td>
								<td class="px-6 py-4">
									15
								</td>
								<td class="px-6 py-4">
									$ 1.00
								</td>
								<td class="px-6 py-4">
									nombre3
								</td>
								<td class="px-6 py-4 text-right">
									<a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Editar</a>
								</td>
							</tr>
						</tbody>
					</table>
				</div>

				<script src="https://unpkg.com/flowbite@1.3.4/dist/flowbite.js"></script>
			</div>

		</div >
	);
}