import { useEffect, useRef } from "react";

import useLocalStorageState from "use-local-storage-state";
import styled from "styled-components";
import ProjectCard from "../ProjectCard";

export default function HighlightedProject({ projects, onToggleBookmark }) {
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
    <StyledContainer>
      <StyledTitle>Highlighted Project</StyledTitle>
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
  align-items: center;
  flex-direction: column;
`;

const StyledTitle = styled.h2`
  color: var(--color-primary-2);
  text-align: center;
`;
