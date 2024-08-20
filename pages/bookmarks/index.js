import FilterButtons from "@/components/FilterButtons";
import Layout from "@/components/Layout";
import ProjectsList from "@/components/ProjectsList";
import SearchBar from "@/components/SearchBar";
import Sliders from "@/public/svg/Sliders.svg";
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
    <>
      <Layout isBookmark={true} />

      <BookmarkHeader>My Projects</BookmarkHeader>

      <StyledPattern />

      <StyledToggleSearchWrapper>
        <SearchBar onSearch={onSearch} />
        <StyledFilterToggleButton>
          <Sliders fill="currentColor" />
        </StyledFilterToggleButton>
      </StyledToggleSearchWrapper>

      <FilterButtons
        complexities={complexities}
        onFilterChange={onFilterChange}
      />

      <ProjectsList
        projects={bookmarkedProjects}
        onToggleBookmark={onToggleBookmark}
        searchInput={searchInput}
        activeFilter={activeFilter}
        bookmarkedList
      />
    </>
  );
}

const StyledToggleSearchWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 16px 0;
`;

const StyledFilterToggleButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 27px;
  border-radius: 10px;
  color: var(--color-primary-1);
  border: none;
  background-color: var(--color-primary-2);
  border: none;
`;

const BookmarkHeader = styled.h1`
  padding: 100px 16px 0 16px;
  color: var(--color-primary-2);
  text-align: center;
`;

const StyledPattern = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url("./svg/backgroundImage_green.svg");
  background-repeat: repeat;
  background-attachment: local;
  opacity: 0.2;
  z-index: -1;
`;
