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
  onToggleDisplayFilter,
  filterOn,
}) {
  const bookmarkedProjects = projects.filter(
    (project) => project.isFavorite === true
  );
  return (
    <>
      <Layout isBookmark={true} />
      <PageWrapper>
        <UpperWrapper>
          <BookmarkHeader>My Projects</BookmarkHeader>
          <StyledPattern />

          <StyledToggleSearchWrapper>
            <SearchBar onSearch={onSearch} $isNotMobile />
            <StyledFilterToggleButton onClick={onToggleDisplayFilter}>
              <StyledSliders fill="currentColor" />
            </StyledFilterToggleButton>
          </StyledToggleSearchWrapper>

          <FilterButtons
            complexities={complexities}
            onFilterChange={onFilterChange}
            activeFilter={activeFilter}
            filterOn={filterOn}
          />
        </UpperWrapper>
        <SeperatorLine />
        <ProjectsList
          projects={bookmarkedProjects}
          onToggleBookmark={onToggleBookmark}
          searchInput={searchInput}
          activeFilter={activeFilter}
          bookmarkedList
        />
      </PageWrapper>
    </>
  );
}

const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 120px;
`;

const SeperatorLine = styled.hr`
  display: none;
  @media screen and (min-width: 640px) {
    display: inherit;
    height: 5px;
    background-color: var(--color-primary-2);
    width: 85%;
    margin-bottom: 40px;
    border-radius: 10px;
  }
`;

const UpperWrapper = styled.section`
  @media screen and (min-width: 640px) {
    display: flex;
    justify-content: flex-start;
    align-items: flex-end;
    gap: 30px;
    width: 85%;
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
`;

const BookmarkHeader = styled.h1`
  padding: 100px 16px 0 16px;
  color: var(--color-primary-2);
  text-align: center;
  @media screen and (min-width: 768px) {
    text-align: center;
    padding: 0;
    margin: 0;
  }
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
  background-color: var(--color-primary-1);
  opacity: 0.4;
  z-index: -1;
`;
