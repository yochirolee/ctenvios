"use client";
import { React } from "react";
import { Faq } from "../components/Faq";
import { MainCarousel } from "../components/MainCarousel";
import { Products } from "../components/Products";
import { FaFacebookSquare, FaInstagram } from "react-icons/fa";

export default function Page() {
	return (
		<>
			<MainCarousel />

			<Products />
			<h1 class="text-base font-bold mb-4 lg:text-3xl text-center text-gray-800 dark:text-white">
				Nuestras Redes Sociales
			</h1>
			<main className="hidden  bg-[url('/slider5.jpg')] relative bg-cover  bg-center bg-no-repeat   m-4   h-64   rounded-xl shadow-lg  lg:flex flex-col justify-center items-left md:items-center ">
				<div className="absolute   bg-gray-800/70  h-64 w-full rounded-xl"></div>

				<h5 className="mb-2 z-10 text-base lg:text-3xl font-bold text-white">
					Visitanos en Facebook e Instagram
				</h5>
				<p className="mb-5 z-10 text-sm text-white">
					Puedes seguirnos en nuestras redes sociales y mantenerte informado de nuestras
					ofertas,promociones y descuentos
				</p>

				<div className="items-center z-20 justify-center space-y-4 sm:flex sm:space-y-0 sm:space-x-4">
					<a
						href="https://www.facebook.com/people/CTEnvios/100087529462450/"
						target="_blank"
						className="w-full sm:w-auto border focus:ring-4 focus:outline-none bg-gray-100 focus:ring-gray-300 text-gray-800 rounded-lg inline-flex items-center justify-center px-4 py-2.5 "
					>
						<FaFacebookSquare className="mx-4 text-3xl text-blue-600" />
						<div class="text-left">
							<div class="mb-1 text-xs">Unete a nuesta familia en</div>
							<div class="-mt-1 font-sans text-blue-500 text-sm font-semibold">Facebook</div>
						</div>
					</a>
					<a
						href="https://www.instagram.com/ctenvios/"
						target="_blank"
						class="w-full sm:w-auto border focus:ring-4 focus:outline-none bg-gray-50 focus:ring-gray-300 text-gray-800 rounded-lg inline-flex items-center justify-center px-4 py-2.5 "
					>
						<FaInstagram className="mx-4 text-3xl text-pink-500" />
						<div class="text-left">
							<div class="mb-1 text-xs">Siguenos en Instagram</div>
							<div class="-mt-1 font-sans text-pink-500 text-sm font-semibold">Instagram</div>
						</div>
					</a>
				</div>
			</main>

			<div className="lg:hidden items-center mx-4 z-20 justify-center space-y-4 sm:flex sm:space-y-0 sm:space-x-4">
				<a
					href="https://www.facebook.com/people/CTEnvios/100087529462450/"
					target="_blank"
					className="w-full sm:w-auto border focus:ring-4 focus:outline-none bg-gray-100 focus:ring-gray-300 text-gray-800 rounded-lg inline-flex items-center justify-center px-4 py-2.5 "
				>
					<FaFacebookSquare className="mx-4 text-3xl text-blue-600" />
					<div class="text-left">
						<div class="mb-1 text-xs">Unete a nuesta familia en</div>
						<div class="-mt-1 font-sans text-blue-500 text-sm font-semibold">Facebook</div>
					</div>
				</a>
				<a
					href="https://www.instagram.com/ctenvios/"
					target="_blank"
					class="w-full sm:w-auto border focus:ring-4 focus:outline-none bg-gray-50 focus:ring-gray-300 text-gray-800 rounded-lg inline-flex items-center justify-center px-4 py-2.5 "
				>
					<FaInstagram className="mx-4 text-3xl text-pink-500" />
					<div class="text-left">
						<div class="mb-1 text-xs">Siguenos en Instagram</div>
						<div class="-mt-1 font-sans text-pink-500 text-sm font-semibold">Instagram</div>
					</div>
				</a>
			</div>

			<Faq />
		</>
	);
}
