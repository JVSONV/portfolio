import React from "react";
import { experienceData } from "@/lib/data";
import { v4 as uuidv4 } from "uuid";

const Experience = () => {
  return (
    <section id="experience" className="container--section">
      <h3 className="experience__header">Work History</h3>
      <div className="jobs">
        {experienceData.map((job) => {
          return (
            <div className="job__grid" key={uuidv4()}>
              <div className="job__avatar">{job.icon}</div>
              <div className="job__card__container">
                <div className="job__card">
                  <div className="card__header">
                    <div className="job__date">{job.date}</div>
                    <div className="job__title">{job.title}</div>
                    <div className="job__position">{job.position}</div>
                    <div className="job__location">{job.location}</div>
                  </div>
                  <div className="job__description">{job.description}</div>
                  {/* <div className="job__bullets">{job.bullets}</div> */}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Experience;
