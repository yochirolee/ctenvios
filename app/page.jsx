import { React } from "react";
import { Faq } from "../components/Faq";
import { MainCarousel } from "../components/MainCarousel";
import { Products } from "../components/Products";
import { FaFacebookSquare, FaInstagram } from "react-icons/fa";

export default function Page() {
	return (
		<>
			<nav className=" flex ml-4 mb-4 text-xs justify-left" aria-label="Breadcrumb">
				<ol className="inline-flex justify-center items-center space-x-1 md:space-x-3">
					<li className="inline-flex items-center">
						<a
							href="#"
							className="inline-flex items-center text-xs font-medium text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
						>
							<svg
								className="w-4 h-4 mr-2"
								fill="currentColor"
								viewBox="0 0 20 20"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path>
							</svg>
							Home
						</a>
					</li>
					<li>
						<div className="flex items-center">
							<svg
								className="w-4 h-4 text-gray-400"
								fill="currentColor"
								viewBox="0 0 20 20"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									fill-rule="evenodd"
									d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
									clip-rule="evenodd"
								></path>
							</svg>
							<a
								href="#"
								className="ml-1 text-xs font-medium text-gray-700 hover:text-gray-900 md:ml-2 dark:text-gray-400 dark:hover:text-white"
							>
								Projects
							</a>
						</div>
					</li>
				</ol>
			</nav>

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
						href="#"
						className="w-full sm:w-auto border focus:ring-4 focus:outline-none bg-gray-100 focus:ring-gray-300 text-gray-800 rounded-lg inline-flex items-center justify-center px-4 py-2.5 "
					>
						<FaFacebookSquare className="mx-4 text-3xl text-blue-600" />
						<div class="text-left">
							<div class="mb-1 text-xs">Unete a nuesta familia en</div>
							<div class="-mt-1 font-sans text-blue-500 text-sm font-semibold">Facebook</div>
						</div>
					</a>
					<a
						href="#"
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
					href="#"
					className="w-full sm:w-auto border focus:ring-4 focus:outline-none bg-gray-100 focus:ring-gray-300 text-gray-800 rounded-lg inline-flex items-center justify-center px-4 py-2.5 "
				>
					<FaFacebookSquare className="mx-4 text-3xl text-blue-600" />
					<div class="text-left">
						<div class="mb-1 text-xs">Unete a nuesta familia en</div>
						<div class="-mt-1 font-sans text-blue-500 text-sm font-semibold">Facebook</div>
					</div>
				</a>
				<a
					href="#"
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
