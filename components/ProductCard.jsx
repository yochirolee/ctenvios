import { FiShoppingCart } from "react-icons/fi";
export const ProductCard = ({ product }) => {
	return (
		<div className="card  shadow-md shrink-0  rounded-lg p-4 w-1/3 lg:w-1/6">
			<div className=" -mt-8">
				<img alt="img" className="object-contain h-40 w-40" src="/box.png"></img>
			</div>

			<div className="flex flex-col  items-center">
				<span className="mx-auto text-center  text-slate-600 text-sm mb-2">
					Caja de Miscelaneas
				</span>
				<span className="text-center text-xs mb-3 text-slate-500">Max 6.6 lbs</span>
				<div className="flex gap-4 items-center">
					<span className="text-xs text-center px-2 ring ring-gray-100 bg-gray-500 text-white p-1 rounded-lg ">
						$ 11
					</span>
					<span className="relative text-center">
						<FiShoppingCart />
						<span className="-mt-2 text-center align-baseline rounded-full absolute h-4 w-4 bg-red-400 p-1 text-white text-xs">
							2
						</span>
					</span>
				</div>
			</div>
		</div>
	);
};
