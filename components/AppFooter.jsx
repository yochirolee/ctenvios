"use-client";
import { Footer } from "flowbite-react";
import { BsFacebook, BsInstagram } from "react-icons/bs";

import { React } from "react";
export const AppFooter = () => {
	return (
		<>
			<footer className="p-4 bg-white rounded-lg  md:px-6 md:py-8 dark:bg-gray-900">
				<div className="sm:flex sm:items-center sm:justify-between">
			
					<ul className="flex flex-wrap items-center mb-6 text-sm text-gray-500 sm:mb-0 dark:text-gray-400">
						<li>
							<a href="#" className="mr-4 hover:underline md:mr-6 ">
								About
							</a>
						</li>
						<li>
							<a href="#" className="mr-4 hover:underline md:mr-6">
								Privacy Policy
							</a>
						</li>
						<li>
							<a href="#" className="mr-4 hover:underline md:mr-6 ">
								Licensing
							</a>
						</li>
						<li>
							<a href="#" className="hover:underline">
								Contact
							</a>
						</li>
					</ul>
				</div>
				<hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
				<span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
					© 2022
					<a href="https://ctenvios.com" className="hover:underline">
						CTEnvios™
					</a>
					. All Rights Reserved.
				</span>
			</footer>
		</>
	);
};
