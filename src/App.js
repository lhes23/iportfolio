import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Footer from "./components/Footer";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import Main from "./components/Main";
import About from "./components/About";
import { Route, Routes } from "react-router-dom";
import Resume from "./components/Resume";
import Portfolio from "./components/Portfolio";
import PortfolioDetails from "./components/PortfolioDetails";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<HeroSection />} />
        <Route path="/about" element={<About />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/portfolio/:id" element={<PortfolioDetails />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
