import React from "react";
import { skillsData } from "@/lib/data";
import { v4 as uuidv4 } from "uuid";

const Skills = () => {
  return (
    <div className="skill__container container--section">
      <ul className="skill__ticker">
        {skillsData.map((skill) => {
          return (
            <li className="skill" key={uuidv4()}>
              <div className="skill__icon">{skill.icon}</div>
              <div className="skill__name">{skill.name}</div>
            </li>
          );
        })}
      </ul>
      <div className="skill__ticker skill__ticker2">
        {skillsData.map((skill) => {
          return (
            <div className="skill" key={uuidv4()}>
              <div className="skill__icon">{skill.icon}</div>
              <div className="skill__name">{skill.name}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Skills;
