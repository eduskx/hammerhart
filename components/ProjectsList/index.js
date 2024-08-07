import ProjectCard from "@/components/ProjectCard";
import Link from "next/link";
import styled from "styled-components";
import BookmarkButton from "../BookmarkButton";

export default function ProjectsList({ projects, setNewProjects }) {
  if (!projects || projects.length === 0) {
    return <h1>No projects found. Please create new ones.</h1>;
  }

  function handleOnBookmark(id) {
    setNewProjects(
      projects.map((project) =>
        project.id === id
          ? { ...project, isFavorite: !project.isFavorite }
          : project
      )
    );
    console.log(projects);
  }

  return (
    <StyledUl>
      {/* added toReversed() to be able to save projects in correct order and prevent giving wrong id's to new projects*/}
      {projects.toReversed().map((project) => (
        <li key={project.id}>
          <StyledLink href={`/projects/${project.id}`}>
            <ProjectCard project={project} />
          </StyledLink>
          <BookmarkButton
            $onBookmark={() => handleOnBookmark(project.id)}
            isFavorite={project.isFavorite}
          />
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
