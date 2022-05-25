import data from "../api/data.json";
import Typed from "react-typed";
import videoBG from "../videos/video.mp4";

const HeroSection = () => {
  return (
    <>
      {/* ======= Hero Section ======= */}
      <section
        id="hero"
        className="d-flex flex-column justify-content-center align-items-center"
      >
        <video loop autoPlay muted className="heroBackground" src={videoBG} />
        <div className="hero-container" data-aos="fade-in">
          <h1>
            {data.personalDetails.firstName} {data.personalDetails.lastName}
          </h1>
          <p>
            I'm a{" "}
            <Typed
              strings={data.professionalDetails.jobTitles.map((title) => title)}
              typeSpeed={100}
              backSpeed={50}
              loop
            />
            <span
              className="typed"
              data-typed-items="Designer, Developer, Freelancer, Photographer"
            />
          </p>
        </div>
      </section>
      {/* End Hero */}
    </>
  );
};
export default HeroSection;
