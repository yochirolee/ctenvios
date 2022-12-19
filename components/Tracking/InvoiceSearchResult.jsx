import { useQuery } from "react-query";
import { fetchInvoicesById } from "../../Helpers/Invoices/fetchInvoiceById";
import { SearchForm } from "./Forms/SearchForm";
import { HBLDetails } from "./HBLDetails/HBLDetails";

export const InvoiceSearchResult = ({ search, setSearch }) => {
	const {
		isLoading,
		isError,
		data: Invoice,
		error,
	} = useQuery(["invoice", search], () => fetchInvoicesById(search), {
		enabled: Boolean(search),
	});

	if (isError)
		return (
			<div className="flex px-4">
				<SearchForm setSearch={setSearch} isSearching={isLoading} />
				<div
					id="toast-simple"
					className="flex items-center p-4 space-x-4 w-full max-w-xs text-gray-500 bg-white  divide-x divide-gray-200 s dark:text-gray-400 dark:divide-gray-700 space-x dark:bg-gray-800"
					role="alert"
				>
					<span className="pl-4 text-red-400 text-xs text-center">Factura o HLB No Encontrado</span>
				</div>
			</div>
		);

	return (
		<div className="flex flex-col  justify-center lg:items-center my-4 p-4">
			<SearchForm setSearch={setSearch} isSearching={isLoading} />
			{Invoice ? (
				<div className=" mt-10  ">
					<div className="flex flex-col md:flex-row gap-4 border rounded-lg p-4 ">
						<div className="text-sm flex flex-col gap-4 justify-between">
							<p>
								Factura:
								<span className="mx-2 p-1 bg-blue-500 text-xs rounded-lg text-white">
									<a
										target="_blank"
										href={`https://systemcaribetravel.com/ordenes/factura_print.php?id=${Invoice?.InvoiceId}`}
									>
										{Invoice.InvoiceId}
									</a>
								</span>
							</p>
							<p className="flex items-center ">
								Agencia:
								<span className="mx-2 p-1 text-xs bg-green-500  text-white rounded-lg">
									{Invoice?.Agency}
								</span>
							</p>
						</div>
						<div className="text-xs mx-4 space-y-2">
							<h3 className="text-gray-500">Cliente:</h3>
							<p>Nombre: {Invoice?.Customer?.Name + " " + Invoice?.Customer?.LastName}</p>
							<p>Celular: {Invoice?.Customer?.Mobile}</p>
						</div>
						<div className="text-xs mx-4 space-y-2">
							<h3 className="text-gray-500">Destinatario:</h3>
							<p>{Invoice?.Reciever?.Name + " " + Invoice?.Reciever?.LastName}</p>
							<p>{Invoice?.Receiver?.Phone}</p>
							<p>Celular: {Invoice?.Reciever?.Mobile}</p>
						</div>
					</div>
					<div>
						{Invoice?.Products?.map((product) => (
							<HBLDetails key={product.HBL} product={product} />
						))}
					</div>
				</div>
			) : (
				<div className="mx-auto text-xs">Ingrese su Numero de Factura o HBL</div>
			)}
		</div>
	);
};
