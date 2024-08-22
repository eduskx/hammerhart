import ProjectCard from "@/components/ProjectCard";
import styled from "styled-components";

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


const StyledUl = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 30px;
  list-style: none;
  margin-top: 30px;
  padding-bottom: 30px;
  @media screen and (min-width: 1275px) {
    padding: 0 10% 30px 10%;
  }
`;

const StyledNoSearchResults = styled.p`
  color: black;
  padding: 16px;
  text-align: center;
`;