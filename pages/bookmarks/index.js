import ProjectCard from "@/components/ProjectCard";
import SearchBar from "@/components/SearchBar";
import Sliders from "@/public/svg/Sliders.svg";
import styled from "styled-components";

export default function BookmarkPage({ projects, onToggleBookmark, onSearch }) {
  const bookmarkedProjects = projects.filter(
    (project) => project.isFavorite === true
  );

  if (!bookmarkedProjects || bookmarkedProjects.length === 0) {
    return <h2>You don't have any bookmarked projects</h2>;
  }

  return (
    <>
      <BookmarkHeader>My Projects</BookmarkHeader>

      <StyledToggleSearchWrapper>
        <SearchBar onSearch={onSearch} />
        <StyledFilterToggleButton>
          <Sliders fill="currentColor" />
        </StyledFilterToggleButton>
      </StyledToggleSearchWrapper>

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
  padding: 16px 0 16px 0;
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
`;

const BookmarkWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  justify-content: center;
  padding: 10px 16px;
  height: 100%;
  border: 1px solid red;
`;

// const StyledPattern = styled.div`
//   position: absolute;
//   background-image: url("./svg/backgroundImage_white.svg");
//   background-repeat: repeat;
//   background-attachment: local;
//   opacity: 0.2;
//   width: 2560px;
//   height: 100vh;
//   @media screen and (min-width: 640px) {
//     width: 2560px;
//     height: 100vh;
//   }
// `;
// const StyledPatternBottom = styled(StyledPattern)`
//   background-repeat: repeat;
//   background-image: url("./svg/backgroundImage_green.svg");
// `;
