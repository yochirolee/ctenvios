"use client";
import { useState } from "react";
import { SearchResult } from "../../components/searchResult";
import { SearchResultSkeleton } from "../../components/searchResultSkeleton";
import { SearchForm } from "../../components/Tracking/Forms/SearchForm";
import { useFetchByInvoiceOrHBL } from "../../Helpers/useFetchByInvoiceOrHBL";

export default function Tracking() {
	const [search, setSearch] = useState(undefined);
	const { data: searchResult, isLoading: isLoadingSearch } = useFetchByInvoiceOrHBL(search);
	return (
		<>
			<div className="flex flex-col items-center  justify-center mx-auto py-4">
				<SearchForm setSearch={setSearch} isSearching={isLoadingSearch} />
				<div className=" text-xs">Ingrese su Numero de Factura o HBL</div>
			</div>
			{isLoadingSearch ? (
				<SearchResultSkeleton />
			) : (
				<SearchResult selectedProductDetails={searchResult} setSearch={setSearch} />
			)}
		</>
	);
}
