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
			<h1 className="absolute top-24 left-[40%] text-gray-500 text-2xl uppercase tracking-[15px] font-bold">
				Contact
			</h1>
			<div>
				<h1 className="text-xl text-gray-500 tracking-widest uppercase">
					Lets Connect and build something{" "}
					<span className="text-purple-500 animate-pulse">
						amazing
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
							className="bg-purple-500 font-semibold uppercase animate-pulse p-2 rounded-lg text-black hover:bg-white duration-500 "
						>
							Submit
						</button>
					</form>
				</h1>
			</div>
		</motion.section>
	);
};
