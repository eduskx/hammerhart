import ProjectCard from "../ProjectCard";
export default function ProjectsList({ projects }) {
  return (
    <ul>
      {projects.map((project) => (
        <li key={project.id}>
          <ProjectCard project={project} />
        </li>
      ))}
    </ul>
  );
}
