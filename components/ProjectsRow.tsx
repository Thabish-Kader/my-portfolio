import Image from "next/image";
import React from "react";
import netflix from "../public/assets/netflix.webp";

type Props = {};

export const ProjectsRow = (props: Props) => {
	return (
		<div className="grid md:grid-cols-2 h-full gap-2 md:max-w-7xl ">
			{/* image */}
			<div className="relative mx-auto h-[300px] w-[400px] md:h-[400px] md:w-[500px] ">
				<Image
					src={netflix}
					alt="/"
					fill
					className="object-cover rounded-lg"
				/>
			</div>
			{/* info */}
			<div className=" space-y-2 flex flex-col items-center justify-center">
				<h1>Netflix App</h1>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit.
					Alias quos, repudiandae esse distinctio accusantium
					accusamus vitae tempora velit odit explicabo similique eaque
					autem cupiditate expedita doloribus excepturi modi molestias
					ullam? Autem deserunt, architecto alias vitae blanditiis
					sint aut quo libero beatae error praesentium delectus optio
					voluptatem possimus eligendi earum totam temporibus enim
					numquam placeat hic? Eligendi perspiciatis inventore
					praesentium nemo.{" "}
				</p>
			</div>
		</div>
	);
};
