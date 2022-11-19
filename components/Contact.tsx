import React from "react";
import { motion } from "framer-motion";
import { useForm, SubmitHandler } from "react-hook-form";

type Props = {};
type Inputs = {
	name: string;
	email: string;
	subject: string;
	message: string;
};

export const Contact = (props: Props) => {
	const { register, handleSubmit, reset } = useForm<Inputs>();
	const onSubmit: SubmitHandler<Inputs> = (formData) => {
		window.location.href = `mailto:kadertabish@gmail.com?subject=${formData.subject}&body=Hi, my name is${formData.name} ${formData.message} (${formData.email})`;
		reset();
	};
	return (
		<motion.section
			id="contact"
			initial={{ opacity: 0 }}
			whileInView={{ opacity: 1 }}
			transition={{ duration: 3 }}
			className="h-screen overflow-x-hidden snap-start relative flex flex-col items-center justify-center"
		>
			<h1 className="absolute top-24 left-[40%] animate-pulse  text-[#64ffda] text-4xl uppercase tracking-[15px] font-bold">
				Contact
			</h1>
			<div>
				<h1 className="text-xl text-gray-500 tracking-widest uppercase max-w-xl">
					Feel free to reach out it you're looking for a developer,
					have a question or just want to{" "}
					<span className="text-[#64ffda] animate-pulse">
						CONNECT
					</span>
					<form
						onClick={handleSubmit(onSubmit)}
						className="flex mt-10 flex-col justify-center space-y-5 w-fit"
					>
						<div className="flex justify-center space-x-2">
							<input
								{...register("name")}
								placeholder="Name"
								className="contact-inputs"
								type="text"
							/>
							<input
								{...register("email")}
								placeholder="Email"
								className="contact-inputs"
								type="email"
							/>
						</div>
						<input
							{...register("subject")}
							placeholder="Subject"
							className="contact-inputs"
							type="text"
						/>
						<textarea
							{...register("message")}
							placeholder="Message"
							className="contact-inputs"
							name=""
							id=""
						/>
						<button
							type="submit"
							className=" font-semibold uppercase animate-pulse p-2 rounded-lg text-[#64ffda] border-[#64ffda] border hover:bg-[#64ffda] hover:text-black duration-500 "
						>
							Submit
						</button>
					</form>
				</h1>
			</div>

			<div className="absolute top-[0] left-10 h-screen  lg:border border-gray-500"></div>
			<p className="hidden py-1 lg:block absolute top-[82%] left-[-26px] bg-[#0a192f] uppercase tracking-widest text-gray-500  rotate-90">
				get in touch
			</p>
			<div className=" absolute flex space-y-4  flex-col bottom-14 left-[50%] ">
				<h1 className="animate-pulse text-[#64ffda] text-xl -rotate-90">
					{"-->"}
				</h1>
				<p className="tracking-widest text-gray-500">SCROLL</p>
			</div>
		</motion.section>
	);
};
