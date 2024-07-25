import Image from "next/image";

import styled from "styled-components";

export default function ProjectCard({ project }) {
  const { imageUrl, title, complexity } = project;
  return (
    <CardContainer>
      <StyledImage src={imageUrl} alt={title} width={100} height={100} />
      <Wrapper>
        <StyledTitle>{title}</StyledTitle>
        <StyledComplexity>
          Complexity:
          <br />
          {complexity}
        </StyledComplexity>
      </Wrapper>
    </CardContainer>
  );
}

const StyledTitle = styled.h2`
  font-size: 100%;
`;
const StyledComplexity = styled.p`
  
  font-size: 90%;
  border-radius: 10px;
`;
const StyledImage = styled(Image)`
  width: 100%;
  border-radius: 13px 0 0 13px;
  object-fit: scale-down;
`;
const CardContainer = styled.div`
  display: flex;

  gap: 1rem;
`;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
