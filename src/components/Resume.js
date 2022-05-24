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
            <div className="resume-item pb-0">
              <h4>
                {data.personalDetails.firstName +
                  " " +
                  data.personalDetails.lastName}
              </h4>
              <p>
                <em>{data.professionalDetails.summary}</em>
              </p>
              <span className="resumeList">{data.personalDetails.address}</span>
              <span className="resumeList">
                {data.personalDetails.phoneNumber}
              </span>
              <span className="resumeList">{data.personalDetails.email}</span>
            </div>
            <h3 className="resume-title">Professional Experience</h3>

            {data.jobExperiences.map((job) => (
              <div className="col-lg-6" data-aos="fade-up" key={job.title}>
                <div className="resume-item">
                  <h4>{job.title}</h4>
                  <h5>{job.date}</h5>
                  <p>
                    <em>{job.company}</em>
                  </p>
                  <ul>
                    {job.tasks.map((task) => (
                      <li key={task}>{task}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
            <div className="col-lg-12" data-aos="fade-up" data-aos-delay={100}>
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
