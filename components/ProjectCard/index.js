import Image from "next/image";
import BookmarkButton from "../BookmarkButton";
import Link from "next/link";
import styled, { css } from "styled-components";

const handleColorType = (color) => {
  switch (color) {
    case "Intermediate":
      return "var(--color-intermediate)";
    case "Advanced":
      return "var(--color-advanced)";
    default:
      return "var(--color-beginner)";
  }
};

export default function ProjectCard({
  project,
  onToggleBookmark,
  $isHighlighted,
}) {
  const { imageUrl, title, complexity } = project;

  return (
    <CardWrapper>
      {
        <BookmarkButton
          onToggleBookmark={() => onToggleBookmark(project.id)}
          isFavorite={project.isFavorite}
          $isHighlighted={$isHighlighted}
        />
      }
      <Link href={`/projects/${project.id}`}>
        <StyledShadowDiv $isHighlighted={$isHighlighted} />
        <CardContainer color={complexity} $isHighlighted={$isHighlighted}>
          <StyledImageTitleWrapper>
            <StyledImage
              src={imageUrl}
              alt={title}
              width={100}
              height={100}
              unoptimized={true}
              priority
            />
            <StyledTitleBackground $isHighlighted={$isHighlighted}>
              <StyledTitle $isHighlighted={$isHighlighted}>{title}</StyledTitle>
            </StyledTitleBackground>
          </StyledImageTitleWrapper>
          <StyledComplexity $isHighlighted={$isHighlighted}>
            {complexity}
          </StyledComplexity>
        </CardContainer>
      </Link>
    </CardWrapper>
  );
}

const CardContainer = styled.div`
  background-color: ${({ color }) => handleColorType(color)};
  position: relative;
  display: flex;
  flex-direction: row;
  overflow: hidden;
  border-radius: 10px;
  width: 145px;
  height: 125px;
  box-shadow: var(--inner-shadow-1);
  @media screen and (min-width: 640px) {
    width: 260px;
    height: 175px;
  }
  @media screen and (min-width: 1275px) {
    width: 315px;
    height: 175px;
  }
  ${(props) =>
    props.$isHighlighted &&
    css`
      height: 175px;
      width: 315px;
      @media screen and (min-width: 640px) {
        width: 550px;
        height: 340px;
      }
      @media screen and (min-width: 1275px) {
        width: 560px;
        height: 340px;
      }
    `}
`;
const StyledShadowDiv = styled.div`
  position: absolute;
  border-radius: 10px;
  width: 145px;
  height: 125px;
  box-shadow: var(--box-shadow-2);
  @media screen and (min-width: 640px) {
    width: 260px;
    height: 175px;
  }
  @media screen and (min-width: 1275px) {
    width: 315px;
    height: 175px;
  }
  ${(props) =>
    props.$isHighlighted &&
    css`
      height: 175px;
      width: 315px;
      @media screen and (min-width: 640px) {
        width: 550px;
        height: 340px;
      }
      @media screen and (min-width: 1275px) {
        width: 560px;
        height: 340px;
      }
    `}
`;
const CardWrapper = styled.div`
  position: relative;
`;

const StyledImage = styled(Image)`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const StyledTitleBackground = styled.div`
  display: flex;
  position: absolute;
  padding: 3px 10px 3px 10px;
  top: 0;
  left: 0;
  background-color: var(--color-secondary-1);
  border-radius: 0 0 10px 0;
  @media screen and (min-width: 640px) {
    font-size: 1.3rem;
    padding: 3px 8px 3px 15px;
  }
`;

const StyledTitle = styled.h2`
  font-size: 0.9rem;
  margin: 0;
  line-height: 1.2;
  color: var(--color-primary-3);

  ${(props) =>
    props.$isHighlighted &&
    css`
      font-size: 1.1rem;
    `}
  @media screen and (min-width: 640px) {
    font-size: 1.3rem;
  }
`;

const StyledComplexity = styled.p`
  display: flex;
  position: absolute;
  align-items: center;
  padding: 10px 5px 8px 5px;
  bottom: 5px;
  right: 5px;
  font-size: 0.6rem;
  height: 18px;
  border-radius: 25px;
  outline: 1px solid var(--color-primary-2);
  outline-offset: -1px;
  background-color: var(--color-secondary-1);
  color: var(--color-primary-2);
  backdrop-filter: blur(5px);
  ${(props) =>
    props.$isHighlighted &&
    css`
      padding: 10px 10px;
      outline: 2px solid var(--color-primary-2);
      outline-offset: -2px;
      height: 25px;
      font-size: 0.8rem;
    `}
  @media screen and (min-width: 640px) {
    font-size: 0.8rem;
    padding: 10px 10px;
    outline: 2px solid var(--color-primary-2);
    outline-offset: -1px;
  }
`;

const StyledImageTitleWrapper = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: var(--box-shadow-1);
  transition: all 0.5s ease;
  &:hover,
  &:focus {
    transform-origin: 100% 100%;
    transform: rotate(-5deg) translate(0, 5px);
  }
`;
