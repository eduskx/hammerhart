import FilterButtons from "@/components/FilterButtons";
import ProjectCard from "@/components/ProjectCard";
import SearchBar from "@/components/SearchBar";
import Sliders from "@/public/svg/Sliders.svg";
import styled from "styled-components";

export default function BookmarkPage({
  projects,
  onToggleBookmark,
  onSearch,
  complexities,
  onFilterChange,
}) {
  const bookmarkedProjects = projects.filter(
    (project) => project.isFavorite === true
  );

  if (!bookmarkedProjects || bookmarkedProjects.length === 0) {
    return <h2>You don't have any bookmarked projects</h2>;
  }

  return (
    <>
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

      <BookmarkWrapper>
        {bookmarkedProjects.map((bookmarkedProject) => (
          <ProjectCard
            key={bookmarkedProject.id}
            project={bookmarkedProject}
            onToggleBookmark={onToggleBookmark}
          />
        ))}
      </BookmarkWrapper>
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

const BookmarkWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  justify-content: center;
  padding: 20px 16px;
  height: 100%;
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
