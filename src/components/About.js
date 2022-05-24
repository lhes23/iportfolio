import data from "../api/data.json";

const About = () => {
  const d = new Date();
  const year = d.getFullYear();
  return (
    <>
      {/* ======= About Section ======= */}
      <section id="about" className="about">
        <div className="container">
          <div className="section-title">
            <h2>About</h2>
            <p>{data.personalDetails.about}</p>
          </div>
          <div className="row">
            <div className="col-lg-4" data-aos="fade-right">
              <img
                src="assets/img/profilepic2.png"
                className="img-fluid"
                alt="true"
              />
            </div>
            <div className="col-lg-8 pt-4 pt-lg-0 content" data-aos="fade-left">
              <h3>{data.professionalDetails.mainTitles}</h3>
              <p className="fst-italic"></p>
              <div className="row">
                <div className="col-lg-6">
                  <ul>
                    <li>
                      <i className="bi bi-chevron-right" />
                      <strong>Birthday:</strong>{" "}
                      <span>{data.personalDetails.bday}</span>
                    </li>
                    <li>
                      <i className="bi bi-chevron-right" />
                      <strong>Website:</strong> <span>www.example.com</span>
                    </li>
                    <li>
                      <i className="bi bi-chevron-right" />
                      <strong>Phone:</strong>{" "}
                      <span>{data.personalDetails.phoneNumber}</span>
                    </li>
                    <li>
                      <i className="bi bi-chevron-right" />
                      <strong>Address:</strong>{" "}
                      <span>{data.personalDetails.address}</span>
                    </li>
                  </ul>
                </div>
                <div className="col-lg-6">
                  <ul>
                    <li>
                      <i className="bi bi-chevron-right" />{" "}
                      <strong>Age:</strong>
                      <span>{year - 1985}</span>
                    </li>
                    <li>
                      <i className="bi bi-chevron-right" />
                      <strong>Degree:</strong>{" "}
                      <span>{data.education.degree}</span>
                    </li>
                    <li>
                      <i className="bi bi-chevron-right" />
                      <strong>Email:</strong>
                      <span>{data.personalDetails.email}</span>
                    </li>
                  </ul>
                </div>
              </div>
              <p></p>
            </div>
          </div>
        </div>
      </section>
      {/* End About Section */}
    </>
  );
};
export default About;
