import React from "react";

type Props = {};

export const Projects = (props: Props) => {
	const projects = [1, 2, 3, 4, 5, 6];
	return (
		<section
			id="projects"
			className="snap-start h-screen relative overflow-x-hidden"
		>
			<h1 className="absolute top-24 left-[40%] text-gray-500 text-2xl uppercase tracking-[15px] font-bold">
				Projects
			</h1>
			<div className="flex items-center h-full justify-center">
				<div>hello</div>
			</div>
		</section>
	);
};
