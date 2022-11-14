import React from "react";
import { SocialIcon } from "react-social-icons";

type Props = {};

export const Header = (props: Props) => {
	return (
		<header className="flex items-center justify-between p-2">
			{/* left side */}
			<div className="space-x-3">
				<SocialIcon
					bgColor="gray"
					style={{ height: 45, width: 45 }}
					url="https://www.linkedin.com/in/thabish-a-kader-366447224/"
				/>
				<SocialIcon
					bgColor="gray"
					style={{ height: 45, width: 45 }}
					url="https://twitter.com/DeveloperTak"
				/>
				<SocialIcon
					bgColor="gray"
					style={{ height: 45, width: 45 }}
					url="https://github.com/Thabish-Kader"
				/>
			</div>

			{/* Right side */}
			<div className="space-x-2 flex items-center">
				<p className="text-lg font-medium uppercase">Contact Me</p>
				<SocialIcon
					bgColor="gray"
					style={{ height: 45, width: 45 }}
					url="mailto:kadertabish@gmail.com"
				/>
			</div>
		</header>
	);
};
