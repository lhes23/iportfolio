import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <>
      <nav id="navbar" className="nav-menu navbar">
        <ul>
          <li>
            <Link to="/">
              <i className="bx bx-home" /> <span>Home</span>
            </Link>
            {/* <a href="#hero" className="nav-link scrollto active"></a> */}
          </li>
          <li>
            <Link to="/about">
              <i className="bx bx-user" /> <span>About</span>
            </Link>
            {/* <a href="#about" className="nav-link scrollto"></a> */}
          </li>
          <li>
            <Link to="/resume">
              <i className="bx bx-file-blank" /> <span>Resume</span>
            </Link>
            {/*<a href="#resume" className="nav-link scrollto"> </a> */}
          </li>
          <li>
            <Link to="/portfolio">
              <i className="bx bx-book-content" /> <span>Portfolio</span>
            </Link>
            {/* <a href="#portfolio" className="nav-link scrollto"></a> */}
          </li>
          <li>
            <Link to="/contact">
              <i className="bx bx-envelope" /> <span>Contact</span>
            </Link>
            {/* <a href="#contact" className="nav-link scrollto"></a> */}
          </li>
        </ul>
      </nav>
    </>
  );
};
export default Nav;
