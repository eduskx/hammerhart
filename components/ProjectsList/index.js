import styled from "styled-components";
import ProjectCard from "@/components/ProjectCard";
export default function ProjectsList({ projects }) {
  return (
    <ul>
      {projects.map((project) => (
        <StyledListElement key={project.id}>
          <ProjectCard project={project} />
        </StyledListElement>
      ))}
    </ul>
  );
}

const StyledListElement = styled.li`
  list-style: none;
`;
