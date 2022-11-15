import React from "react";
import { SkillRow } from "../components/SkillRow";
import { motion } from "framer-motion";
import Image from "next/image";
type Props = {};

export const Skills = (props: Props) => {
	return (
		<section id="skills" className="h-screen snap-start">
			<motion.div
				initial={{ opacity: 0 }}
				whileInView={{ opacity: 1 }}
				transition={{ duration: 3 }}
				className="relative z-10 flex max-w-lg sm:max-w-xl md:max-w-5xl mx-auto flex-col h-full items-center justify-center"
			>
				<div className=" flex flex-col justify-center items-center space-y-3">
					<h1 className="text-gray-500 text-2xl uppercase tracking-[15px] font-bold">
						Skills
					</h1>
					<h2 className="text-gray-500 text-sm uppercase tracking-[15px] font-bold mb-20">
						Tools and Languages I utilize
					</h2>
				</div>
				<div className="grid grid-cols-4 gap-5">
					<SkillRow slide="left" />
					<SkillRow slide="left" />
					<SkillRow slide="left" />
					<SkillRow slide="left" />
					<SkillRow />
					<SkillRow />
					<SkillRow />
					<SkillRow />
				</div>
			</motion.div>
		</section>
	);
};
