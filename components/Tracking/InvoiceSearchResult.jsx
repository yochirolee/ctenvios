import { useQuery } from "react-query";
import { fetchInvoicesFromViewsByInvoiceId } from "../../Helpers/dbViews/fethInvoicesFromViewByInvoiceId";
import { fetchInvoicesById } from "../../Helpers/Invoices/fetchInvoiceById";
import { SearchForm } from "./Forms/SearchForm";
import { HBLDetails } from "./HBLDetails/HBLDetails";

export const InvoiceSearchResult = ({ search, setSearch }) => {
	const {
		isLoading,
		isError,
		data: Invoice,
		error,
	} = useQuery(["invoice", search], () => fetchInvoicesFromViewsByInvoiceId(search), {
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
					<div>
						{Invoice?.map((product) => (
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
