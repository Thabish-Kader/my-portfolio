import Head from "next/head";
import { About } from "../components/About";
import { Contact } from "../components/Contact";
import { Header } from "../components/Header";
import { Hero } from "../components/Hero";
import { Projects } from "../components/Projects";
import { Skills } from "../components/Skills";

export default function Home() {
	return (
		<div className="bg-[#0a192f] h-screen text-white scroll-smooth snap-y snap-mandatory overflow-scroll">
			<Head>
				<title>Thabish Protfolio</title>
				<meta />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			{/* Header */}
			<Header />
			{/* Hero */}
			<Hero />
			{/* About */}
			<About />
			{/* Skills */}
			<Skills />
			{/* Projects */}
			<Projects />
			{/* Contact Me */}
			<Contact />
		</div>
	);
}
