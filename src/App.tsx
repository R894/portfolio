import Navbar from "./features/Navbar";
import About from "./sections/About";
import Contact from "./sections/Contact";
import Home from "./sections/Home";
import Projects from "./sections/Projects";
import Skills from "./sections/Skills";

function App() {
  return (
    <>
      <div className="flex flex-col">
        <Navbar />
        <Home/>
        <About/>
        <Skills/>
        <Projects/>
        <Contact/>
      </div>
    </>
  );
}

export default App;
