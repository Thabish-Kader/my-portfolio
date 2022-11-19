import Image, { StaticImageData } from "next/image";
import React from "react";
import netflix from "../public/assets/netflix.png";
import { motion } from "framer-motion";
import tailwind from "../public/assets/tailwind.jpg";
import firebase from "../public/assets/firebaseImg.png";
import { GiDirectionSign } from "react-icons/gi";
import { GrGithub } from "react-icons/gr";
import Link from "next/link";
type Props = {
	// bannerImg: StaticImageData;
	// projectTitle: string;
	// stack1?: StaticImageData;
	// stack2?: StaticImageData;
	// stack3?: StaticImageData;
	// stack4?: StaticImageData;
	// stack5?: StaticImageData;
	// projectDescription:string;
};

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
				<div className="relative flex justify-start items-center space-x-4">
					<Link href="https://github.com/Thabish-Kader/Netflix-UI">
						<div className="flex flex-col items-center justify-center cursor-pointer group hover:scale-125 duration-500 ">
							<GiDirectionSign
								className="group-hover:text-orange-500"
								size={50}
							/>
							<p className="group-hover:text-orange-500">Demo</p>
						</div>
					</Link>
					<Link href="https://github.com/Thabish-Kader/Netflix-UI">
						<div className="flex flex-col items-center justify-center cursor-pointer group hover:scale-125 duration-500 ">
							<GrGithub
								className="group-hover:text-purple-500"
								size={50}
							/>
							<p className="group-hover:text-purple-500">Code</p>
						</div>
					</Link>
				</div>
			</div>
		</div>
	);
};
