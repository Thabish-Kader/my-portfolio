import netflix from "./public/assets/netflix.png";
import firebase from "./public/assets/firebaseImg.png";
import javascript from "./public/assets/javascript.png";
import twitter from "./public/assets/twitterSS.png";
import amazon from "./public/assets/amazon.png";
import instagram from "./public/assets/instagram.png";
import nextjs from "./public/assets/nextjs.png";
import tailwind from "./public/assets/tailwind.jpg";
import graphql from "./public/assets/graphql.png";
import reddit from "./public/assets/reddit.png";
import typescript from "./public/assets/typescript.svg";
import redux from "./public/assets/redux.svg";
import sanity from "./public/assets/sanity.png";
export const projectData = [
	{
		bannerImg: amazon,
		projectTitle: "Amazon Clone",
		stack1: typescript,
		stack2: nextjs,
		stack3: tailwind,
		stack4: graphql,
		stack5: redux,
		projectDescription:
			'An "Amazon clone" built using Next.js, Tailwind CSS, NextAuth, Redux, and GraphQL with Stripe API which makes it a highly functional, fast, and dynamic e-commerce website that closely mimics the features and user experience of the original Amazon website. Next.js is used to handle the server-side rendering of the website, which would make it highly performant and SEO-friendly. Tailwind CSS is used for the styling of the website, providing a consistent and modern design. NextAuth is used to handle user authentication and authorization, allowing users to log in and register securely. Redux is used to manage the state of the website, ensuring that all data is handled efficiently and consistently. GraphQL is used as the API for the website, providing a flexible and efficient way to retrieve and manipulate data. And Stripe API is used to handle payment processing, allowing customers to make purchases on the website.',
		link: "https://amazon-next-app-zqtc.vercel.app/",
		code: "https://github.com/Thabish-Kader/Amazon-next-app",
	},
	{
		bannerImg: instagram,
		projectTitle: "Instagram Clone",
		stack1: typescript,
		stack2: nextjs,
		stack3: firebase,
		stack4: graphql,
		stack5: redux,
		projectDescription:
			'An "Instagram Clone" built using Next.js, Firebase, NextAuth, and Redux is a highly scalable, real-time, and dynamic social media website that closely mimics the features and user experience of the original Instagram website. Users are able to upload, view and interact with photos, post comments and see their photos. This combination of technologies would create a smooth and responsive user experience, allowing users to easily navigate and interact with the website.',
		link: "https://instagram-khaki-seven.vercel.app/",
		code: "https://github.com/Thabish-Kader/instagram",
	},
	{
		bannerImg: netflix,
		projectTitle: "Netflix Clone",
		stack1: javascript,
		stack2: firebase,
		stack3: tailwind,

		projectDescription:
			"This application was developed for the purpose of learning and implementing react, firebase, tailwind concepts. This Netflix web application enable an autheticated user to add movies to their account. The movies added to myShows page will be updated in firebase in realtime. All the css is done utilizing tailwind. Futhermore, the netflix app is mobile responsive.",
		link: "https://netflix-react-webapp.firebaseapp.com/",
		code: "https://github.com/Thabish-Kader/Netflix-UI",
	},
	{
		bannerImg: reddit,
		projectTitle: "Reddit Clone",
		stack1: typescript,
		stack2: nextjs,
		stack3: tailwind,
		stack4: graphql,
		projectDescription:
			'A "Reddit clone" built using Next.js, Firebase, NextAuth, and GraphQL is a highly scalable, real-time, and dynamic social media website that closely mimics the features and user experience of the original Reddit website. Next.js handles the server-side rendering of the website, making it highly performant and SEO-friendly. Firebase is used as the backend for the website, providing a real-time database, user authentication, and hosting services. NextAuth is used to handle user authentication and authorization, allowing users to log in and register securely. GraphQL is used as the API for the website, providing a flexible and efficient way to retrieve and manipulate data. This combination of technologies allows for a smooth and responsive user experience, allowing users to easily create and interact with posts, and vote and comment on them.',
		link: "https://reddit-next-app.vercel.app/",
		code: "https://github.com/Thabish-Kader/reddit-next-app",
	},
];
