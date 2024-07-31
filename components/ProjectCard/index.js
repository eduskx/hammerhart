import styled, { keyframes } from "styled-components";
import Image from "next/image";

const handleColorType = (color) => {
  switch (color) {
    case "Intermediate":
      return "#f9b234";
    case "Advanced":
      return "#e44002";
    default:
      return "#3ecd5e";
  }
};

export default function ProjectCard({ project }) {
  const { imageUrl, title, complexity } = project;
  return (
    <CardContainer>
      <StyledImage src={imageUrl} alt={title} width={100} height={100} />
      <Wrapper>
        <StyledTitle>{title}</StyledTitle>
        <StyledComplexity>{complexity}</StyledComplexity>
      </Wrapper>
      <StyledDiv color={complexity}></StyledDiv>
    </CardContainer>
  );
}
const CardContainer = styled.div`
  box-shadow: 1px 1px 6px 1px #00000072;
  background: rgb(44, 150, 164);
  background-color: #a38376;
  border-radius: 20px;
  position: relative;
  overflow: hidden;
  width: 350px;
  height: 200px;
  display: flex;
  flex-direction: row;
  list-style: none;
  padding: 0;
  margin: 0;
  gap: 1rem;
`;

const StyledImage = styled(Image)`
  width: 50%;
  height: auto;
  border-radius: 10px 0 0 13px;
  object-fit: cover;
  z-index: 2;
  margin: 1rem;
`;
const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const FadeInAnimation = keyframes`
  0% {transform: scale(0);}
  100% {transform: scale(4);}
`;
const StyledDiv = styled.div`
  position: absolute;
  background-color: ${({ color }) => handleColorType(color)};
  width: 200px;
  height: 200px;
  bottom: -170px;
  right: -88px;
  border-radius: 15px;
  z-index: 1;
  border: 50px solid transparent;

  ${CardContainer}:hover & {
    animation: ${FadeInAnimation} 800ms linear;
  }
`;

const StyledTitle = styled.h2`
  padding-top: 1rem;
  font-size: 100%;
  color: white;
  z-index: 2;
`;
const StyledComplexity = styled.p`
  font-size: 90%;
  padding: 0 15px 5px 0;
  text-align: end;
  color: white;
  z-index: 2;
`;
