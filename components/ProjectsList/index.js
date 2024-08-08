import ProjectCard from "@/components/ProjectCard";
import styled from "styled-components";


export default function ProjectsList({ projects, $onBookmark, searchInput }) {

  if (!projects || projects.length === 0) {
    return <h1>No projects found. Please create new ones.</h1>;
  }

  const searchedProjects = projects.filter((project) => {
    if (searchInput === "") {
      return project;
    } else {
      return (
        project.title.toLowerCase().startsWith(searchInput) ||
        project.title.toLowerCase().includes(searchInput)
      );
    }
  });

  if (searchedProjects.length === 0) {
    return <StyledNoSearchResults>No projects found</StyledNoSearchResults>;
  }

  return (
    <StyledUl>

      {/* added toReversed() to be able to save projects in correct order and prevent assigning wrong id's to new projects*/}
      {searchedProjects.toReversed().map((project) => (

        <li key={project.id}>
          <ProjectCard project={project} $onBookmark={$onBookmark} />
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

const StyledNoSearchResults = styled.p`
  color: white;
  padding: 1rem;
  text-align: center;
`;
