import ProjectCard from "@/components/ProjectCard";
import styled from "styled-components";

export default function BookmarkPage({ projects, $onBookmark }) {
  const bookmarkedProjects = projects.filter(
    (project) => project.isFavorite === true
  );

  return (
    <BookmarkWrapper>
      {bookmarkedProjects.map((bookmarkedProject) => (
        <ProjectCard
          key={bookmarkedProject.id}
          project={bookmarkedProject}
          $onBookmark={$onBookmark}
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
