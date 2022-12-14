"use client";
import axios from "axios";
import { Result } from "postcss";
import { useForm } from "react-hook-form";
import { supabase } from "../../../Supabase/SupabaseClient";

export const TrackingSearchForm = ({ setItemDetails, setIsSearching }) => {
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm();

	const onSubmit = async (data) => {
		const result = await getItemDetails(data.search);

		try {
			let { data: tracking, error } = await supabase
				.from("tracking")
				.select(
					`
		*,
		trackingHistory (
		 *
		)`,
				)
				.order("CreatedAt", { foreignTable: "trackingHistory", ascending: false })
				.like("HBL", "%" + result.HBL + "%")
				.single();
			if (tracking) {
				result.History = tracking.trackingHistory;
				result.Location = tracking.Location;
				console.log(result, "RESULTTTTTTTTTTTTTTTTTTTT");
				setItemDetails(result);
				setIsSearching(false);
			} else {
				switch (result.estado) {
					case 0:
						result.Location = "En Agencia";
						break;
					case 1:
						result.Location = "En Almacen";
						break;
					case 2:
						result.Location = "En Pallet";
						break;
					case 3:
						result.Location = "Contenedor";
						break;

					default:
						break;
				}

				setItemDetails(result);
			}
		} catch (error) {
			console.log(error, "EORRRRRRRRRR");
		}
	};

	const getItemDetails = async (HBL) => {
		try {
			const { data } = await axios.get("https://caribe-cargo-api.vercel.app/api/items/" + HBL);

			return data.data;
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<form onSubmit={handleSubmit(onSubmit)} className="flex items-center my-6">
			<label for="simple-search" className="sr-only">
				Search
			</label>
			<div className="relative w-full">
				<div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
					<svg
						aria-hidden="true"
						className="w-5 h-5 text-gray-500 dark:text-gray-400"
						fill="currentColor"
						viewBox="0 0 20 20"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							fill-rule="evenodd"
							d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
							clip-rule="evenodd"
						></path>
					</svg>
				</div>
				<input
					type="text"
					id="simple-search"
					{...register("search")}
					className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
					placeholder="Search"
					required
				/>
			</div>
			<button
				type="submit"
				className="p-2.5 ml-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
			>
				<svg
					className="w-5 h-5"
					fill="none"
					stroke="currentColor"
					viewBox="0 0 24 24"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
					></path>
				</svg>
				<span className="sr-only">Search</span>
			</button>
		</form>
	);
};
