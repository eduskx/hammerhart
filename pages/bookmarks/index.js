import FilterButtons from "@/components/FilterButtons";
import ProjectsList from "@/components/ProjectsList";
import SearchBar from "@/components/SearchBar";
import Sliders from "@/public/svg/Sliders.svg";
import styled, { css } from "styled-components";

export default function BookmarkPage({
  projects,
  onToggleBookmark,
  complexities,
  onFilterChange,
  activeFilter,
  searchInput,
  onSearch,
  onToggleDisplayFilter,
  filterOn,
}) {
  const bookmarkedProjects = projects.filter(
    (project) => project.isFavorite === true
  );
  return (
    <StyledPageWrapper>
      <StyledUpperWrapper>
        <StyledProjectsWrapper>
          <StyledToggleSearchWrapper>
            <StyledBookmarkHeader>My Projects</StyledBookmarkHeader>
            <SearchBar onSearch={onSearch} $isNotMobile />
            <StyledFilterToggleButton
              onClick={onToggleDisplayFilter}
              $filterOn={filterOn}
            >
              <StyledSliders fill="currentColor" />
            </StyledFilterToggleButton>
          </StyledToggleSearchWrapper>

          <FilterButtons
            complexities={complexities}
            onFilterChange={onFilterChange}
            activeFilter={activeFilter}
            filterOn={filterOn}
          />
        </StyledProjectsWrapper>
      </StyledUpperWrapper>
      <StyledDivider />
      <ProjectsList
        projects={bookmarkedProjects}
        onToggleBookmark={onToggleBookmark}
        searchInput={searchInput}
        activeFilter={activeFilter}
        bookmarkedList
      />
    </StyledPageWrapper>
  );
}

const StyledProjectsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  padding-top: 100px;
  @media screen and (min-width: 640px) {
    flex-direction: row;
    padding-top: 0;
  }
  @media screen and (min-width: 1275px) {
    flex-direction: row;
  }
`;

const StyledPageWrapper = styled.div`
  @media screen and (min-width: 640px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 140px;
  }
`;

const StyledDivider = styled.div`
  display: inherit;
  height: 3px;
  background-color: var(--color-primary-2);
  width: 80%;
  margin-bottom: 40px;
  border-radius: 6px;
  margin: 5px 10%;
`;

const StyledUpperWrapper = styled.section`
  @media screen and (min-width: 640px) {
    display: flex;
    justify-content: flex-start;
    align-items: flex-end;
    gap: 30px;
    width: 100%;
    padding: 0 10%;
  }
`;

const StyledSliders = styled(Sliders)`
  transform: ${({ $filterOn }) => ($filterOn ? "none" : "rotate(180deg)")};
`;

const StyledToggleSearchWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 16px 0;
  @media screen and (min-width: 640px) {
    padding: 0;
  }
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
  cursor: pointer;
  ${(props) =>
    props.$filterOn &&
    css`
      outline-offset: -2px;
      outline: 2px solid var(--color-primary-2);
      background-color: var(--color-primary-1);
      color: var(--color-primary-2);
      transform: translateY(-3px);
    `}
  @media screen and (min-width: 1275px) {
    &:hover {
      outline-offset: -2px;
      outline: 2px solid var(--color-primary-2);
      transform: translateY(-3px);
      background-color: var(--color-primary-1);
      color: var(--color-primary-2);
    }
  }
`;

const StyledBookmarkHeader = styled.h1`
  color: var(--color-primary-2);
  white-space: nowrap;
`;
