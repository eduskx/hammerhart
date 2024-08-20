import ProjectCard from "@/components/ProjectCard";
import { StyledUl, StyledNoSearchResults } from "./styles.ProjectsList.js";

export default function ProjectsList({
  projects,
  onToggleBookmark,
  searchInput,
  activeFilter,
  bookmarkedList,
}) {
  if (
    (!projects && bookmarkedList) ||
    (projects.length === 0 && bookmarkedList)
  ) {
    return <h2>You don't have any bookmarked projects</h2>;
  }

  if (!projects || projects.length === 0) {
    return <h2>No projects found. Please create new ones.</h2>;
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

  const searchedAndFilteredProjects =
    activeFilter === "All"
      ? searchedProjects
      : searchedProjects.filter(
          (project) => project.complexity === activeFilter
        );

  if (searchedAndFilteredProjects.length === 0) {
    return <StyledNoSearchResults>No projects found</StyledNoSearchResults>;
  }
  return (
    <StyledUl>
      {searchedAndFilteredProjects.map((project) => (
        <li key={project.id}>
          <ProjectCard project={project} onToggleBookmark={onToggleBookmark} />
        </li>
      ))}
    </StyledUl>
  );
}
