import React, { useEffect, useState } from "react";
import "./index.css";

function App() {
  const [resume, setResume] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("http://localhost:5000/api/resume")
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Resume request failed (${response.status})`);
        }
        return response.json();
      })
      .then(setResume)
      .catch((requestError) => {
        setError(
          `${requestError.message}. Make sure the Node server is running.`
        );
      });
  }, []);

  if (error) {
    return <main className="container error">{error}</main>;
  }

  if (!resume) {
    return <main className="container">Loading resume…</main>;
  }

  return (
    <main className="container">
      <header className="header">
        <div>
          <h1>{resume.name}</h1>
          <p className="title">{resume.title}</p>
        </div>
        <address className="contact">
          <a href={`mailto:${resume.email}`}>{resume.email}</a>
          <span>{resume.location}</span>
        </address>
      </header>

      <section>
        <h2>Profile</h2>
        <p>{resume.summary}</p>
      </section>

      <section>
        <h2>Skills</h2>
        <ul className="skills">
          {resume.skills.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
      </section>

      <section>
        <h2>Experience</h2>
        {resume.experience.map((job) => (
          <article key={`${job.company}-${job.role}`}>
            <div className="item-heading">
              <h3>
                {job.role} · {job.company}
              </h3>
              <span>{job.dates}</span>
            </div>
            <p>{job.details}</p>
          </article>
        ))}
      </section>

      <section>
        <h2>Education</h2>
        {resume.education.map((item) => (
          <article key={`${item.school}-${item.degree}`}>
            <div className="item-heading">
              <h3>{item.degree}</h3>
              <span>{item.dates}</span>
            </div>
            <p>{item.school}</p>
          </article>
        ))}
      </section>
    </main>
  );
}

export default App;
