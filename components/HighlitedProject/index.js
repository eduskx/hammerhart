import { useEffect, useRef } from "react";
import ProjectCard from "../ProjectCard";
import useLocalStorageState from "use-local-storage-state";
import styled from "styled-components";

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
      />
    </StyledContainer>
  );
}

const StyledContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 1rem;
  padding-bottom: 2rem;
`;

const StyledTitle = styled.p`
  color: white;
  font-size: 20px;
  text-align: center;
`;

