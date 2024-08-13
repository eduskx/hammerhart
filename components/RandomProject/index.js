import { useEffect, useState } from "react";
import ProjectCard from "../ProjectCard";

export default function RandomProject({ projects }) {
  const [randomProject, setRandomProject] = useState(null);
  // inital rendering 0
  // first rendering 1
  useEffect(() => {
    if (projects && projects.length > 0) {
      const getRandomProject = (projects) => {
        return projects[Math.floor(Math.random() * projects.length)];
      };
      setRandomProject(getRandomProject(projects));
    }
  }, [projects]);

  if (!projects) {
    return null;
  }

  return <div>{randomProject && <ProjectCard project={randomProject} />}</div>;
}
