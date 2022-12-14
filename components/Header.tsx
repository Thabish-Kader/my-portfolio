import React from "react";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";
type Props = {};

export const Header = (props: Props) => {
	return (
		<header className="sticky top-0 z-20 max-w-7xl mx-auto flex items-center justify-between p-4 py-8">
			{/* left side */}
			<motion.div
				initial={{ x: -500, opacity: 0 }}
				animate={{ x: 0, opacity: 1 }}
				transition={{ duration: 1 }}
				className="space-x-3"
			>
				<SocialIcon
					bgColor="#64ffda"
					style={{ height: 45, width: 45 }}
					url="https://www.linkedin.com/in/thabish-a-kader-366447224/"
				/>
				<SocialIcon
					bgColor="#64ffda"
					style={{ height: 45, width: 45 }}
					url="https://twitter.com/DeveloperTak"
				/>
				<SocialIcon
					bgColor="#64ffda"
					style={{ height: 45, width: 45 }}
					url="https://github.com/Thabish-Kader"
				/>
			</motion.div>

			{/* Right side */}
			<motion.div
				initial={{ x: 500, opacity: 0 }}
				animate={{ x: 0, opacity: 1 }}
				transition={{ duration: 1 }}
				className="space-x-2 flex items-center"
			>
				<p className="text-lg font-medium uppercase text-[#64ffda]">
					Lets Connect
				</p>
				<SocialIcon
					bgColor="#64ffda"
					style={{ height: 45, width: 45 }}
					url="mailto:kadertabish@gmail.com"
				/>
			</motion.div>
		</header>
	);
};
