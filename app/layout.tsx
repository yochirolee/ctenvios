"use client";
import "../styles/globals.css";
import { AppNavbar } from "../components/AppNavbar";
import { AppFooter } from "../components/AppFooter";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

const queryClient = new QueryClient();

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
					<QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
					<AppFooter />
				</div>
			</body>
		</html>
	);
}
