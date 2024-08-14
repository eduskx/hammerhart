import { useEffect, useState } from "react";
import ProjectCard from "../ProjectCard";
import Link from "next/link";
import styled from "styled-components";
import { useRouter } from "next/router";

export default function RandomProject({ projects }) {
  const [randomProject, setRandomProject] = useState(null);

  // const router = useRouter();
  // const { id } = router.query;

  // const randomData = projects.find((project) => project.id === id);

  // const {
  //   title,
  //   imageUrl,
  //   complexity,
  //   description,
  //   duration,
  //   materials,
  //   steps,
  //   id: detailsId,
  // } = randomData;

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

      // Initial setting
      setRandomProject(getRandomProject(projects));

      // Check every minute
      const interval = setInterval(updateRandomProject, 60000); // 60000ms = 1 minute

      // Cleanup interval on component unmount
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

    // <RandomContainer>
    //   <StyledHeader>The Project of the day</StyledHeader>;
    //   <Container>
    //     const randomId= projects.filter((project) => project.id ===
    //     getRandomProject.id)
    //   </Container>
    // </RandomContainer>
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
`;
