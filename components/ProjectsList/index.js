import ProjectCard from "@/components/ProjectCard";
import {StyledLink,StyledUl,StyledNoSearchResults} from "./styles.ProjectsList.js"

export default function ProjectsList({
  projects,
  onToggleBookmark,
  searchInput,
}) {
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
      {searchedProjects.map((project) => (
        <li key={project.id}>
          <ProjectCard project={project} onToggleBookmark={onToggleBookmark} />
        </li>
      ))}
    </StyledUl>
  );
}
