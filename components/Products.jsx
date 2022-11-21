import Image from "next/image";
import { React } from "react";
import { BsBox } from "react-icons/bs";
export const Products = () => {
	return (
		<>
			<section className="bg-white dark:bg-gray-900">
				<div className="container px-6 py-10 mx-auto">
					<h1 className="text-xl  font-semibold text-center text-gray-800 capitalize lg:text-4xl dark:text-white">
						Nuestros Productos
					</h1>

					<p className="max-w-2xl mx-auto my-2 lg:my-6 text-center text-gray-500 dark:text-gray-300">
						Enviamos Alimentos, Miscelaneas, Productos Duraderos y Medicinas,
					</p>

					<div className="flex overflow-x-scroll gap-2  lg:gap-8 lg:mt-8 ">
						<div className="flex flex-col border  items-center p-8 transition-colors duration-300 transform cursor-pointer group  rounded-xl">
							<img
								className=" w-20 h-20 md:w-32 md:h-32 rounded-full ring-4 ring-gray-300"
								src="/cafetera.jpeg"
								alt="Cafetera"
							></img>

							<h1 className="mt-4 text-base lg:text-2xl text-center font-semibold text-gray-700  dark:text-white ">
								Caja de Miscelaneas
							</h1>

							<p className="mt-2 text-sm lg:text-xl font-bold text-gray-500  dark:text-gray-300">
								$17 usd
							</p>

							<div className="flex flex-col gap-2 mt-3 -mx-2 ">
								<span className="rounded-lg text-sm border bg-gray-600 text-white px-2 ">
									Max 6.6 Lbs
								</span>
								<span className="rounded-lg text-sm text-center p-2 border text-gray-500 px-2 hover:bg-yellow-400 hover:text-white">
									Ver Mas
								</span>
							</div>
						</div>
						<div className="flex flex-col border  items-center p-8 transition-colors duration-300 transform cursor-pointer group  rounded-xl">
							<img
								className=" w-16 h-16 md:w-32 md:h-32 rounded-full ring-4 ring-gray-300"
								src="/cafetera.jpeg"
								alt="Cafetera"
							></img>

							<h1 className="mt-4 text-base lg:text-2xl text-center font-semibold text-gray-700  dark:text-white ">
								Caja de Miscelaneas
							</h1>

							<p className="mt-2 text-sm lg:text-xl font-bold text-gray-500  dark:text-gray-300">
								$17 usd
							</p>

							<div className="flex flex-col gap-2 mt-3 -mx-2 ">
								<span className="rounded-lg text-sm border bg-gray-600 text-white px-2 ">
									Max 6.6 Lbs
								</span>
								<span className="rounded-lg text-sm text-center p-2 border text-gray-500 px-2 hover:bg-yellow-400 hover:text-white">
									Ver Mas
								</span>
							</div>
						</div>
						<div className="flex flex-col border  items-center p-8 transition-colors duration-300 transform cursor-pointer group  rounded-xl">
							<img
								className=" w-16 h-16 md:w-32 md:h-32 rounded-full ring-4 ring-gray-300"
								src="/cafetera.jpeg"
								alt="Cafetera"
							></img>

							<h1 className="mt-4 text-base lg:text-2xl text-center font-semibold text-gray-700  dark:text-white ">
								Caja de Miscelaneas
							</h1>

							<p className="mt-2 text-sm lg:text-xl font-bold text-gray-500  dark:text-gray-300">
								$17 usd
							</p>

							<div className="flex flex-col gap-2 mt-3 -mx-2 ">
								<span className="rounded-lg text-sm border bg-gray-600 text-white px-2 ">
									Max 6.6 Lbs
								</span>
								<span className="rounded-lg text-sm text-center p-2 border text-gray-500 px-2 hover:bg-yellow-400 hover:text-white">
									Ver Mas
								</span>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};
