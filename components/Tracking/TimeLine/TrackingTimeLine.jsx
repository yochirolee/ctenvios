import { React } from "react";
import { HistoryTimeLine } from "./HistoryTimeLine";
export const TrackingTimeLine = ({ itemDetails, isSearching }) => {
	return (
		<>
			{itemDetails ? (
				<div>
					<div className="p-6 space-y-6">
						<div className="">
							<div className=" p-4 my-4 flex flex-col text-sm gap-2 ">
								<div className="flex items-center gap-2 border p-4 rounded-lg bg-gray-50 ">
									<span className="font-semibold">HBL:</span>
									<p className="rounded p-2 bg-blue-600 text-white">{itemDetails?.HBL}</p>
									<p className="rounded p-2  bg-green-600 text-white">{itemDetails?.Location}</p>
								</div>
								<HistoryTimeLine history={itemDetails?.History} />

								<p>Agencia: {itemDetails?.Agency}</p>
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
					</div>
				</div>
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
