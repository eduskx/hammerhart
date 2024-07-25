import ProjectCard from "@/components/ProjectCard";
import {
  StyledList,
  StyledListElement,
  StyledLink,
} from "@/components/ProjectsList/stylesProjectList";
import styled from "styled-components";


const handleColorType = color => {
  switch (color) {
    case "Intermediate":
      return "#f9b234";
    case "Advanced":
      return "#e44002";
    default:
      return "#3ecd5e";
  }
};


export default function ProjectsList({ projects }) {
  return (
    <StyledList>
      {projects.map((project) => (
        <StyledListElement key={project.id}>
          <StyledLink href={`/projects/${project.id}`}>
            <ProjectCard project={project} />
          </StyledLink>
          <StyledDiv></StyledDiv>
        </StyledListElement>
      ))}
    </StyledList>
  );
}

const StyledDiv = styled.div`
border: solid 2px hotpink;
position:absolute;
background-color: ${({ color }) => handleColorType(color)};
width: 200px;
height: 100px;
bottom:-62px;
right: -88px;
border-radius: 15px;
z-index:-1;
`;