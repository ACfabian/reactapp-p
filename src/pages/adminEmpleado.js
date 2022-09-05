import componenteNavVar from "../Components/navVar";

export default function adminEmpleado() {
	return (
		<div className="App bg-white">

			{componenteNavVar('Inicio', 'Adminstrar Empleados', 'Cerrar sesión')}

			<div class=" mx-auto p-16">
				<div class="relative overflow-x-auto shadow-md sm:rounded-lg">

					<table class="w-full text-base text-left text-gray-500 dark:text-gray-400">
						<thead class="text-base text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
							<tr>
								<th colSpan={5} scope="col" class="px-6 py-3" align="center">
									NOMINA DE EMPLEADOS
								</th>
							</tr>
							<tr
								class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
								<th colSpan={5} scope="col" class="px-6 py-3" align="right">
									<button type="button" class="border text-lg border-indigo-500 bg-indigo-500 text-white rounded-md px-4 py-3 m-2 transition duration-500 ease select-none hover:bg-indigo-600 focus:outline-none focus:shadow-outline">
										Nuevo
									</button>
								</th>
							</tr>
							<tr>
								<th colSpan={1} scope="col" class="px-6 py-3">
									NOMBRE
								</th>
								<th colSpan={1} scope="col" class="px-6 py-3">
									CEDULA
								</th>
								<th colSpan={1} scope="col" class="px-6 py-3">
									CORREO
								</th>
								<th colSpan={1} scope="col" class="px-6 py-3">
									CONTACTO
								</th>
								<th colSpan={1} scope="col" class="px-6 py-3">
									ACCION (BOTON)
								</th>
							</tr>
						</thead>
						<tbody>
							<tr
								class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
								<td colSpan={1} class="w-4 p-4">
									ADMINISTRADOR1
								</td>
								<td colSpan={1} scope="row" class="px-6 py-4 font-medium text-gray-900 dark:text-white ">
									2154789635
								</td>
								<td colSpan={1} class="w-4 p-4">
									admin1@gmail.com
								</td>
								<td colSpan={1} scope="row" class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
									0987456321
								</td>
								<td colSpan={1} class="px-6 py-4 text-right">
									<a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">ELIMINAR</a>
								</td>
							</tr>
							<tr
								class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
								<td colSpan={1} class="w-4 p-4">
									ADMINISTRADOR1
								</td>
								<td colSpan={1} scope="row" class="px-6 py-4 font-medium text-gray-900 dark:text-white ">
									2154789635
								</td>
								<td colSpan={1} class="w-4 p-4">
									admin1@gmail.com
								</td>
								<td colSpan={1} scope="row" class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
									0987456321
								</td>
								<td colSpan={1} class="px-6 py-4 text-right">
									<a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">ELIMINAR</a>
								</td>
							</tr>
							<tr
								class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
								<td colSpan={1} class="w-4 p-4">
									ADMINISTRADOR2
								</td>
								<td colSpan={1} scope="row" class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
									3698521470
								</td>
								<td colSpan={1} class="w-4 p-4">
									admin2@gmail.com
								</td>
								<td colSpan={1} scope="row" class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
									0987456321
								</td>
								<td colSpan={1} class="px-6 py-4 text-right">
									<a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">ELIMINAR</a>
								</td>
							</tr>
							<tr class="bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-600">
								<td colSpan={1} class="w-4 p-4">
									ADMINISTRADOR3
								</td>
								<td colSpan={1} scope="row" class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
									7896541235
								</td>
								<td colSpan={1} class="w-4 p-4">
									admin3@gmail.com
								</td>
								<td colSpan={1} scope="row" class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
									0987456321
								</td>
								<td colSpan={1} class="px-6 py-4 text-right">
									<a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">ELIMINAR</a>
								</td>
							</tr>
							<tr
								class="text-base text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
								<th colSpan={5} scope="col" class="px-6 py-3" align="right">
									<button type="button" class="border text-lg border-indigo-500 bg-indigo-500 text-white rounded-md px-4 py-3 m-2 transition duration-500 ease select-none hover:bg-indigo-600 focus:outline-none focus:shadow-outline">
										Guardar
									</button>
								</th>
							</tr>
						</tbody>
					</table>
				</div>

				<script src="https://unpkg.com/flowbite@1.3.4/dist/flowbite.js"></script>
			</div>
		</div >
	);
}