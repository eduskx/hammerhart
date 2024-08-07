import ProjectCard from "@/components/ProjectCard";
import Link from "next/link";
import styled from "styled-components";
import HeartFilled from "../../components/BookmarkButton/HeartFilled.svg";

export default function BookmarkPage({ projects }) {
  const bookmarkedProjects = projects.filter(
    (project) => project.isFavorite === true
  );

  return bookmarkedProjects.map((bookmarkedProject) => (
    <StyledLink href={`/projects/${bookmarkedProject.id}`}>
      <ProjectCard key={bookmarkedProject.id} project={bookmarkedProject} />
    </StyledLink>
  ));
}

const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
`;
