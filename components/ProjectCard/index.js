import {StyledTitle,StyledComplexity,StyledImage,CardContainer,Wrapper} from "@/components/ProjectCard/stylesProjectCard"

import styled from "styled-components";


export default function ProjectCard({ project }) {
  const { imageUrl, title, complexity } = project;
  return (
    <CardContainer>
      <StyledImage src={imageUrl} alt={title} width={100} height={100} />
      <Wrapper>
        <StyledTitle>{title}</StyledTitle>
        <StyledComplexity color={complexity}>
          
          {complexity}
        </StyledComplexity>
      </Wrapper>
        
    </CardContainer>
  );
}


const StyledDiv = styled.div`
border: solid 2px hotpink;
position:absolute;
width: 200px;
height: 100px;
bottom:-70px;
right: -95px;
border-radius: 15px;
z-index:1;

`;