import "./App.css";
import { Navbar } from "./components/pages/Navbar";
import { Header } from "./components/pages/Header";
import { Projects } from "./components/pages/Projects";
import { Contact } from "./components/pages/Contact";
import { TechStack } from "./components/pages/TechStack";

function App() {
  return (
    <>
      <div className="scroll-smooth font-Comfortaa  md:scroll-auto">
        <Navbar />
        <Header />
        <TechStack />
        <Projects />
        <Contact />
      </div>
    </>
  );
}

export default App;
