import data from "../api/data.json";

const Header = () => {
  return (
    <>
      {/* ======= Mobile nav toggle button ======= */}
      <i className="bi bi-list mobile-nav-toggle d-xl-none" />
      <header id="header">
        <div className="d-flex flex-column">
          <div className="profile">
            <img
              src="assets/img/profilepic.jpg"
              alt
              className="img-fluid rounded-circle"
            />
            <h1 className="text-light">
              <a href="index.html">
                {data.personalDetails.firstName} {data.personalDetails.lastName}
              </a>
            </h1>
            <div className="social-links mt-3 text-center">
              {data.socialMedias.map((socmed) => (
                <a href={socmed.url} className={socmed.title} target="_blank">
                  <i className={`bx bxl-${socmed.title}`} />
                </a>
              ))}
            </div>
          </div>
          <nav id="navbar" className="nav-menu navbar">
            <ul>
              <li>
                <a href="#hero" className="nav-link scrollto active">
                  <i className="bx bx-home" /> <span>Home</span>
                </a>
              </li>
              <li>
                <a href="#about" className="nav-link scrollto">
                  <i className="bx bx-user" /> <span>About</span>
                </a>
              </li>
              <li>
                <a href="#resume" className="nav-link scrollto">
                  <i className="bx bx-file-blank" /> <span>Resume</span>
                </a>
              </li>
              <li>
                <a href="#portfolio" className="nav-link scrollto">
                  <i className="bx bx-book-content" /> <span>Portfolio</span>
                </a>
              </li>
              <li>
                <a href="#contact" className="nav-link scrollto">
                  <i className="bx bx-envelope" /> <span>Contact</span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
};
export default Header;
