import { React } from "react";
import { HistoryTimeLine } from "./HistoryTimeLine";
export const TrackingTimeLine = ({ itemDetails }) => {
	return (
		<>
			{itemDetails ? (
				<div className="">
					<div className="   flex flex-col  mb-4 mx-auto text-sm gap-2 ">
						<div className="flex items-center my-4 w-full max-w-xs font-bold text-gray-600 rounded-lg  dark:text-gray-400 dark:bg-gray-800">
							<div className=" text-sm font-bold flex items-center">
								{itemDetails?.HBL}
								<span className=" p-2 mx-4 bg-blue-500 text-white ring-2 ring-blue-200 shadow-md rounded-md">
									{itemDetails?.Location}
								</span>
							</div>
						</div>

						<div className="flex flex-row items-center   w-full max-w-xs text-gray-500 bg-white  dark:text-gray-400 dark:bg-gray-800">
							<div class=" text-sm font-normal mr-2"> Agencia:</div>
							<div class="inline-flex flex-shrink-0 justify-center items-center px-2 py-1 text-green-500 bg-green-100 rounded-lg dark:bg-blue-800 dark:text-blue-200">
								{itemDetails?.Agency}
							</div>
						</div>
						<HistoryTimeLine history={itemDetails?.History} />
						<p>Descripcion: {itemDetails?.Description}</p>
						<p>Provincia: {itemDetails?.Reciever?.Province}</p>
						<p>Municipio: {itemDetails?.Reciever?.Municipality}</p>
						<p>Direccion: {itemDetails?.Reciever?.Address}</p>
					</div>
					<div className="grid grid-cols-2 border-t pt-3 gap-10 justify-between text-xs">
						<div className="flex flex-col gap-2">
							<span className="font-semibold">Envia:</span>
							<div className="flex gap-2 ">
								<p>Nombre:</p>
								{itemDetails?.Customer?.Name + " " + itemDetails?.Customer?.LastName}
							</div>
							<div className="flex gap-2 ">
								<p>Movil:</p>
								{itemDetails?.Customer?.Mobile}
							</div>
						</div>

						<div className="flex flex-col gap-2 ">
							<span className="font-semibold">Recibe:</span>
							<div className="flex gap-2 ">
								<p>Nombre:</p>
								{itemDetails?.Reciever?.Name + " " + itemDetails?.Reciever?.LastName}
							</div>
							<div className="flex gap-2 ">
								<p>Movil:</p>
								{itemDetails?.Reciever?.Mobile}
							</div>
						</div>
					</div>
				</div>
			) : (
				<div className="text-center p-4 rounded-lg">
					<h3 className=" font-semibold ">Para conocer el estado de su envio</h3>
					<p className="text-sm flex flex-col">
						Introduzca el HBL de su Paquete
						<span className="font-bold text-gray-600">Ej: CTE5555555500</span>
					</p>
				</div>
			)}
		</>
	);
};
