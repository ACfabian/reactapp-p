import componenteNavVar from "../Components/navVar";

export default function solicitudesReserva() {
	return (
		<div className="App bg-white">

{componenteNavVar('Inicio', 'Solicitudes de Reserva', 'Cerrar sesión')}

			<div class="max-w-4xl mx-auto p-4">

				<div class="relative overflow-x-auto shadow-md sm:rounded-lg">
					
					<table class="w-full text-base text-left text-gray-500 dark:text-gray-400">
						<thead class="text-base text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
								<th colSpan={7} scope="col" class="px-6 py-3" align="center">
									SOLICITUDES
								</th>
								
							</tr>
                            <tr>
								<th scope="col" class="px-6 py-3">
									Reserva
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
									Tiempo
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
							<tr contentEditable
								class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
								<td class="w-4 p-4">
									#1
								</td>
								<th scope="row" class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
									
								</th>
								<td class="px-6 py-4">
									User1
								</td>
								<td class="px-6 py-4">
									123ABC
								</td>
								<td class="px-6 py-4">
									
								</td>
								<td class="px-6 py-4">
                                <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">SI</a>
								</td>
								<td class="px-6 py-4 text-right">
									<a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">NO</a>
								</td>
							</tr>
							<tr
								class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
								<td class="w-4 p-4">
									#2
								</td>
								<th scope="row" class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
									
								</th>
								<td class="px-6 py-4">
									User2
								</td>
								<td class="px-6 py-4">
									456DEF
								</td>
								<td class="px-6 py-4">
									
								</td>
								<td class="px-6 py-4">
                                <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">SI</a>
								</td>
								<td class="px-6 py-4 text-right">
									<a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">NO</a>
								</td>
							</tr>
							<tr class="bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-600">
                            <td class="w-4 p-4">
									#3
								</td>
								<th scope="row" class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
									
								</th>
								<td class="px-6 py-4">
									User3
								</td>
								<td class="px-6 py-4">
									789GHI
								</td>
								<td class="px-6 py-4">
									
								</td>
								<td class="px-6 py-4">
                                <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">SI</a>
								</td>
								<td class="px-6 py-4 text-right">
									<a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">NO</a>
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