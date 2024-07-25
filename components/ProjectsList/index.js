import ProjectCard from "@/components/ProjectCard";
import {
  StyledList,
  StyledListElement,
  StyledLink,
} from "@/components/ProjectsList/stylesProjectList";

export default function ProjectsList({ projects }) {
  return (
    <StyledList>
      {projects.map((project) => (
        <StyledListElement key={project.id}>
          <StyledLink href={`/projects/${project.id}`}>
            <ProjectCard project={project} />
          </StyledLink>
        </StyledListElement>
      ))}
    </StyledList>
  );
}
