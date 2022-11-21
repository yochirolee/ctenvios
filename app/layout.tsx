"use client";
import "../styles/globals.css";
import { AppNavbar } from "../components/AppNavbar";
import { AppFooter } from "../components/AppFooter";
export default function RootLayout({
	// Layouts must accept a children prop.
	// This will be populated with nested layouts or pages
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<head />
			<body>
				<div className="mx-auto  max-w-6xl">
					<AppNavbar />
					{children}
					<AppFooter />
				</div>
			</body>
		</html>
	);
}
