import FilterButtons from "@/components/FilterButtons";
import ProjectsList from "@/components/ProjectsList";
import SearchBar from "@/components/SearchBar";
import styled from "styled-components";

export default function BookmarkPage({
  projects,
  onToggleBookmark,
  complexities,
  onFilterChange,
  activeFilter,
  searchInput,
  onSearch,
}) {
  const bookmarkedProjects = projects.filter(
    (project) => project.isFavorite === true
  );
  return (
    <StyledContainer>
      <StyledWrapper>
        <SearchBar onSearch={onSearch} />
        <FilterButtons
          complexities={complexities}
          onFilterChange={onFilterChange}
        />
      </StyledWrapper>
      <ProjectsList
        projects={bookmarkedProjects}
        onToggleBookmark={onToggleBookmark}
        searchInput={searchInput}
        activeFilter={activeFilter}
        bookmarkedList
      />
    </StyledContainer>
  );
}
const StyledContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  justify-content: center;
  padding: 100px 16px;
  height: 100%;
`;
const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  gap: 16px;
`;
const StyledNoSearchResults = styled.p`
  color: black;
  padding-top: 100px;
  text-align: center;
`;
