import React from "react";
import { motion } from "framer-motion";
type Props = {};

export const CircleAinmation = (props: Props) => {
	return (
		<motion.div className="absolute top-0 h-screen flex items-center justify-center">
			<div className=" relative flex items-center justify-center ">
				<div className="absolute h-[250px] animate-ping border-[#333333] w-[250px] rounded-full border" />
				<div className="absolute h-[300px] animate-ping w-[300px] border border-[#333333] rounded-full" />
				<div className="absolute h-[500px] animate-pulse w-[500px] border border-[#333333] rounded-full" />
				<div className="absolute h-[600px] animate-pulse w-[600px] border border-purple-500 rounded-full" />
				<div className="absolute h-[800px] animate-pulse w-[800px] border border-[#333333] rounded-full" />
			</div>
		</motion.div>
		// <motion.div className="relative flex items-center justify-center">
		// 	<div className="absolute mt-52 h-[200px] w-[200px] animate-ping rounded-full border border-[#333333]" />
		// 	<div className="absolute mt-52 h-[300px] w-[300px] animate-ping rounded-full border border-[#333333]" />
		// 	<div className="absolute mt-52 h-[500px] w-[500px] animate-ping rounded-full border border-[#333333]" />
		// 	<div className="absolute mt-52 h-[650px] w-[650px] animate-pulse rounded-full border border-[#F7AB0A] opacity-20" />
		// 	<div className="absolute mt-52 h-[800px] w-[800px] animate-pulse rounded-full border border-[#333333] " />
		// </motion.div>
	);
};
