import HomeComponent from "@/components/home";
import About from "@/components/about";
import Tech from "@/components/tech";
import Projects from "@/components/projects"
import Experiences from "@/components/experiences";
import Footer from "@/components/footer";
import Head from "next/head";
import { logo } from "@/constants.js/assets";

export default function Home() {
  return (
	<>
		<main>
			<HomeComponent />
			<About />
			<Tech />
			<Projects />
			<Experiences />
			<Footer />
		</main>
	</>
  );
}
