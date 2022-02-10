import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
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
    <BrowserRouter>
      <div className="App">
        <Header />
        {/* <Route path="/" component={Home} exact></Route> */}
        <Home />
        {/* <Route path="/projects" component={Projects}></Route> */}
        <Projects />
        <Skills />
        <Artworks />
        <Tools />
        <Contact />
        <Credits />
      </div>
    </BrowserRouter>
  );
}

export default App;
