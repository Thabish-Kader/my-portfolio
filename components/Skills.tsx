import React from "react";
import { SkillRow } from "./SkillRow";
import { motion } from "framer-motion";
import typescript from "../public/assets/typescript.svg";
import nextImg from "../public/assets/nextjs.png";
import prismaImg from "../public/assets/prismaImg.png";
import firebaseImg from "../public/assets/firebaseImg.png";
import trpcImg from "../public/assets/trpcImg.svg";
import tailwind from "../public/assets/tailwind.jpg";
import git from "../public/assets/git.png";
import sanity from "../public/assets/sanity.png";
import graphql from "../public/assets/graphql.png";
import react from "../public/assets/react.png";
import node from "../public/assets/node.png";
import Image from "next/image";
type Props = {};

export const Skills = (props: Props) => {
	return (
		<section
			id="skills"
			className="h-screen relative  snap-start overflow-x-hidden"
		>
			<motion.div
				initial={{ opacity: 0 }}
				whileInView={{ opacity: 1 }}
				transition={{ duration: 3 }}
				viewport={{ once: true }}
				className="relative z-10 flex max-w-lg sm:max-w-xl md:max-w-5xl mx-auto flex-col h-full items-center justify-center"
			>
				<div className=" absolute top-[20%] animate-pulse max-w-xl sm:max-w-fit flex flex-col justify-center items-center space-y-3">
					<h1 className="text-[#64ffda] text-4xl uppercase tracking-[15px] font-bold">
						Skills
					</h1>
					<h2 className="text-gray-500 text-xl sm:text-2xl uppercase tracking-[15px] font-bold mb-20">
						Tools and Stacks I utilize
					</h2>
				</div>
				{/* <div className="flex flex-row flex-wrap justify-center items-center space-x-3 "> */}
				<div className="grid grid-cols-4 sm:flex  gap-2 space-x-3 ">
					<SkillRow
						image={typescript}
						slide="left"
						name="TypeScript"
					/>
					<SkillRow image={nextImg} slide="left" name="Next Js" />
					<SkillRow image={react} name="React" />
					<SkillRow image={node} name="Node JS" />
					<SkillRow image={tailwind} name="Taillwind" />
					<SkillRow image={prismaImg} slide="left" name="Prisma" />
					<SkillRow image={graphql} name="GraphQl" />
					<SkillRow
						image={firebaseImg}
						slide="left"
						name="Firebase"
					/>
					<SkillRow image={trpcImg} name="tRPC" />
					<SkillRow image={git} name="Git" />
					<SkillRow image={sanity} name="Sanity" />
				</div>
			</motion.div>

			<div className="absolute top-[0] left-10 h-screen  lg:border border-gray-500"></div>
			<p className="hidden py-1 lg:block absolute top-[50%] left-[-27px] bg-[#0a192f] uppercase tracking-widest text-gray-500  rotate-90">
				Tools i love
			</p>
			<div className=" absolute flex space-y-4 flex-col bottom-10 left-[50%] ">
				<p className="tracking-widest text-gray-500">SCROLL</p>
				<h1 className="animate-pulse text-[#64ffda] text-xl rotate-90">
					{"-->"}
				</h1>
			</div>
		</section>
	);
};
