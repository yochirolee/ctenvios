import { React } from "react";
import { BsBoxSeam } from "react-icons/bs";
import { Heroes } from "../components/heroes";
import { MainCarousel } from "../components/MainCarousel";
import { Products } from "../components/Products";
export default function Page() {
	return (
		<>
			<Heroes />
			<h2 class="text-3xl font-semibold text-center text-gray-800 capitalize lg:text-4xl dark:text-white">
				Nuestros Productos
			</h2>

			<div className="flex  gap-4 overflow-x-scroll">
				<div class="flex max-w-md shrink-0 overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
					<div class="min-w-1/3  bg-cover">
						<img
							class="object-contain object-center w-full h-48 mx-auto rounded-lg"
							src="cafetera.jpeg"
							alt="avatar"
						/>
					</div>

					<div class="w-2/3 p-4 md:p-4">
						<h1 class="text-2xl font-bold text-gray-800 dark:text-white">Cafetera</h1>

						<p class="mt-2 text-sm text-gray-600 dark:text-gray-400">Cafetera expreso de 4 Tazas</p>

						<div class="flex mt-2 item-center">
							<span>Puesta en Cuba</span>
						</div>

						<div class="flex justify-between mt-3 item-center">
							<h1 class="text-lg font-bold text-gray-700 dark:text-gray-200 md:text-xl">$220</h1>
							<button class="px-2 py-1 text-xs font-bold text-white uppercase transition-colors duration-300 transform bg-gray-800 rounded dark:bg-gray-700 hover:bg-gray-700 dark:hover:bg-gray-600 focus:outline-none focus:bg-gray-700 dark:focus:bg-gray-600">
								Ver mas
							</button>
						</div>
					</div>
				</div>
				<div class="flex max-w-md shrink-0 overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
					<div class="w-1/3 bg-cover">
						<img
							class="object-contain object-center w-full h-48 mx-auto rounded-lg"
							src="cafetera.jpeg"
							alt="avatar"
						/>
					</div>

					<div class="w-2/3 p-4 md:p-4">
						<h1 class="text-2xl font-bold text-gray-800 dark:text-white">Cafetera</h1>

						<p class="mt-2 text-sm text-gray-600 dark:text-gray-400">Cafetera expreso de 4 Tazas</p>

						<div class="flex mt-2 item-center">
							<span>Puesta en Cuba</span>
						</div>

						<div class="flex justify-between mt-3 item-center">
							<h1 class="text-lg font-bold text-gray-700 dark:text-gray-200 md:text-xl">$220</h1>
							<button class="px-2 py-1 text-xs font-bold text-white uppercase transition-colors duration-300 transform bg-gray-800 rounded dark:bg-gray-700 hover:bg-gray-700 dark:hover:bg-gray-600 focus:outline-none focus:bg-gray-700 dark:focus:bg-gray-600">
								Ver mas
							</button>
						</div>
					</div>
				</div>
				<div class="flex max-w-md shrink-0 overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
					<div class="w-1/3 bg-cover">
						<img
							class="object-contain object-center w-full h-48 mx-auto rounded-lg"
							src="cafetera.jpeg"
							alt="avatar"
						/>
					</div>

					<div class="w-2/3 p-4 md:p-4">
						<h1 class="text-2xl font-bold text-gray-800 dark:text-white">Cafetera</h1>

						<p class="mt-2 text-sm text-gray-600 dark:text-gray-400">Cafetera expreso de 4 Tazas</p>

						<div class="flex mt-2 item-center">
							<span>Puesta en Cuba</span>
						</div>

						<div class="flex justify-between mt-3 item-center">
							<h1 class="text-lg font-bold text-gray-700 dark:text-gray-200 md:text-xl">$220</h1>
							<button class="px-2 py-1 text-xs font-bold text-white uppercase transition-colors duration-300 transform bg-gray-800 rounded dark:bg-gray-700 hover:bg-gray-700 dark:hover:bg-gray-600 focus:outline-none focus:bg-gray-700 dark:focus:bg-gray-600">
								Ver mas
							</button>
						</div>
					</div>
				</div>
				<div class="flex max-w-md shrink-0 overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
					<div class="w-1/3 bg-cover">
						<img
							class="object-contain object-center w-full h-48 mx-auto rounded-lg"
							src="cafetera.jpeg"
							alt="avatar"
						/>
					</div>

					<div class="w-2/3 p-4 md:p-4">
						<h1 class="text-2xl font-bold text-gray-800 dark:text-white">Cafetera</h1>

						<p class="mt-2 text-sm text-gray-600 dark:text-gray-400">Cafetera expreso de 4 Tazas</p>

						<div class="flex mt-2 item-center">
							<span>Puesta en Cuba</span>
						</div>

						<div class="flex justify-between mt-3 item-center">
							<h1 class="text-lg font-bold text-gray-700 dark:text-gray-200 md:text-xl">$220</h1>
							<button class="px-2 py-1 text-xs font-bold text-white uppercase transition-colors duration-300 transform bg-gray-800 rounded dark:bg-gray-700 hover:bg-gray-700 dark:hover:bg-gray-600 focus:outline-none focus:bg-gray-700 dark:focus:bg-gray-600">
								Ver mas
							</button>
						</div>
					</div>
				</div>
			</div>

			<section class="bg-white dark:bg-gray-900">
				<div class="container px-6 py-8 mx-auto">
					<h2 class="text-3xl font-semibold text-center text-gray-800 capitalize lg:text-4xl dark:text-white">
						Nuestros Productos
					</h2>

					<div class="grid grid-cols-2  gap-8 mt-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
						<div class="min-w-1/2 max-w-xs text-center">
							<img
								class="object-cover object-center w-full h-48 mx-auto rounded-lg"
								src="cafetera.jpeg"
								alt="avatar"
							/>

							<div class="mt-2">
								<h3 class="text-lg font-medium text-gray-700 dark:text-gray-200">
									Cafetera Electrica
								</h3>
								<span class="mt-1 font-medium text-gray-600 dark:text-gray-300">$57</span>
							</div>
						</div>

						<div class="w-full max-w-xs text-center">
							<img
								class="object-cover object-center w-full h-48 mx-auto rounded-lg"
								src="licuadora.jpeg"
								alt="avatar"
							/>

							<div class="mt-2">
								<h3 class="text-lg font-medium text-gray-700 dark:text-gray-200">Licuadora</h3>
								<span class="mt-1 font-medium text-gray-600 dark:text-gray-300">$75</span>
							</div>
						</div>

						<div class="w-full max-w-xs text-center">
							<img
								class="object-cover object-center w-full h-48 mx-auto rounded-lg"
								src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=731&q=80"
								alt="avatar"
							/>

							<div class="mt-2">
								<h3 class="text-lg font-medium text-gray-700 dark:text-gray-200">Steve Ben</h3>
								<span class="mt-1 font-medium text-gray-600 dark:text-gray-300">UI/UX</span>
							</div>
						</div>

						<div class="w-full max-w-xs text-center">
							<img
								class="object-cover object-center w-full h-48 mx-auto rounded-lg"
								src="cafetera.jpeg"
								alt="avatar"
							/>

							<div class="mt-2">
								<h3 class="text-lg font-medium text-gray-700 dark:text-gray-200">
									Patterson Johnson
								</h3>
								<span class="mt-1 font-medium text-gray-600 dark:text-gray-300">
									Software Engineer
								</span>
							</div>
						</div>
					</div>
				</div>
			</section>
			<Products />
		</>
	);
}
