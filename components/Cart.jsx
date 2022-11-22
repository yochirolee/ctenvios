"use client";
import { useState } from "react";
import { FiShoppingCart } from "react-icons/fi";

export const Cart = ({ value = 0 }) => {
	const [count, setCount] = useState(value);

	const onIncrement = () => {
		setCount((count) => count + 1);
	};

	return (
		<div className="flex relative pt-1" onClick={() => onIncrement()}>
			<i className=" text-base text-gray-500 cursor-pointer">
				<FiShoppingCart />
			</i>
			<span className="absolute text-center justify-center text-xs -mt-2 h-4 w-4 ml-2    text-white     rounded-full  bg-red-500">
				{count}
			</span>
		</div>
	);
};
