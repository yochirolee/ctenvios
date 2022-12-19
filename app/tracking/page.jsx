"use client";
import { useState } from "react";
import { HblSearchResult } from "../../components/Tracking/HblSearchResult";
import { InvoiceSearchResult } from "../../components/Tracking/InvoiceSearchResult";

export default function Tracking() {
	const [search, setSearch] = useState(undefined);
	return (
		<>
			{search && search?.length > 5 ? (
				<HblSearchResult search={search} setSearch={setSearch} />
			) : (
				<InvoiceSearchResult search={search} setSearch={setSearch} />
			)}
		</>
	);
}
