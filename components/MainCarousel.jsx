"use client";
import { React } from "react";
import { Carousel } from "flowbite-react";
export const MainCarousel = () => {
	return (
		<div className="h-56 sm:h-64 xl:h-80 2xl:h-96  ">
			<Carousel slideInterval={5000}>
				<img src="Slider1.jpg" alt="..." className="object-scale-down h-screen w-screen" />
				<img src="https://flowbite.com/docs/images/carousel/carousel-2.svg" alt="..." />
				<img src="https://flowbite.com/docs/images/carousel/carousel-3.svg" alt="..." />
				<img src="https://flowbite.com/docs/images/carousel/carousel-4.svg" alt="..." />
				<img src="https://flowbite.com/docs/images/carousel/carousel-5.svg" alt="..." />
			</Carousel>
		</div>
	);
};
