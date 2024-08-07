import ProjectCard from "@/components/ProjectCard";

import styled from "styled-components";
import BookmarkButton from "../BookmarkButton";

export default function ProjectsList({ projects, onBookmark }) {
  if (!projects || projects.length === 0) {
    return <h1>No projects found. Please create new ones.</h1>;
  }

  return (
    <StyledUl>
      {/* added toReversed() to be able to save projects in correct order and prevent giving wrong id's to new projects*/}
      {projects.toReversed().map((project) => (
        <li key={project.id}>
          <ProjectCard project={project} onBookmark={onBookmark} />
        </li>
      ))}
    </StyledUl>
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
