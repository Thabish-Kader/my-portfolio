import Image from "next/image";
import React from "react";
import avatar from "../public/assets/avatar.png";
type Props = {};

export const About = (props: Props) => {
	return (
		<section id="about" className="h-screen snap-start">
			<div className="flex max-w-lg sm:max-w-xl md:max-w-5xl mx-auto flex-col h-full items-center justify-center">
				<h1 className="text-gray-500 text-2xl uppercase tracking-[15px] font-bold mb-20">
					About ME
				</h1>
				<div className="grid md:grid-cols-2 gap-2 ">
					<div className="flex justify-center items-center">
						<div className="relative h-[300px] w-[200px] md:h-[500px] md:w-[400px]">
							<Image
								src={avatar}
								alt="/avatar"
								className="object-cover rounded-lg md:rounded-lg"
							/>
						</div>
					</div>
					<p className="text-gray-500 text-justify">
						Lorem ipsum, dolor sit amet consectetur adipisicing
						elit. In consequuntur a ratione pariatur ullam iusto
						ipsum, aliquam ad impedit, veniam rem, eos quibusdam
						incidunt consequatur fuga deserunt ea voluptatibus.
						Sapiente! Dolor eius saepe repudiandae aliquam non
						tempora consequuntur, sint ea quam expedita aut.
						Provident culpa, reiciendis vitae aliquid, ab enim
						obcaecati praesentium labore impedit beatae maxime,
						perferendis ipsa delectus aliquam. Quas nam delectus ea
						id dolor nobis sapiente est totam eaque temporibus
						recusandae blanditiis animi exercitationem deleniti,
						aperiam quisquam labore numquam tempora libero assumenda
						asperiores distinctio ipsum minus. Dolor, iure!
					</p>
				</div>
			</div>
		</section>
	);
};
