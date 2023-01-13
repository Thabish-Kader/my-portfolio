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
	bannerImg: StaticImageData;
	projectTitle: string;
	stack1?: StaticImageData;
	stack2?: StaticImageData;
	stack3?: StaticImageData;
	stack4?: StaticImageData;
	stack5?: StaticImageData;
	projectDescription: string;
	link: string;
	code: string;
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
					src={props.bannerImg}
					alt=""
					className="object-cover rounded-lg"
					fill
				/>
			</motion.div>
			<div className="flex items-center justify-center flex-col space-y-2 ">
				<h4 className="text-4xl font-bold">{props.projectTitle}</h4>
				<div className="flex justify-center space-x-3 items-center">
					<Image
						src={props.stack1 as StaticImageData}
						alt="/"
						className="object-cover h-12 w-12 rounded-full"
					/>
					<Image
						src={props.stack2 as StaticImageData}
						alt="/"
						className="object-cover h-12 w-12 rounded-full"
					/>
					<Image
						src={props.stack3 as StaticImageData}
						alt="/"
						className="object-cover h-12 w-12 rounded-full"
					/>
					{props.stack4 && (
						<Image
							src={props.stack4 as StaticImageData}
							alt="/"
							className="object-cover h-12 w-12 rounded-full"
						/>
					)}
					{props.stack5 && (
						<Image
							src={props.stack5 as StaticImageData}
							alt="/"
							className="object-contain h-12 w-12 rounded-full"
						/>
					)}
				</div>

				<p className="text-justify ">{props.projectDescription}</p>
				<div className="relative flex justify-start items-center space-x-4">
					<Link href={props.link}>
						<div className="flex flex-col items-center justify-center cursor-pointer group hover:scale-125 duration-500 ">
							<GiDirectionSign
								className="group-hover:text-orange-500"
								size={50}
							/>
							<p className="group-hover:text-orange-500">Demo</p>
						</div>
					</Link>
					<Link href={props.code}>
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
