import type { AppProps } from "next/app";


function MyApp({ Component, pageProps }: AppProps) {
	return (
		// Provide the client to your App
			<Component {...pageProps} />
		
	);
}

export default MyApp;
