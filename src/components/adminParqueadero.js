export default function adminParqueadero() {
	return (
		<div className="App">

			<div class="max-w-2xl mx-auto bg-white p-16">

				<form>
					<div class="grid gap-6 mb-6 lg:grid-cols-2">
						<div>
							<label for="first_name" class="block mb-2 text-lg font-medium text-gray-900 dark:text-gray-1000">Nombre del administrador</label>
							<input type="text" id="nombreAdministrador" class="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Introducir nombre" required/>
						</div>
						<div>
							<label for="last_name" class="block mb-2 text-lg font-medium text-gray-900 dark:text-gray-1000">Tipo de usuario</label>
							<input type="text" id="tipoUsuario" class="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Introducir tipo" required/>
						</div>
						<div>
							
						</div>
						<div>
							<label for="phone" class="block mb-2 text-lg font-medium text-gray-900 dark:text-gray-1000">Hora de inicio Sesión</label>
							<input type="tel" id="horaInicioSesion" class="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Introducir hora" required/>
						    
						</div>
					</div>
					<div class="mb-6">
						<label for="email" class="block mb-2 text-lg font-medium text-gray-900 dark:text-gray-1000">Plazas libres</label>
						<input type="email" id="plazasLibres" class="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Intruducir # plazas" required/>
					</div>
					<div class="mb-6">
						<label for="password" class="block mb-2 text-lg font-medium text-gray-900 dark:text-gray-1000">Plazas Ocupadas</label>
						<input type="password" id="plazasOcupadas" class="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Intruducir # plazas" required/>
					</div>
					<div class="mb-6">
						<label for="confirm_password" class="block mb-2 text-lg font-medium text-gray-900 dark:text-gray-1000">Solicitudes de reserva/espera</label>
						<input type="password" id="solicitudesReserva" class="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Introducir solicitudes" required/>
					</div>
					<div class="mb-6">
						<label for="confirm_password" class="block mb-2 text-lg font-medium text-gray-900 dark:text-gray-1000">Ingresos desde inicio de sesión</label>
						<input type="password" id="ingresosDesdeInicio" class="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Intruducir # ingresos" required/>
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
									Plaza
								</th>
								<th scope="col" class="px-6 py-3">
									Estado
								</th>
								<th scope="col" class="px-6 py-3">
									Cliente
								</th>
								<th scope="col" class="px-6 py-3">
									Placa
								</th>
								<th scope="col" class="px-6 py-3">
									H. Inicio
								</th>
								<th scope="col" class="px-6 py-3">
									Total
								</th>
								<th scope="col" class="px-6 py-3">
									Acción
								</th>
							</tr>
						</thead>
						<tbody>
							<tr
								class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
								<td class="w-4 p-4">
									1
								</td>
								<th scope="row" class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
									Apple MacBook Pro 17"
								</th>
								<td class="px-6 py-4">
									Sliver
								</td>
								<td class="px-6 py-4">
									Laptop
								</td>
								<td class="px-6 py-4">
									$2999
								</td>
								<td class="px-6 py-4">
									$2999
								</td>
								<td class="px-6 py-4 text-right">
									<a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
								</td>
							</tr>
							<tr
								class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
								<td class="w-4 p-4">
									1
								</td>
								<th scope="row" class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
									Apple MacBook Pro 17"
								</th>
								<td class="px-6 py-4">
									Sliver
								</td>
								<td class="px-6 py-4">
									Laptop
								</td>
								<td class="px-6 py-4">
									$2999
								</td>
								<td class="px-6 py-4">
									$2999
								</td>
								<td class="px-6 py-4 text-right">
									<a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
								</td>
							</tr>
							<tr class="bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-600">
								<td class="w-4 p-4">
									1
								</td>
								<th scope="row" class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
									Apple MacBook Pro 17"
								</th>
								<td class="px-6 py-4">
									Sliver
								</td>
								<td class="px-6 py-4">
									Laptop
								</td>
								<td class="px-6 py-4">
									$2999
								</td>
								<td class="px-6 py-4">
									$2999
								</td>
								<td class="px-6 py-4 text-right">
									<a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
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