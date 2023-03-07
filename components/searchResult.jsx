import { React } from "react";
import { ProductTrackingHistory } from "./productTrackingHistory";

export const SearchResult = ({ selectedProductDetails }) => {
	return (
		<div className="relative w-full  h-auto">
			<div className="relative bg-white rounded-lg mt-10 dark:bg-gray-700">
				{selectedProductDetails ? (
					<div className="bg-gray-50 p-4 rounded-lg py-10">
						<div className="px-6">
							<div className="  flex flex-col text-sm gap-2 mb-4 overflow-x-auto ">
								{selectedProductDetails?.Products ? (
									<div>
										{selectedProductDetails?.Products.map((product, index) => (
											<ProductTrackingHistory key={index} product={product} />
										))}
									</div>
								) : (
									<ProductTrackingHistory product={selectedProductDetails} />
								)}
							</div>
						</div>
					</div>
				) : (
					""
				)}
			</div>
		</div>
	);
};
