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
				<div className="flex  gap-4 items-center">
					<span className="text-xs text-center px-2 ring ring-gray-100 bg-gray-500 text-white p-1 rounded-lg ">
						Precio: $ 11
					</span>
					<button
						type="button"
						class="inline-flex relative items-center  text-lg font-medium text-center text-gray-600   focus:outline-none focus:ring-blue-300 "
					>
						<FiShoppingCart />
						<span class="sr-only">Cart</span>
						<div class="inline-flex absolute -top-3 -right-4 justify-center items-center w-5 h-5 text-xs font-bold text-white bg-red-500 rounded-full border-2 border-red-50 dark:border-gray-900">
							10
						</div>
					</button>
				</div>
			</div>
		</div>
	);
};
