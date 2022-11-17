import React from "react";
import { motion } from "framer-motion";
type Props = {};

export const CircleAinmation = (props: Props) => {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ scale: [2, 2, 1], opacity: 1 }}
			transition={{ duration: 2 }}
			className="relative top-[15%] flex items-center justify-center"
		>
			<div className="absolute h-[250px] animate-ping border-purple-500/50 w-[250px] rounded-full border" />
			<div className="absolute h-[300px] animate-ping w-[300px] border border-purple-500/50 rounded-full" />
			<div className="absolute h-[500px] animate-pulse w-[500px] border border-purple-500/10 rounded-full" />
			<motion.div
				animate={{ rotate: 360 }}
				transition={{
					ease: "linear",
					duration: 5,
					repeat: Infinity,
				}}
				className="absolute  h-[550px] w-[550px]  rounded-lg border border-purple-500 "
			/>
			<motion.div
				animate={{ rotate: -360 }}
				transition={{
					ease: "linear",
					duration: 5,
					repeat: Infinity,
				}}
				className="absolute  h-[550px] w-[550px]  rounded-lg border border-purple-500 "
			/>
			<div className="absolute h-[770px] w-[770px] animate-pulse rounded-full border border-purple-500" />
		</motion.div>

		// <motion.div
		// 	initial={{ opacity: 0 }}
		// 	animate={{ scale: [2, 2, 1], opacity: 1 }}
		// 	transition={{ duration: 2 }}
		// 	className="relative top-[15%] flex items-center justify-center"
		// >
		// 	<div className="absolute mt-52 h-[200px] w-[200px] animate-ping rounded-full border border-[#333333]" />
		// 	<div className="absolute mt-52 h-[300px] w-[300px] animate-ping rounded-full border border-[#333333]" />
		// 	<div className="absolute mt-52 h-[500px] w-[500px] animate-ping rounded-full border border-[#333333]" />
		// 	<motion.div
		// 		animate={{ rotate: 360 }}
		// 		transition={{
		// 			ease: "linear",
		// 			duration: 5,
		// 			repeat: Infinity,
		// 		}}
		// 		className="absolute mt-52 h-[550px] w-[550px]  rounded-lg border border-[#F7AB0A] "
		// 	/>
		// 	<motion.div
		// 		animate={{ rotate: -360 }}
		// 		transition={{
		// 			ease: "linear",
		// 			duration: 5,
		// 			repeat: Infinity,
		// 		}}
		// 		className="absolute mt-52 h-[550px] w-[550px]  rounded-lg border-2 border-[#F7AB0A] "
		// 	/>
		// 	<div className="absolute mt-52 h-[770px] w-[770px] animate-pulse rounded-full border border-[#F7AB0A]" />
		// </motion.div>
	);
};
