import About from "@/app/components/About";
import Hero from "@/app/components/Hero";
import Skills from "@/app/components/Skills"
import Projects from "@/app/components/Projects";
import Experience from "./components/Experience";

export default function Home() {
  return (
    <main className="main">
      <Hero />
      <Skills />
      <Projects />
      <About />
      <Experience />
    </main>
  );
}
