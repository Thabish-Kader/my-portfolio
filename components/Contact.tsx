import React from "react";
import { motion } from "framer-motion";
type Props = {};

export const Contact = (props: Props) => {
	return (
		<motion.section
			initial={{ opacity: 0 }}
			whileInView={{ opacity: 1 }}
			transition={{ duration: 3 }}
			className="h-screen overflow-x-hidden snap-start relative flex flex-col items-center justify-center"
		>
			<h1 className="absolute top-24 left-[40%] text-gray-500 text-2xl uppercase tracking-[15px] font-bold">
				Contact
			</h1>
			<div>
				<h1 className="text-xl text-gray-500 tracking-widest uppercase">
					Lets Connect and build something{" "}
					<span className="text-purple-500 animate-pulse">
						amazing
					</span>
					<form className="flex mt-10 flex-col justify-center space-y-5 w-fit">
						<div className="flex justify-center space-x-2">
							<input
								placeholder="Name"
								className="contact-inputs"
								type="text"
							/>
							<input
								placeholder="Email"
								className="contact-inputs"
								type="text"
							/>
						</div>
						<input
							placeholder="Subject"
							className="contact-inputs"
							type="text"
						/>
						<textarea
							placeholder="Message"
							className="contact-inputs"
							name=""
							id=""
						/>
						<button className="bg-purple-500 animate-pulse p-2 rounded-lg text-black hover:bg-white duration-500 ">
							Submit
						</button>
					</form>
				</h1>
			</div>
		</motion.section>
	);
};
