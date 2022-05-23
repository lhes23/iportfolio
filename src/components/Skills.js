import data from "../api/data.json";
import { ProgressBar } from "react-bootstrap";

const Skills = () => {
  return (
    <>
      {/* ======= Skills Section ======= */}
      <section id="skills" className="skills section-bg">
        <div className="container">
          <div className="section-title">
            <h2>Skills</h2>
            <p>
              Magnam dolores commodi suscipit. Necessitatibus eius consequatur
              ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam
              quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea.
              Quia fugiat sit in iste officiis commodi quidem hic quas.
            </p>
          </div>
          <div className="row skills-content">
            <div className="col-lg-12" data-aos="fade-up">
              {Object.entries(data.professionalDetails.skills).map(
                (skillsArray, i) => (
                  <div className="progress" key={i}>
                    <span className="skill">
                      {skillsArray[0]} <i className="val">{skillsArray[1]}%</i>
                    </span>
                    <div className="progressBar">
                      <ProgressBar
                        now={skillsArray[1]}
                        animated
                        variant="info"
                      />
                    </div>
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </section>
      {/* End Skills Section */}
    </>
  );
};
export default Skills;
