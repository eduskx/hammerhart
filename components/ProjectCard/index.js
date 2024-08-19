import {
  CardContainer,
  CardWrapper,
  StyledImage,
  StyledImageTitleWrapper,
  StyledTitle,
  StyledComplexity,
  StyledTitleBackground,
  StyledShadowDiv,
} from "./styles.ProjectCard";
import BookmarkButton from "../BookmarkButton";
import Link from "next/link";

export default function ProjectCard({ project, onToggleBookmark,}) {
  const { imageUrl, title, complexity } = project;

  return (
    <CardWrapper>
      {
        <BookmarkButton
          onToggleBookmark={() => onToggleBookmark(project.id)}
          isFavorite={project.isFavorite}
        />
      }
      <Link href={`/projects/${project.id}`}>
      <StyledShadowDiv/>
        <CardContainer color={complexity}>
          <StyledImageTitleWrapper>
            <StyledImage
              src={imageUrl}
              alt={title}
              width={100}
              height={100}
              priority
            />
            <StyledTitleBackground>
              <StyledTitle>{title}</StyledTitle>
            </StyledTitleBackground>
          </StyledImageTitleWrapper>
          <StyledComplexity>{complexity}</StyledComplexity>
        </CardContainer>
      </Link>
    </CardWrapper>
  );
}
