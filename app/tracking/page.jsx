"use client";
import { useState } from "react";
import { TrackingSearchForm } from "../../components/Tracking/Forms/TrackingSearchForm";
import { HistoryTimeLine } from "../../components/Tracking/TimeLine/HistoryTimeLine";
import { TrackingTimeLine } from "../../components/Tracking/TimeLine/TrackingTimeLine";

export default function Tracking() {
	const [item, setItem] = useState(null);
	const [itemDetails, setItemDetails] = useState(null);

	return (
		<div className="flex justify-center border">
			<div className="h-screen  lg:w-1/2 ">
				<TrackingSearchForm setItem={setItem} setItemDetails={setItemDetails} />
				<TrackingTimeLine item={item} itemDetails={itemDetails} />{" "}
			</div>
		</div>
	);
}
