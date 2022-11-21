import { React } from "react";
export const Heroes = () => {
	return (
		<>
			<header className="bg-white dark:bg-gray-900 mx-4">
				<div className="container flex flex-col  py-4 mx-auto space-y-6 lg:h-[32rem] lg:py-16 lg:flex-row lg:items-center">
					<div className="flex flex-col items-center w-full lg:flex-row lg:w-1/2">
						<div className="max-w-lg  lg:order-2">
							<h1 className="text-3xl font-medium tracking-wide text-gray-800 dark:text-white lg:text-4xl">
								Envios Maritimos a Cuba
							</h1>
							<p className="mt-2 text-gray-600 dark:text-gray-300">
								Contamos con mas de 15 anos de experiencia en el sector de la logistica y envios,
								con miles de clientes complacidos.
							</p>

							<div className="hidden md:block mt-8 space-y-5">
								<p className="flex items-center -mx-2 text-gray-700 dark:text-gray-200">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										className="w-6 h-6 mx-2 text-blue-500"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
									>
										<path
											stroke-linecap="round"
											stroke-linejoin="round"
											stroke-width="2"
											d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
										/>
									</svg>

									<span className="mx-2">Profesionalidad</span>
								</p>

								<p className="flex items-center -mx-2 text-gray-700 dark:text-gray-200">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										className="w-6 h-6 mx-2 text-blue-500"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
									>
										<path
											stroke-linecap="round"
											stroke-linejoin="round"
											stroke-width="2"
											d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
										/>
									</svg>

									<span className="mx-2">Seguridad</span>
								</p>

								<p className="flex items-center -mx-2 text-gray-700 dark:text-gray-200">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										className="w-6 h-6 mx-2 text-blue-500"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
									>
										<path
											stroke-linecap="round"
											stroke-linejoin="round"
											stroke-width="2"
											d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
										/>
									</svg>

									<span className="mx-2">Garantia</span>
								</p>
							</div>
							<div className="w-full mt-8 bg-transparent border rounded-md lg:max-w-sm dark:border-gray-700 focus-within:border-blue-400 focus-within:ring focus-within:ring-blue-300 dark:focus-within:border-blue-400 focus-within:ring-opacity-40">
								<form className="hidden md:flex md:flex-col  lg:flex-row">
									<input
										type="email"
										placeholder="Enter your email address"
										className="flex-1 h-10 px-4 py-2 m-1 text-gray-700 placeholder-gray-400 bg-transparent border-none appearance-none dark:text-gray-200 focus:outline-none focus:placeholder-transparent focus:ring-0"
									/>

									<button
										type="button"
										className="h-10 px-4 py-2 m-1 text-white transition-colors duration-300 transform bg-blue-500 rounded-md hover:bg-blue-400 focus:outline-none focus:bg-blue-400"
									>
										Join Us
									</button>
								</form>
							</div>
						</div>
					</div>

					<div className="flex items-center justify-center w-full h-96 lg:w-1/2">
						<img
							className="object-cover w-full h-full max-w-2xl rounded-md"
							src="cafetera.jpeg"
							alt="apple watch photo"
						/>
					</div>
				</div>
			</header>
		</>
	);
};
