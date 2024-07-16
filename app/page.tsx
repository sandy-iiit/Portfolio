import Hero from "@/components/main/Hero";
import Skills from "@/components/main/Skills";
import Encryption from "@/components/main/Encryption";
import Projects from "@/components/main/Projects";
import Experience from "@/components/main/Experience";
import Footer from "@/components/main/Footer";

export default function Home() {
  return (
    <main className="h-full w-full">
      <div className={"flex flex-col  gap-20"}>
          <Hero/>
          <Skills/>
          <Encryption/>
          <Experience/>
          <Projects/>
          <Footer/>
      </div>
    </main>
  );
}
