import Image from "next/image";
import { React } from "react";
import { BsBox } from "react-icons/bs";
import { ProductCard } from "./ProductCard";
export const Products = () => {
	return (
		<>
			<section className="bg-white dark:bg-gray-900">
				<div className="container px-6 py-10 mx-auto">
					<h1 class="text-base lg:text-3xl font-bold text-center text-gray-800 dark:text-white">
						Nuestros Productos
					</h1>

					<p className="max-w-2xl text-xs  md:text-sm mx-auto my-2 lg:my-6 text-center text-gray-500 dark:text-gray-300">
						Enviamos Alimentos, Miscelaneas, Productos Duraderos y Medicinas.
					</p>

					<div className="flex overflow-x-scroll gap-2 md:p-4  lg:gap-8 lg:mt-8 ">
						<ProductCard />
						<ProductCard />
						<ProductCard />
						<ProductCard />
					</div>
				</div>
			</section>
		</>
	);
};
