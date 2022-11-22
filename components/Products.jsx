import { React } from "react";
import { Cart } from "./Cart";
import { ProductCard } from "./ProductCard";
import { ProductsListData } from "../data/productList";
export const Products = () => {
	return (
		<>
			<section className="bg-white dark:bg-gray-900">
				<div className="container px-6 py-10 mx-auto">
					<h1 class="text-base lg:text-3xl font-bold text-center text-gray-800 dark:text-white">
						Nuestros Productos
					</h1>
					<p className="max-w-2xl text-xs  md:text-sm mx-auto my-2 lg:my-2 text-center text-gray-500 dark:text-gray-300">
						Todos los precios de nuestros productos puestos en Cuba.
					</p>
					<div className=" flex flex-row overflow-x-scroll  gap-4 mt-4 pt-4 items-center p-2 lg:gap-10 ">
						{ProductsListData.map((product) => (
							<ProductCard key={product.id} product={product} />
						))}
					</div>

					<p className="max-w-2xl text-xs  md:text-sm mx-auto my-2 lg:my-6 text-center text-gray-500 dark:text-gray-300">
						Enviamos Alimentos, Miscelaneas, Productos Duraderos y Medicinas.
					</p>
				</div>
			</section>
		</>
	);
};
