import axios from "axios";

export const fetchInvoicesFromViewsByInvoiceId = async (InvoiceId) => {
	const { data } = await axios.get("https://caribe-cargo-api.vercel.app/api/items/" + InvoiceId);
    console.log(data.data,"FETCHING DATA")
	return data.data;
};
