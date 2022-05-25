import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Footer from "./components/Footer";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import Main from "./components/Main";
import videoBG from "./videos/video.mp4";

function App() {
  return (
    <div className="App">
      <Header />
      <HeroSection />
      <Main />
      {/* <Footer /> */}
    </div>
  );
}

export default App;
