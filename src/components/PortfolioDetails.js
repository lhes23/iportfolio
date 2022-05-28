import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import data from "../api/data.json";

const PortfolioDetails = () => {
  const { id } = useParams();
  const details = data.portfolio.find((det) => det.id === id);

  return (
    <>
      {/* ======= Portfolio Details Section ======= */}
      <section id="portfolio-details" className="portfolio-details">
        <div className="container">
          <div className="row gy-4">
            <div className="col-lg-12">
              <div className="portfolio-details-slider swiper">
                <div className="swiper-wrapper align-items-center">
                  <div className="swiper-slide">
                    <img
                      src={require(`../portfolio-imgs/${details.img}`)}
                      alt={details.name}
                    />
                  </div>
                </div>
                <div className="swiper-pagination" />
              </div>
            </div>
            <div className="col-lg-12">
              <div className="portfolio-info">
                <h3>Project information</h3>
                <ul>
                  <li>
                    <strong>Name</strong>: {details.name}
                  </li>
                  <li>
                    <strong>Technology</strong>: {details.app}
                  </li>
                  <li>
                    <strong>Project URL</strong>:{" "}
                    <a href={details.url}>{details.url}</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End Portfolio Details Section */}
    </>
  );
};
export default PortfolioDetails;
