import ProjectCard from "@/components/ProjectCard";
import Link from "next/link";
import styled from "styled-components";

export default function BookmarkPage({ projects }) {
  const bookmarkedProjects = projects.filter(
    (project) => project.isFavorite === true
  );

  return bookmarkedProjects.map((bookmarkedProject) => (
    <ProjectCard key={bookmarkedProject.id} project={bookmarkedProject} />
  ));
}

const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
`;
