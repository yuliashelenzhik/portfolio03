import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Photo from "./pages/Photo";
import Digital from "./pages/Digital";
import Traditional from "./pages/Traditional";
import Main from "./pages/Main";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/photo" element={<Photo />} />
          <Route path="/digital" element={<Digital />} />
          <Route path="/traditional" element={<Traditional />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
