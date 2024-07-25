import {StyledTitle,StyledComplexity,StyledImage,CardContainer,Wrapper} from "@/components/ProjectCard/stylesProjectCard"




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


