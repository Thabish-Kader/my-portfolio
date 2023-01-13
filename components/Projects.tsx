import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { ProjectsRow } from "./ProjectsRow";
import { projectData } from "../projectData";

type Props = {};

export const Projects = (props: Props) => {
	// const projects = [1, 2, 3, 4, 5, 6];
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
				{projectData.map((project, index) => (
					<ProjectsRow
						key={index}
						bannerImg={project.bannerImg}
						projectTitle={project.projectTitle}
						stack1={project.stack1}
						stack2={project.stack2}
						stack3={project.stack3}
						stack4={project.stack4}
						stack5={project.stack5}
						projectDescription={project.projectDescription}
						link={project.link}
						code={project.code}
					/>
				))}
			</div>
			<div className="absolute top-[40%] right-10">
				<p className="animate-bounce">Scroll {"-->"} </p>{" "}
			</div>

			<div className="absolute top-[0] left-10 h-screen  lg:border border-gray-500"></div>
			<p className="hidden py-1 lg:block absolute top-[60%] left-[-100px] bg-[#0a192f] uppercase tracking-widest text-gray-500  rotate-90">
				Projects i have worked on
			</p>
			<div className=" absolute flex space-y-4 flex-col bottom-10 left-[50%] ">
				<p className="tracking-widest text-gray-500">SCROLL</p>
				<h1 className="animate-pulse text-[#64ffda] text-xl rotate-90">
					{"-->"}
				</h1>
			</div>
		</motion.section>
	);
};
