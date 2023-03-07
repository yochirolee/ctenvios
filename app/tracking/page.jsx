"use client";
import { useState } from "react";
import { SearchResult } from "../../components/searchResult";
import { SearchResultSkeleton } from "../../components/searchResultSkeleton";
import { SearchForm } from "../../components/Tracking/Forms/SearchForm";
import { InvoiceSearchResult } from "../../components/Tracking/InvoiceSearchResult";
import { useFetchByInvoiceOrHBL } from "../../Helpers/useFetchByInvoiceOrHBL";

export default function Tracking() {
	const [search, setSearch] = useState(undefined);
	const { data: searchResult, isLoadingSearch } = useFetchByInvoiceOrHBL(search);
	return (
		<>
			<div className="mx-auto py-4">
				<SearchForm setSearch={setSearch} isSearching={isLoadingSearch} />
			</div>
			{isLoadingSearch ? (
				<SearchResultSkeleton />
			) : (
				<SearchResult selectedProductDetails={searchResult} setSearch={setSearch} />
			)}
		</>
	);
}
