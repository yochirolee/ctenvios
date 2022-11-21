import { FiShoppingCart } from "react-icons/fi";
export const ProductCard = ({ product }) => {
	return (
		<div className="card flex flex-col items-center mt-4 shadow-md shrink-0  rounded-lg p-4 w-1/2 lg:w-1/6">
			<div className=" -mt-8 ">
				<img alt="img" className="object-contain h-28 w-28" src="/box.png"></img>
			</div>

			<div className="flex flex-col  items-center">
				<span className="mx-auto text-center  text-slate-600 text-sm mb-2">
					Caja de Miscelaneas
				</span>
				<span className="text-center text-xs mb-3 text-slate-500">Max 6.6 lbs</span>
				<div className="flex flex-col gap-4 items-center">
					<span className="text-xs text-center px-2 ring ring-gray-100 bg-gray-500 text-white p-1 rounded-lg ">
						Precio: $ 11
					</span>
					<button
						type="button"
						class="inline-flex relative items-center p-3 text-lg font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
					>
						<FiShoppingCart />
						<span class="sr-only">Cart</span>
						<div class="inline-flex absolute -top-2 -right-2 justify-center items-center w-6 h-6 text-xs font-bold text-white bg-red-500 rounded-full border-2 border-white dark:border-gray-900">
							0
						</div>
					</button>
				</div>
			</div>
		</div>
	);
};
