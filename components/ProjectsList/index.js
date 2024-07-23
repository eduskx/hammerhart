import styled from "styled-components";
import ProjectCard from "@/components/ProjectCard";
import Link from "next/link";

export default function ProjectsList({ projects }) {
  return (
    <ul>
      {projects.map((project) => (
        <StyledListElement key={project.id}>
          <Link href={`/projects/${project.id}`}>
            <ProjectCard project={project} />
          </Link>
        </StyledListElement>
      ))}
    </ul>
  );
}

const StyledListElement = styled.li`
  list-style: none;
`;
