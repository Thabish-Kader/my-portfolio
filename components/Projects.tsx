import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { ProjectsRow } from "./ProjectsRow";
import netflix from "../public/assets/netflix.webp";

type Props = {};

export const Projects = (props: Props) => {
	const projects = [1, 2, 3, 4, 5, 6];
	return (
		<motion.section
			initial={{ opacity: 0 }}
			whileInView={{ opacity: 1 }}
			transition={{ duration: 3 }}
			viewport={{ once: true }}
			id="projects"
			className="snap-start h-screen relative flex flex-col text-left md:flex-row max-w-full overflow-hidden justify-evenly mx-auto items-center z-0"
		>
			<h1 className=" absolute top-24 left-[40%] text-[#64ffda] animate-pulse text-4xl uppercase tracking-[15px] font-bold">
				Projects
			</h1>
			<div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar-hide">
				{projects.map((project, i) => (
					<div
						key={i}
						className="w-screen flex flex-col xl:grid-cols-2 xl:grid flex-shrink-0 snap-center items-center justify-center space-y-5 space-x-5 p-20 h-screen"
					>
						<motion.div
							initial={{ y: -300, opacity: 0 }}
							transition={{ duration: 1.2 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							className="mx-auto h-[400px] w-[600px] relative mt-12"
						>
							<Image
								src={netflix}
								alt=""
								className="object-cover"
								fill
							/>
						</motion.div>
						<div className="flex items-center justify-center flex-col space-y-2 ">
							<h4 className="text-4xl font-bold">
								Case study 1 of {1 + i}
							</h4>
							<p className="text-justify ">
								Lorem ipsum dolor sit amet consectetur
								adipisicing elit. Possimus qui voluptatibus fuga
								minima ea quo eligendi iure in rerum quibusdam
								porro, repudiandae voluptas nobis alias aperiam
								facere ex, ipsum animi? Animi alias
								reprehenderit rerum ex quis veritatis nemo
								soluta magnam vel! Dicta, voluptate itaque
							</p>
						</div>
					</div>
				))}
			</div>

			<div className="absolute top-[0] left-10 h-screen  lg:border border-gray-500"></div>
			<p className="hidden py-1 lg:block absolute top-[60%] left-[-100px] bg-[#0a192f] uppercase tracking-widest text-gray-500  rotate-90">
				Projects i have worked on
			</p>
		</motion.section>
	);
};
