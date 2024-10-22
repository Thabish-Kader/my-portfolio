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
        <title>Thabish&apos;s Protfolio</title>
        <meta />
        <link rel="icon" href="/favicon.ico" />
        <script
          async
          src="https://scripts.inopenapp.com/dead90c9-5715-47ce-8c23-a523e1989f08.js"
        ></script>
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

      <div className=" animate-pulse absolute top-0 bg-[#64ffda] right-10 h-screen xl:w-[1px] "></div>
    </div>
  );
}
