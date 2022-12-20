import { React, useState } from "react";
import { Cart } from "../components/Cart";
import { AiOutlineUser } from "react-icons/ai";
import Image from "next/image";
import Link from "next/link";

export const AppNavbar = () => {
	const [isOpen, setIsOpen] = useState(false);
	return (
		<nav className="relative bg-white mt-4 dark:bg-gray-800">
			<div className="container px-6 py-4 mx-auto md:flex md:justify-between md:items-center">
				<div className="flex  justify-between">
					<a href="https://ctenvios.com" className="flex items-center mb-4 sm:mb-0">
						<img src="ctelogo.png" className="mr-3 h-8" alt="Logo" />
					</a>

					<div className="flex lg:hidden">
						<div className="flex flex-row gap-4 items-center justify-center ">
							<Cart />
							<AiOutlineUser className="text-xl text-gray-500" />
						</div>
						<button
							type="button"
							className="text-gray-500 pl-3 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400"
							aria-label="toggle menu"
							onClick={() => setIsOpen(!isOpen)}
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="w-6 h-6"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
								strokeWidth="2"
							>
								<path strokeLinecap="round" strokeLinejoin="round" d="M4 8h16M4 16h16" />
							</svg>

							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="w-6 h-6 hidden"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
								stroke-width="2"
							>
								<path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
							</svg>
						</button>
					</div>
				</div>

				<div
					className={`${
						isOpen ? "block" : "hidden"
					} absolute   inset-x-0 z-20 w-full px-6 py-4 transition-all duration-300 ease-in-out bg-white dark:bg-gray-800 md:mt-0 md:p-0 md:top-0 md:relative md:bg-transparent md:w-auto md:opacity-100 md:translate-x-0 md:flex md:items-center`}
				>
					<div className="flex flex-col md:flex-row md:mx-6">
						<Link
							className="my-2 text-gray-700 transition-colors duration-300 transform dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 md:mx-4 md:my-0"
							href="/"
							onClick={() => {
								setIsOpen(!isOpen);
							}}
						>
							Inicio
						</Link>
						<a
							className="my-2 text-gray-700 transition-colors duration-300 transform dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 md:mx-4 md:my-0"
							href="#"
						>
							Shop
						</a>
						<a
							className="my-2 text-gray-700 transition-colors duration-300 transform dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 md:mx-4 md:my-0"
							href="#"
						>
							Contacto
						</a>
						<Link
							className="my-2 text-gray-700 transition-colors duration-300 transform dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 md:mx-4 md:my-0"
							href="tracking"
							onClick={() => {
								setIsOpen(!isOpen);
							}}
						>
							Tracking
						</Link>
						<a
							className="my-2 text-gray-700 transition-colors duration-300 transform dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 md:mx-4 md:my-0"
							href="#"
						>
							Quienes Somos
						</a>
					</div>

					<div className="hidden lg:flex lg:flex-row gap-4 items-center justify-center ">
						<Cart />
						<AiOutlineUser className="text-xl text-gray-500" />
					</div>
				</div>
			</div>
		</nav>
	);
};
