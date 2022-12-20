import { Accordion } from "flowbite-react";
import { React } from "react";

export const Faq = () => {
	return (
		<>
			<section className="bg-white dark:bg-gray-900">
				<div className="container max-w-4xl px-6 py-10 mx-auto">
					<h1 className="text-base font-bold lg:text-3xl text-center mb-3 text-gray-800 dark:text-white">
						Preguntas Frecuentes
					</h1>
					<Accordion alwaysOpen={true}>
						<Accordion.Panel>
							<Accordion.Title>Que tiempo demoran los envios</Accordion.Title>
							<Accordion.Content>
								<p className="mb-2 text-gray-500 dark:text-gray-400">
									Los envios Maritimos Generalmente demoran 40-45 dias en su entrega
								</p>
							</Accordion.Content>
						</Accordion.Panel>
						<Accordion.Panel>
							<Accordion.Title>Que es Ena?</Accordion.Title>
							<Accordion.Content>
								<p className="mb-2 text-gray-500 dark:text-gray-400">
									QUE ES UN EQUIPAJE NO ACOMPAÑADO. Aplica a los residentes de la isla viajando al
									exterior y es parte del equipaje del pasajero. Cada residente de visita en el
									exterior, tiene derecho a importar articulos por un valor aduanal de hasta 1,000
									puntos en total, los cuales incluye tanto el valor de lo que se envia, como el
									equipaje del pasajero que viajara por el aeropuerto.{" "}
								</p>
							</Accordion.Content>
						</Accordion.Panel>
					</Accordion>
				</div>
			</section>
		</>
	);
};
