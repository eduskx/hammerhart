import styled from "styled-components";
import Image from "next/image";
import BookmarkButton from "../BookmarkButton";
import Details from "./details.svg";
import Link from "next/link";

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

export default function ProjectCard({ project, onBookmark }) {
  const { imageUrl, title, complexity } = project;
  return (
    <CardContainer>
      <StyledImage
        src={imageUrl}
        alt={title}
        width={100}
        height={100}
        priority
      />

      <Wrapper>
        <StyledLink href={`/projects/${project.id}`}>
          <StyledTitle>{title}</StyledTitle>
        </StyledLink>
        <BookmarkButton
          onBookmark={onBookmark}
          isFavorite={project.isFavorite}
        />

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
  margin: 1rem;
  gap: 1rem;
  transition: all 0.5s ease;
  z-index: 0;
  &:hover {
    transform: scale(1.1);
  }
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
  transition: all 1s ease;

  /* ${CardContainer}:hover & {
    transform: scale(10);
  } */
`;

const StyledTitle = styled.h2`
  padding-top: 1rem;
  padding-right: 0.5rem;
  font-size: 100%;
  color: white;
  z-index: 2;
`;

const StyledLink = styled(Link)`
  text-decoration: none;

  // const DetailsButton = styled.button
`;
//   width: min-content;
//   margin-left: 5rem;
//   margin-top: 0.4rem;
//   background-color: #584849;
//   border-radius: 30%;
// `;

const StyledComplexity = styled.p`
  font-size: 90%;
  padding: 0 15px 5px 0;
  text-align: end;
  color: white;
  z-index: 2;
`;
