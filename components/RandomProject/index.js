import { useEffect, useState } from "react";
import ProjectCard from "../ProjectCard";
import Link from "next/link";
import styled from "styled-components";

export default function RandomProject({ projects, onToggleBookmark }) {
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
  }, []);

  if (!randomProject) {
    return <StyledError>Project of the day is not available</StyledError>;
  }

  if (!projects) {
    return null;
  }

  return (
    <RandomContainer>
      <StyledHeader>Project of the day</StyledHeader>
      {randomProject && (
        <Container>
          <ProjectCard
            project={randomProject}
            onToggleBookmark={onToggleBookmark}
          />
        </Container>
      )}
    </RandomContainer>
  );
}

const StyledUl = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
  list-style: none;
  padding: 2rem;
  margin: 0;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
`;

const RandomContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
`;

const StyledHeader = styled.h2`
  text-align: center;
  color: white;
`;

const StyledError = styled.p`
  text-align: center;
  color: white;
  font-size: 20px;
`;
