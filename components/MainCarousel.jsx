"use client";
import { React } from "react";
import { Carousel } from "flowbite-react";
export const MainCarousel = () => {
	return (
		<div className="px-4 h-56 sm:h-64 xl:h-80 2xl:h-96 ">
			<Carousel slideInterval={5000}>
				<div className="bg-[url('/slider4.jpg')] flex   bg-cover bg-center bg-no-repeat p-4 lg:p-25 text-white  h-full w-full">
					<div className="flex flex-col p-10 m-10 rounded-lg  justify-center lg:pl-20 lg:w-1/3 lg:gap-4 bg-gray-700/40 lg:bg-transparent">
						<h1 className="text-base lg:text-3xl  font-bold">CTEnvios</h1>
						<h3 className="text-xs lg:text-base">
							Empresa de Logística con más de 10 años de experiencia en envíos desde Estados Unidos
							a Latinoamérica y el Caribe
						</h3>
					</div>
				</div>
			</Carousel>
		</div>
	);
};
