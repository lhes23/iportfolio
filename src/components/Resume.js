import data from "../api/data.json";

const Resume = () => {
  return (
    <>
      {/* ======= Resume Section ======= */}
      <section id="resume" className="resume">
        <div className="container">
          <div className="section-title">
            <h2>Resume</h2>
          </div>
          <div className="row">
            <h3 className="resume-title">Sumary</h3>
            <div className="resume-item pb-0">
              <h4>
                {data.personalDetails.firstName +
                  " " +
                  data.personalDetails.lastName}
              </h4>
              <p>
                <em>
                  Innovative and deadline-driven Graphic Designer with 3+ years
                  of experience designing and developing user-centered
                  digital/print marketing material from initial concept to
                  final, polished deliverable.
                </em>
              </p>
              <ul>
                <li>{data.personalDetails.address}</li>
                <li>{data.personalDetails.phoneNumber}</li>
                <li>{data.personalDetails.email}</li>
              </ul>
            </div>
            <div className="col-lg-6" data-aos="fade-up">
              <h3 className="resume-title">Professional Experience</h3>

              {data.jobExperiences.map((job) => (
                <div className="resume-item" key={job.title}>
                  <h4>{job.title}</h4>
                  <h5>{job.date}</h5>
                  <p>
                    <em>{job.company}</em>
                  </p>
                  <ul>
                    {job.tasks.map((task) => (
                      <li>{task}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <div className="col-lg-6" data-aos="fade-up" data-aos-delay={100}>
              <h3 className="resume-title">Education</h3>
              <div className="resume-item">
                <h4>{data.education.course}</h4>
                <h5>{data.education.year}</h5>
                <p>
                  <em>{data.education.school}</em>
                </p>
                <p>{data.education.schoolAddress}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End Resume Section */}
    </>
  );
};
export default Resume;
