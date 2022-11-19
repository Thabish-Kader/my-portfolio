import netflix from "./public/assets/netflix.png";
import firebase from "./public/assets/firebaseImg.png";
import javascript from "./public/assets/javascript.png";
import twitter from "./public/assets/twitterSS.png";
import tailwind from "./public/assets/tailwind.jpg";
import typescript from "./public/assets/typescript.svg";
import sanity from "./public/assets/sanity.png";
export const projectData = [
	{
		bannerImg: netflix,
		projectTitle: "Netflix",
		stack1: javascript,
		stack2: firebase,
		stack3: tailwind,

		projectDescription:
			"This application was developed for the purpose of learning and implementing react, firebase, tailwind concepts. This Netflix web application enable an autheticated user to add movies to their account. The movies added to myShows page will be updated in firebase in realtime. All the css is done utilizing tailwind. Futhermore, the netflix app is mobile responsive.",
		link: "https://netflix-react-webapp.firebaseapp.com/",
		code: "https://github.com/Thabish-Kader/Netflix-UI",
	},
	{
		bannerImg: twitter,
		projectTitle: "Twitter",
		stack1: typescript,
		stack2: sanity,
		stack3: tailwind,
		projectDescription:
			"This twitter web application is a full stack web app built with react as front-end and sanity powering the backend. This has been the most ambitious project yet. It was a lot of fun working with sanity but at the same time it was challengeing as well as they have a different syntax for querying and mutatiing data. This application allows only authenticated users to post pictures, tweets and comment. The authentication is backed by twitter and google.",
		link: "https://twitter-sanity-nine.vercel.app/",
		code: "https://github.com/Thabish-Kader/twitter",
	},
];
