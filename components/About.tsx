import Image from "next/image";
import React from "react";
import avatar from "../public/assets/avatar.png";
import { motion } from "framer-motion";
import { SkillRow } from "./SkillRow";
type Props = {};

export const About = (props: Props) => {
	return (
		<section id="about" className="relative h-screen snap-start">
			<div className="flex max-w-lg sm:max-w-xl md:max-w-5xl mx-auto flex-col h-full items-center justify-center">
				<h1 className="text-[#64ffda] animate-pulse text-4xl uppercase tracking-[15px] font-bold mb-20">
					About ME
				</h1>
				<div className="grid md:grid-cols-2 gap-2 ">
					<motion.div
						initial={{ y: 300, opacity: 0 }}
						whileInView={{ y: 0, opacity: 1 }}
						transition={{ duration: 1 }}
						className="flex justify-center items-center"
					>
						<div className="relative h-[300px] w-[200px] md:h-[500px] md:w-[400px]">
							<Image
								src={avatar}
								alt="/avatar"
								className="object-cover rounded-lg md:rounded-lg"
							/>
						</div>
					</motion.div>
					<motion.p
						initial={{ y: -300, opacity: 0 }}
						whileInView={{ y: 0, opacity: 1 }}
						transition={{ duration: 1 }}
						className="text-gray-500 text-justify"
					>
						Hi there! I’m{" "}
						<span className="text-[#64ffda]">Thabish</span>. I’m a
						passionate developer who loves building things with
						code. My first experience with programming was when I
						started my coding journey as a naive computer science
						student with a passion to learn everything I could about
						tech - code, cloud, ai, machine learning etc. And all
						the while, teaching myself data science with a dream to
						automate everything. But that soon got overshadowed by
						my desire to build web applications with{" "}
						<span className="text-[#64ffda]">
							react, tailwind and typescript
						</span>{" "}
						. Initially, I was reluctant to learn CSS because it
						seemed complicated. But ever since I started playing
						around with tailwind everything got so much more fun.
						That in combination with frameworks such as{" "}
						<span className="text-[#64ffda]">Next Js</span> . I
						found myself starting to build full-stack applications.
						Since then, I’ve been honing my skills and learning
						Typescript, and tailwind. I recently graduated from
						Middle East College with a{" "}
						<span className="text-[#64ffda]">
							Computer Science degree
						</span>
						. I’m seeking a{" "}
						<span className="text-[#64ffda]">full-time role</span>
						where I can help a company achieve their goals and put
						my skills to use.
					</motion.p>
				</div>
			</div>

			<div className="absolute top-[0] left-10 h-screen  lg:border border-gray-500"></div>
			<p className="hidden py-1 lg:block absolute top-[20%] left-[-38px] bg-[#0a192f] uppercase tracking-widest text-gray-500  rotate-90">
				get to know me
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
