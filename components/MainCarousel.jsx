"use client";
import { React } from "react";
import { Carousel } from "flowbite-react";
export const MainCarousel = () => {
	return (
		<div className="px-4 h-56 sm:h-64 xl:h-80 2xl:h-96 ">
			<Carousel slideInterval={5000}>
				<div className="bg-[url('/slider4.jpg')] flex  bg-cover bg-center bg-no-repeat p-20 lg:p-25 text-white  h-full w-full"></div>
				<div className="bg-[url('/slider5.jpg')]   bg-cover bg-center bg-no-repeat p-20 lg:p-25 text-white  h-full w-full"></div>
				<div className="bg-[url('/slider2.jpg')]   bg-contain bg-center bg-no-repeat p-20 lg:p-25 text-white  h-full w-full"></div>
			</Carousel>
		</div>
	);
};
