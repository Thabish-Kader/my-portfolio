import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Cursor, Typewriter, useTypewriter } from "react-simple-typewriter";
import avatar from "../public/assets/avatar.png";
import { CircleAinmation } from "./CircleAinmation";
type Props = {};

export const Hero = (props: Props) => {
	const [text, count] = useTypewriter({
		words: [
			"Hi, names <Thabish/>",
			"Loves Tailwind",
			"Grateful to TypeScript",
			"Enjoys Next JS",
		],
		loop: true,
		delaySpeed: 2000,
	});
	return (
		<section id="hero" className="snap-center">
			<div className="flex h-screen flex-col items-center justify-center space-y-8 overflow-hidden text-center">
				<CircleAinmation />
				<div className="relative h-40 w-40 my-2">
					<Image
						src={avatar}
						alt="/avatar"
						fill
						className="object-cover rounded-full"
					/>
				</div>
				<div className="z-10">
					<h2 className="text-gray-600 text-lg tracking-[15px] uppercase font-bold">
						Web Developer
					</h2>

					<h1 className="pt-1 text-2xl text-[#64ffda] font-semibold lg:text-4xl">
						<span>{text}</span>
						{/* Make sure to add this line or else the button will jump up and down */}
						<Cursor cursorColor="#8547bf" />
					</h1>
					<div className="space-x-3 my-2">
						<Link href="#about">
							<button className="hero-btn">About</button>
						</Link>
						<Link href="#skills">
							<button className="hero-btn">Skills</button>
						</Link>
						<Link href="#projects">
							<button className="hero-btn">Projects</button>
						</Link>
						<Link href="#contact">
							<button className="hero-btn">Contact Me</button>
						</Link>
					</div>
				</div>
			</div>
		</section>
	);
};
