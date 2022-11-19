import Image from "next/image";
import React from "react";
import netflix from "../public/assets/netflix.webp";
import { motion } from "framer-motion";
import tailwind from "../public/assets/tailwind.jpg";
import firebase from "../public/assets/firebaseImg.png";
type Props = {};

export const ProjectsRow = (props: Props) => {
	return (
		<div className="w-screen flex flex-col xl:grid-cols-2 xl:grid flex-shrink-0 snap-center items-center justify-center space-y-5 space-x-5 p-20 h-screen">
			{/* <ProjectsRow /> */}
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
					className="object-cover rounded-lg"
					fill
				/>
			</motion.div>
			<div className="flex items-center justify-center flex-col space-y-2 ">
				<h4 className="text-4xl font-bold">Project 1 of 3</h4>
				<div className="flex justify-center space-x-3 items-center">
					<Image
						src={tailwind}
						alt="/"
						className="object-cover h-16 w-16 rounded-full"
					/>
					<Image
						src={firebase}
						alt="/"
						className="object-cover h-16 w-16 rounded-full"
					/>
				</div>
				<p className="text-justify ">
					Lorem ipsum dolor sit amet consectetur adipisicing elit.
					Possimus qui voluptatibus fuga minima ea quo eligendi iure
					in rerum quibusdam porro, repudiandae voluptas nobis alias
					aperiam facere ex, ipsum animi? Animi alias reprehenderit
					rerum ex quis veritatis nemo soluta magnam vel! Dicta,
					voluptate itaque
				</p>
			</div>
		</div>
	);
};
