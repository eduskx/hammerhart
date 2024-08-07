import ProjectCard from "@/components/ProjectCard";

export default function BookmarkPage({ projects }) {
  const bookmarkedProjects = projects.filter(
    (project) => project.isFavorite === true
  );

  return bookmarkedProjects.map((bookmarkedProject) => (
    <ProjectCard key={bookmarkedProject.id} project={bookmarkedProject} />
  ));
}
