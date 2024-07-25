import styled from "styled-components";
import ProjectCard from "@/components/ProjectCard";
import Link from "next/link";

export default function ProjectsList({ projects }) {
  return (
    <StyledList>
      {projects.map((project) => (
        <li key={project.id}>
          <StyledLink href={`/projects/${project.id}`}>
            <ProjectCard project={project} />
          </StyledLink>
        </li>
      ))}
    </StyledList>
  );
}

const StyledList = styled.ul`
  list-style: none;
  padding: 0;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
`;
