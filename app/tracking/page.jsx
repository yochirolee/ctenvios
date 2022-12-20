"use client";
import { useState } from "react";
import { InvoiceSearchResult } from "../../components/Tracking/InvoiceSearchResult";

export default function Tracking() {
	const [search, setSearch] = useState(undefined);
	return (
		<>
			<InvoiceSearchResult search={search} setSearch={setSearch} />
		</>
	);
}
