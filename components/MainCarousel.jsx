"use client";
import { React } from "react";
import { Carousel } from "flowbite-react";
import { BsWhatsapp } from "react-icons/bs";
export const MainCarousel = () => {
	return (
		<div className="px-4 h-56 sm:h-64 xl:h-80 2xl:h-96 ">
			<Carousel slideInterval={5000}>
				<div className="bg-[url('/slider4.jpg')] flex   bg-cover bg-center bg-no-repeat p-4 lg:p-25 text-white  h-full w-full">
					<div className="hidden lg:flex lg:flex-col  rounded-lg  justify-center lg:pl-20 lg:w-1/3 lg:gap-4">
						<h1 className="text-base lg:text-3xl  font-bold">CTEnvios</h1>
						<h3 className="text-xs lg:text-base">
							Empresa de Logística con más de 10 años de experiencia en envíos desde Estados Unidos
							a Latinoamérica y el Caribe
						</h3>
						<button className="border flex items-center gap-2 flex-row p-2 rounded-lg cursor-pointer hover:text-white hover:bg-green-600 hover:ring hover:ring-green-300">
							Contactanos <BsWhatsapp className="flex text-green-400" /> (305) 851-3004
						</button>
					</div>
					<div className=" lg:hidden text-center flex flex-col mx-10  justify-end mb-6 lg:pl-20 lg:w-1/3 lg:gap-4">
						<h3 className="text-xs p-1 rounded-lg bg-gray-700/40">
							Envíos Maritimos a Latinoamérica y el Caribe
						</h3>
					</div>
				</div>
				<div className="bg-[url('/slider4.jpg')] flex   bg-cover bg-center bg-no-repeat p-4 lg:p-25 text-white  h-full w-full">
					<div className="hidden lg:flex lg:flex-col  rounded-lg  justify-center lg:pl-20 lg:w-1/3 lg:gap-4">
						<h1 className="text-base lg:text-3xl  font-bold">CTEnvios</h1>
						<h3 className="text-xs lg:text-base">
							Precios competitivos, seguridad y profesionalidad garantizadas en cada entrega
						</h3>
						<button className="border flex items-center gap-2 flex-row p-2 rounded-lg cursor-pointer">
							Contactanos <BsWhatsapp className="flex text-green-400" /> (305) 851-3004
						</button>
					</div>
					<div className=" lg:hidden text-center flex flex-col mx-10  justify-end mb-6 lg:pl-20 lg:w-1/3 lg:gap-4">
						<h3 className="text-xs p-1 rounded-lg bg-gray-700/40">
							Envíos Maritimos,tenemos los mejores precios del sector
						</h3>
					</div>
				</div>
			</Carousel>
		</div>
	);
};
