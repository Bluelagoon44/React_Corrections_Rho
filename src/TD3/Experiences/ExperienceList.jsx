import React from "react";
import Experience from "./Experience";

const ExperienceList = ({experiences}) => {
  return (
    <section>
      {experiences.map((experience) => (
        <Experience {...experience} />
      ))}
    </section>
  );
};

export default ExperienceList;
