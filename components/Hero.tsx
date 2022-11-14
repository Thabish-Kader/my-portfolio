import React from "react";
import { Typewriter, useTypewriter } from "react-simple-typewriter";
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
			<div className="flex flex-col overflow-hidden text-center items-center h-screen justify-center">
				<CircleAinmation />
				<h1>
					<span>{text}</span>
				</h1>
			</div>
		</section>
	);
};
