"use client";
import Image from "next/image";
import { Cart } from "./Cart";
export const ProductCard = ({ product }) => {
	const { name, price, image, description, category, weight } = product;

	return (
		<div className="card  shadow-md shrink-0  rounded-lg p-4 w-1/3 lg:w-1/6">
			<div className="flex flex-col  items-center">
				<div className=" -mt-8">
					<Image alt="box" className="object-contain" src={image} height={150} width={150}></Image>
				</div>
				<span className="mx-auto text-center  text-slate-600 text-sm mb-2">{name}</span>
				<span className="text-center text-xs mb-3 text-slate-500">${weight} Lbs</span>
				<div className="flex gap-4 items-center">
					<span className="text-xs text-center ring ring-blue-100 bg-blue-500 text-white p-1 rounded-lg ">
						${price}
					</span>
					<Cart value={0} />
				</div>
			</div>
		</div>
	);
};
