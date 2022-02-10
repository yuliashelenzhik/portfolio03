import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Artworks from "./components/Artworks";
import Tools from "./components/Tools";
import Contact from "./components/Contact";
import Credits from "./components/Credits";

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <Projects />
      <Skills />
      <Artworks />
      <Tools />
      <Contact />
      <Credits />
    </div>
  );
}

export default App;
