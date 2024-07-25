import styled from "styled-components";
import ProjectCard from "@/components/ProjectCard";
import Link from "next/link";

export default function ProjectsList({ projects }) {
  return (
    <StyledList>
      {projects.map((project) => (
        <StyledListElement key={project.id}>
          <StyledLink href={`/projects/${project.id}`}>
            <ProjectCard project={project} />
          </StyledLink>
        </StyledListElement>
      ))}
    </StyledList>
  );
}

const StyledList = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
  padding: 0;
  margin: 0;
  gap: 1rem;

  @media (min-width: 600px) {
    display: flex;
    justify-content: space-evenly;
    flex-flow: row wrap;
    list-style: none;
    padding: 0;
    margin: 0;
    gap: 1rem;
  }
`;

const StyledListElement = styled.li`
  box-shadow: 1px 1px 6px 1px #000000;
  border-radius: 20px;

  margin: 0 1rem;
  padding: 0.5rem;
  @media (min-width: 600px) {
    width: 45%;
    height: auto;
    margin: 0;
    padding: 0.5rem;
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
`;
