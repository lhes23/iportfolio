import { useState } from "react";
import data from "../api/data.json";

const Portfolio = () => {
  const [filteredPort, setFilteredPort] = useState(data.portfolio);

  const portfolioAll = () => {
    setFilteredPort(data.portfolio);
  };

  const filteredPortHandler = (event) => {
    console.log(event.target.value);
    const filteredArray = data.portfolio.filter(
      (val) => val.app === event.target.value
    );
    setFilteredPort(filteredArray);
  };
  return (
    <>
      {/* ======= Portfolio Section ======= */}
      <section id="portfolio" className="portfolio section-bg">
        <div className="container">
          <div className="section-title">
            <h2>Portfolio</h2>
            <p>
              Magnam dolores commodi suscipit. Necessitatibus eius consequatur
              ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam
              quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea.
              Quia fugiat sit in iste officiis commodi quidem hic quas.
            </p>
          </div>
          <div className="row" data-aos="fade-up">
            <div className="col-lg-12 d-flex justify-content-center">
              <ul id="portfolio-flters">
                <button onClick={portfolioAll} value="" className="listBtn">
                  All
                </button>
                <button
                  onClick={filteredPortHandler}
                  value="wordpress"
                  className="listBtn"
                >
                  Wordpress
                </button>
                <button
                  onClick={filteredPortHandler}
                  value="react"
                  className="listBtn"
                >
                  React
                </button>
              </ul>
            </div>
          </div>
          <div
            className="row portfolio-container"
            data-aos="fade-up"
            data-aos-delay={100}
          >
            {filteredPort.map((portfolio) => (
              <div
                className="col-lg-4 col-md-6 portfolio-item"
                key={portfolio.img}
              >
                <div className="portfolio-wrap">
                  <img
                    // src={`%PUBLIC_URL%/assets/img/portfolio/${portfolio.img}`}
                    src={require(`../../public/assets/img/portfolio/${portfolio.img}`)}
                    className="img-fluid"
                    alt="true"
                  />
                  <div className="portfolio-links">
                    <a
                      href={`assets/img/portfolio/${portfolio.img}`}
                      data-gallery="portfolioGallery"
                      className="portfolio-lightbox"
                      title="App 1"
                    >
                      <i className="bx bx-plus" />
                    </a>
                    <a href="portfolio-details.html" title="More Details">
                      <i className="bx bx-link" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* End Portfolio Section */}
    </>
  );
};
export default Portfolio;
