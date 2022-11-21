"use client";
import { React } from "react";
import { Carousel } from "flowbite-react";
export const MainCarousel = () => {
	return (
		<div className="px-4 h-56 sm:h-64 xl:h-80 2xl:h-96  ">
			<Carousel slideInterval={5000}>
				<div className="p-20 lg:p-25 text-white bg-blue-600 h-full w-full">
					<h1>Envios Maritimos a toda Cuba</h1>
				</div>
			</Carousel>
		</div>
	);
};
