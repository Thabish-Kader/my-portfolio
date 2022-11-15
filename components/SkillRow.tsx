import React from "react";
import Image, { StaticImageData } from "next/image";
import { motion } from "framer-motion";
type Props = {
	slide?: string;
	name: string;
	image: StaticImageData;
};

export const SkillRow = ({ slide, image, name }: Props) => {
	return (
		<motion.div
			initial={{ x: slide == "left" ? -200 : 200, opacity: 0 }}
			whileInView={{ x: 0, opacity: 1 }}
			transition={{ duration: 2 }}
			className="relative group"
		>
			<div className="relative h-24 w-24 ">
				<Image
					src={image}
					alt="ts"
					fill
					className="rounded-full object-cover bg-center "
				/>
			</div>
			<div className="absolute z-10 top-0 h-24 w-24 opacity-0 rounded-full bg-white cursor-pointer group-hover:opacity-80 duration-500">
				<p className="text-black mt-10 ml-2 font-bold">{name}</p>
			</div>
		</motion.div>
	);
};
