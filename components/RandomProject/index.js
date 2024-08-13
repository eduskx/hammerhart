import ProjectCard from "../ProjectCard";

export default function RandomProject({ projects }) {
  if (!projects) {
    return null;
  }

  function getRandomProject(projects) {
    return projects[Math.floor(Math.random() * projects.length)];
  }

  const randomProject = getRandomProject(projects);

  return (
    <div>
      <ProjectCard project={randomProject} />
    </div>
  );
}
