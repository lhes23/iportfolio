import Skills from "./Skills";
import About from "./About";
import Resume from "./Resume";
import Portfolio from "./Portfolio";
import Contact from "./Contact";
import Footer from "./Footer";

const Main = () => {
  return (
    <>
      {/* Start Main */}
      <main id="main">
        <About />
        <Skills />
        <Resume />
        <Portfolio />
        <Contact />
        <Footer />
      </main>
      {/* End #main */}

      <a
        href="#"
        className="back-to-top d-flex align-items-center justify-content-center"
      >
        <i className="bi bi-arrow-up-short" />
      </a>
    </>
  );
};
export default Main;
