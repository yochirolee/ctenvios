import { React } from "react";
export const TrackingTimeLine = ({ item }) => {
	return (
		<>
			{item ? (
				<ol className="relative border-l border-gray-200 dark:border-gray-700 ">
					<li className="mb-10 ml-4">
						<div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
						<time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
							{item.created_at}
						</time>
						<div className="flex flex-row gap-4 m-10">
							<h3 className="text-lg font-bold   text-center   dark:text-white">
								{item.TrackingId}
							</h3>
							<h3 className="text-sm  border items-center  px-10 text-center rounded-lg bg-blue-600 text-white  dark:text-white">
								{item.Location}
							</h3>
						</div>
					</li>
					<li className="mb-10 ml-4">
						<div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
						<time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
							{item.created_at}
						</time>
						<div className="flex flex-row gap-4 m-10">
							<h3 className="text-lg font-bold   text-center   dark:text-white">
								{item.TrackingId}
							</h3>
							<h3 className="text-sm  border items-center  px-10 text-center rounded-lg bg-green-600 text-white  dark:text-white">
								Recepcionado en Agencia
							</h3>
						</div>
					</li>
				</ol>
			) : (
				<div className="text-center border p-4 rounded-lg">
					<h3 className="text-xl font-semibold ">Para buscar el estado de su Paquete o Envio</h3>
					<p>
						Introduzca el Numero de su Paquete <span className="font-bold">Ej: CTE5555555500</span>
					</p>
				</div>
			)}
		</>
	);
};
