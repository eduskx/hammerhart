import ProjectCard from "@/components/ProjectCard";
import styled from "styled-components";

export default function BookmarkPage({ projects, onToggleBookmark }) {
  const bookmarkedProjects = projects.filter(
    (project) => project.isFavorite === true
  );

  if (!bookmarkedProjects || bookmarkedProjects.length === 0) {
    return <h1>You don't have any bookmarked projects</h1>;
  }

  return (
    <BookmarkWrapper>
      {bookmarkedProjects.map((bookmarkedProject) => (
        <ProjectCard
          key={bookmarkedProject.id}
          project={bookmarkedProject}
          onToggleBookmark={onToggleBookmark}
        />
      ))}
      ;
    </BookmarkWrapper>
  );
}

const BookmarkWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  justify-content: center;
  padding: 2rem;
`;
