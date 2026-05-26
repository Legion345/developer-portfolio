import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Services } from "./components/Services";
import { Projects } from "./components/Projects";
import { Skills } from "./components/Skills";
import { Experience } from "./components/Experience";
import { Contact } from "./components/Contact";
import { WelcomeSlide } from "./components/WelcomeSlide";
import { Toaster } from "sonner";

export default function App() {
  return (
    <>
      <WelcomeSlide />

      <div className="min-h-screen bg-gray-50">
        <Header />
        <main>
          <Hero />
          <Services />
          <Skills />
          <Projects />
          <Experience />
        </main>
        <Contact />
        <Toaster />
      </div>
    </>
  );
}
