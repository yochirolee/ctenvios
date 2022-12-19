import { React } from "react";
import { useQuery } from "react-query";
import { fetchProductById } from "../../Helpers/Products/fetchProductById";
import { SearchForm } from "./Forms/SearchForm";
import { HBLDetails } from "./HBLDetails/HBLDetails";

export const HblSearchResult = ({ search, setSearch }) => {
	const {
		isLoading,
		isError,
		data: Product,
		error,
	} = useQuery(["product", search], () => fetchProductById(search), {
		enabled: Boolean(search),
	});

	console.log(Product, "PRODUCT QUERY REsult");

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
			{Product ? (
				<div className=" mt-10  ">
					<p className="flex items-center ">
						Agencia:
						<span className="mx-2 p-1 text-xs bg-green-500  text-white rounded-lg">
							{Product[0].Agency}
						</span>
					</p>
					<div className="text-xs mx-4 space-y-2">
						<h3 className="text-gray-500">Cliente:</h3>
						<p>Nombre: {Product[0]?.Customer?.Name + " " + Product[0]?.Customer?.LastName}</p>
						<p>Celular: {Product[0]?.Customer?.Mobile}</p>
					</div>
					<div className="text-xs mx-4 space-y-2">
						<h3 className="text-gray-500">Destinatario:</h3>
						<p>{Product[0]?.Reciever?.Name + " " + Product[0]?.Reciever?.LastName}</p>
						<p>{Product[0]?.Receiver?.Phone}</p>
						<p>Celular: {Product[0]?.Reciever?.Mobile}</p>
					</div>

					<HBLDetails product={Product[0]} />
				</div>
			) : (
				<div className="mx-auto text-xs">Ingrese su Numero de Factura o HBL</div>
			)}
		</div>
	);
};
