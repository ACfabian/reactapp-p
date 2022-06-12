export default function eliminarEmpleado() {
	return (
		<div className="App">

			<div class="max-w-xl mx-auto">

				<div class="relative overflow-x-auto shadow-md sm:rounded-lg">
					<div class="p-4">

					</div>
					<table class="w-full text-base text-left text-gray-500 dark:text-gray-400">
						<thead class="text-base text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
								<th colSpan={3} scope="col" class="px-6 py-3" align="center">
									ELIMINAR EMPLEADO
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
								<td colSpan={1} scope="row" class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
									2154789635
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
								<td colSpan={1} class="px-6 py-4 text-right">
									<a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">ELIMINAR</a>
								</td>
							</tr>
							<tr class="bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-600">
                            <td colSpan={1} class="w-4 p-4">
									ADMINISTRADOR3
								</td>
								<td colSpan={1}  scope="row" class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
									7896541235
								</td>
								<td colSpan={1}  class="px-6 py-4 text-right">
									<a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">ELIMINAR</a>
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