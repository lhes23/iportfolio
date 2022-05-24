import { useState } from "react";
import data from "../api/data.json";
import Nav from "./Nav";

const Header = () => {
  return (
    <>
      {/* ======= Mobile nav toggle button ======= */}
      <i className="bi bi-list mobile-nav-toggle d-xl-none" />

      <header id="header">
        <div className="d-flex flex-column">
          <div className="profile">
            <img
              src={process.env.PUBLIC_URL + "/assets/img/profilepic.jpg"}
              alt="true"
              className="img-fluid rounded-circle"
            />
            <h1 className="text-light">
              <a href="index.html">
                {data.personalDetails.firstName} {data.personalDetails.lastName}
              </a>
            </h1>
            <div className="social-links mt-3 text-center">
              {data.socialMedias.map((socmed) => (
                <a
                  href={socmed.url}
                  className={socmed.title}
                  target="_blank"
                  key={socmed.title}
                >
                  <i className={`bx bxl-${socmed.title}`} />
                </a>
              ))}
            </div>
          </div>
          <Nav />
        </div>
      </header>
    </>
  );
};
export default Header;
