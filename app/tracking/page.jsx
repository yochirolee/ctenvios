"use client";
import { useState } from "react";
import { TrackingSearchForm } from "../../components/Tracking/Forms/TrackingSearchForm";
import { TrackingTimeLine } from "../../components/Tracking/TimeLine/TrackingTimeLine";

export default function Tracking() {
	const [item, setItem] = useState(null);
	return (
		<div>
			<div className="h-screen lg:w-1/2 mx-10">
				<TrackingSearchForm setItem={setItem} />
				<TrackingTimeLine item={item} />
			</div>
		</div>
	);
}
