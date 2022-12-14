"use client";
import { useState } from "react";
import { TrackingSearchForm } from "../../components/Tracking/Forms/TrackingSearchForm";

import { TrackingTimeLine } from "../../components/Tracking/TimeLine/TrackingTimeLine";

export default function Tracking() {
	const [itemDetails, setItemDetails] = useState(null);
	const [isSearching, setIsSearching] = useState(false);

	return (
		<div className="flex justify-center border">
			<div className="min-h-screen  lg:w-1/2 ">
				<TrackingSearchForm setItemDetails={setItemDetails} setIsSearching={setIsSearching} />
				<TrackingTimeLine itemDetails={itemDetails} isSearching={isSearching} />
			</div>
		</div>
	);
}
