"use-client";
import { Footer } from "flowbite-react";
import { BsFacebook, BsInstagram } from "react-icons/bs";

import { React } from "react";
export const AppFooter = () => {
	return (
		<>
			<Footer bgDark={true}>
				<div className="w-full">
					<div className="grid w-full grid-cols-2 gap-8 py-8 px-6 md:grid-cols-4">
						<div>
							<Footer.Title title="Company" />
							<Footer.LinkGroup col={true}>
								<Footer.Link href="#">About</Footer.Link>
								<Footer.Link href="#">Careers</Footer.Link>
								<Footer.Link href="#">Brand Center</Footer.Link>
								<Footer.Link href="#">Blog</Footer.Link>
							</Footer.LinkGroup>
						</div>
						<div>
							<Footer.Title title="help center" />
							<Footer.LinkGroup col={true}>
								<Footer.Link href="#">Instagram</Footer.Link>
								<Footer.Link href="#">Facebook</Footer.Link>
								<Footer.Link href="#">Contact Us</Footer.Link>
							</Footer.LinkGroup>
						</div>
						<div>
							<Footer.Title title="legal" />
							<Footer.LinkGroup col={true}>
								<Footer.Link href="#">Privacy Policy</Footer.Link>
								<Footer.Link href="#">Licensing</Footer.Link>
								<Footer.Link href="#">Terms & Conditions</Footer.Link>
							</Footer.LinkGroup>
						</div>
					</div>
					<div className="w-full bg-gray-700 py-6 px-4 sm:flex sm:items-center sm:justify-between">
						<Footer.Copyright href="#" by="CTEnvios" year={2022} />
						<div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
							<Footer.Icon href="#" icon={BsFacebook} />
							<Footer.Icon href="#" icon={BsInstagram} />
						</div>
					</div>
				</div>
			</Footer>
		</>
	);
};
