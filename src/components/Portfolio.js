import { useState } from "react";
import { Link } from "react-router-dom";
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
            <p></p>
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
                className="col-lg-6 col-md-6 portfolio-item"
                key={portfolio.id}
              >
                <Link to={`${portfolio.id}`}>
                  <div className="portfolio-wrap">
                    <img
                      src={require(`../portfolio-imgs/${portfolio.img}`)}
                      className="img-fluid"
                      alt="true"
                    />
                    <div className="portfolio-links">
                      {/* <a
                        href={portfolio.url}
                        title="More Details"
                        target="_blank"
                      >
                        <i className="bx bx-link" />
                      </a> */}
                    </div>
                  </div>
                </Link>
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
