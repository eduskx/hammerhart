import { useEffect, useRef } from "react";

import useLocalStorageState from "use-local-storage-state";
import styled, { css } from "styled-components";
import ProjectCard from "../ProjectCard";

export default function HighlightedProject({
  projects,
  onToggleBookmark,
  $isDesktop,
  $isDesktopOn,
}) {
  const [randomProject, setRandomProject] = useLocalStorageState(
    "randomProject",
    { defaultValue: null }
  );

  const randomProjectRef = useRef(randomProject);

  function getRandomProject(projects) {
    return projects[Math.floor(Math.random() * projects.length)];
  }

  // Generate a random project on first render and save it in randomProjectRef
  useEffect(() => {
    if (randomProjectRef.current === null) {
      const pickedProject = getRandomProject(projects);
      setRandomProject(pickedProject);
      randomProjectRef.current = pickedProject;
    }
  });

  // Update randomProject when it is modified
  useEffect(() => {
    const updatedProject = projects.find(
      (project) => project.id === randomProjectRef.current?.id
    );
    setRandomProject(updatedProject);
    randomProjectRef.current = updatedProject;
  }, [projects]);

  if (!randomProject) {
    return <StyledTitle>Highlighted Project is not available</StyledTitle>;
  }

  if (!projects) {
    return null;
  }

  return (
    <StyledContainer $isDesktop={$isDesktop} $isDesktopOn={$isDesktopOn}>
      <StyledTitle $isDesktop={$isDesktop}>Highlighted Project</StyledTitle>
      <ProjectCard
        project={randomProject}
        onToggleBookmark={onToggleBookmark}
        $isHighlighted
      />
    </StyledContainer>
  );
}

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 1275px) {
    margin-bottom: 26px;
  }
  ${(props) =>
    props.$isDesktop &&
    css`
      @media screen and (min-width: 1275px) {
        display: none;
        margin-right: 10%;
      }
    `}
  ${(props) =>
    props.$isDesktopOn &&
    css`
      @media screen and (max-width: 1275px) {
        display: none;
      }
    `}
`;

const StyledTitle = styled.h2`
  color: var(--color-primary-2);
  text-align: start;
  padding: 30px 0 15px 0;

  ${(props) => props.$isDesktop && css``}

  @media screen and (min-width: 1275px) {
    padding: 0 0 15px 0;
    color: var(--color-primary-1);
  }
`;
