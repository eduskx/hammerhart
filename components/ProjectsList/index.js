import ProjectCard from "@/components/ProjectCard";
import Link from "next/link";
import styled from "styled-components";

export default function ProjectsList({ newProjects }) {
  return (
    <StyledUl>
      {newProjects.map((project) => (
        <li key={project.id}>
          <StyledLink href={`/projects/${project.id}`}>
            <ProjectCard project={project} />
          </StyledLink>
        </li>
      ))}
    </StyledUl>
  );
}

const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
`;
const StyledUl = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
  list-style: none;
  padding: 2rem;
  margin: 0;
`;
