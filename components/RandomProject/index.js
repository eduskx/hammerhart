import { useEffect, useState } from "react";
import ProjectCard from "../ProjectCard";

import {StyledLink,RandomContainer,Container,StyledHeader} from "./styles.RandomProject"

export default function RandomProject({ projects }) {
  const [randomProject, setRandomProject] = useState(null);

  useEffect(() => {
    if (projects && projects.length > 0) {
      const getRandomProject = (projects) => {
        return projects[Math.floor(Math.random() * projects.length)];
      };

      const updateRandomProject = () => {
        const now = new Date();

        if (now.getHours() === 0 && now.getMinutes() === 1) {
          setRandomProject(getRandomProject(projects));
        }
      };

      setRandomProject(getRandomProject(projects));

      const interval = setInterval(updateRandomProject, 60000);

      return () => clearInterval(interval);
    }
  }, [projects]);

  if (!projects) {
    return null;
  }

  return (
    <RandomContainer>
      <StyledHeader>The Project of the day</StyledHeader>;
      <Container>
        {randomProject && (
          <StyledLink href={`/projects/${randomProject.id}`}>
            <ProjectCard project={randomProject} />
          </StyledLink>
        )}
      </Container>
    </RandomContainer>
  );
}


