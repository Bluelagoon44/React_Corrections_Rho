import Identity from "./Identity";
import Avatar from "./Avatar";
import ExperienceList from "./Experiences/ExperienceList";
import FormationList from "./Formations/FormationList";
import ProjectList from "./Projects/ProjectList";
import { cv } from "../utils/cv";

const TD3 = () => {
  const { identity, filePath, projects, experiences, formations } = cv;
  return (
    <section>
      <Avatar filePath={filePath} />
      <Identity {...identity} />
      <ProjectList projects={projects} />
      <ExperienceList experiences={experiences} />
      <FormationList formations={formations} />
    </section>
  );
};

export default TD3;
