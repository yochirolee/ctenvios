import { React } from "react";
import { format, parseISO } from "date-fns";

export const HistoryTimeLine = ({ history }) => {
	return (
		<div className="grid grid-cols-5 items-center">
			<ol className="relative mx-auto px-6 col-span-3 text-gray-500 border-l border-gray-200 dark:border-gray-700 dark:text-gray-400">
				{history?.map((step, index) => (
					<li class="mb-10" key={index}>
						<span class="absolute flex items-center justify-center w-8 h-8 bg-green-200 rounded-full -left-4 ring-4 ring-white dark:ring-gray-900 dark:bg-green-900">
							<svg
								aria-hidden="true"
								class="w-5 h-5 text-green-500 dark:text-green-400"
								fill="currentColor"
								viewBox="0 0 20 20"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									fill-rule="evenodd"
									d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
									clip-rule="evenodd"
								></path>
							</svg>
						</span>
						<h3 class="font-medium leading-tight">{step.Location}</h3>
						<p className="text-xs">{step?.Container}</p>
						<time className=" text-xs font-normal leading-none text-gray-400 dark:text-gray-500">
							{step.CreatedAt ? format(parseISO(step?.CreatedAt), "MMM d h:mm a") : ""}
						</time>
					</li>
				))}
			</ol>
		</div>
	);
};
