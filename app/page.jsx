import { React } from "react";
import { BsBoxSeam } from "react-icons/bs";
import { Heroes } from "../components/heroes";
import { MainCarousel } from "../components/MainCarousel";
import { Products } from "../components/Products";
export default function Page() {
	return (
		<>
			<MainCarousel />
			<Products />
		</>
	);
}
