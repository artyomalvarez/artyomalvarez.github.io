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
      <a className="skip-link" href="#contenido">
        Saltar al contenido
      </a>
      <Header />
      <main id="contenido" tabIndex={-1}>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <ExperienceList />
        <EducationList />
        <Contact />
      </main>
    </>
  );
}

export default App;
