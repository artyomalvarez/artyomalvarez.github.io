import { About } from "./components/organisms/About";
import { Contact } from "./components/organisms/Contact";
import { EducationList } from "./components/organisms/EducationList";
import { ExperienceList } from "./components/organisms/ExperienceList";
import { Header } from "./components/organisms/Header";
import { Hero } from "./components/organisms/Hero";
import { Projects } from "./components/organisms/Projects";
import { Skills } from "./components/organisms/Skills";

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <ExperienceList />
        <EducationList />
        <Skills />
        <Projects />
        <Contact />
      </main>
    </>
  );
}

export default App;
