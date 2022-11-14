import React from "react";
import { Typewriter } from "react-simple-typewriter";
type Props = {};

export const Hero = (props: Props) => {
	return (
		<section id="hero" className="inset-0 absolute">
			<div className="flex items-center h-screen justify-center">
				<div>
					<p className="text-lg">
						<Typewriter
							words={[
								"Hi, names <Thabish/>",
								"Loves Tailwind",
								"Grateful to TypeScript",
								"Enjoys Next JS",
							]}
							loop={true}
							cursor
							cursorStyle="_"
							cursorColor="purple"
						/>
					</p>
				</div>
			</div>
		</section>
	);
};
