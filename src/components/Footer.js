import data from "../api/data.json";

const Footer = () => {
  const d = new Date();
  const year = d.getFullYear();
  return (
    <>
      {/* ======= Footer ======= */}
      <footer id="footer">
        <div className="container">
          <div className="copyright">
            © Copyright |{" "}
            <strong>
              <span>
                {data.personalDetails.firstName +
                  " " +
                  data.personalDetails.lastName +
                  " "}
                |{" "}
              </span>
              <span>{year}</span>
            </strong>
          </div>
        </div>
      </footer>
      {/* End  Footer */}
    </>
  );
};
export default Footer;
