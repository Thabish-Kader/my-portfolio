import React from "react";
import { SkillRow } from "../components/SkillRow";
import { motion } from "framer-motion";
import typescript from "../public/assets/typescript.svg";
import nextImg from "../public/assets/nextjs.png";
import prismaImg from "../public/assets/prismaImg.png";
import firebaseImg from "../public/assets/firebaseImg.png";
import trpcImg from "../public/assets/trpcImg.svg";
import tailwind from "../public/assets/tailwind.jpg";
import git from "../public/assets/git.png";
import sanity from "../public/assets/sanity.png";
import t3 from "../public/assets/t3.png";
import Image from "next/image";
type Props = {};

export const Skills = (props: Props) => {
	return (
		<section id="skills" className="h-screen  snap-start overflow-x-hidden">
			<motion.div
				initial={{ opacity: 0 }}
				whileInView={{ opacity: 1 }}
				transition={{ duration: 3 }}
				viewport={{ once: true }}
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
				<div className="flex flex-wrap justify-center items-center space-x-3 ">
					<SkillRow
						image={typescript}
						slide="left"
						name="TypeScript"
					/>
					<SkillRow image={nextImg} slide="left" name="Next Js" />
					<SkillRow image={prismaImg} slide="left" name="Prisma" />
					<SkillRow
						image={firebaseImg}
						slide="left"
						name="Firebase"
					/>
					<SkillRow image={trpcImg} name="tRPC" />
					<SkillRow image={tailwind} name="Taillwind" />
					<SkillRow image={git} name="Git" />
					<SkillRow image={sanity} name="Sanity" />
					<SkillRow image={t3} name="T3" />
				</div>
			</motion.div>
		</section>
	);
};
