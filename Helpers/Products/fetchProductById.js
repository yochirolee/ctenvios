import axios from "axios";

export const fetchProductById = async (HBL) => {
	let products = [];
	let { data } = await axios.get("https://caribe-cargo-api.vercel.app/api/products/" + HBL);
	products = [...products, data?.data];
	data = products;
	return data;
};
