import {
  CardContainer,
  CardWrapper,
  StyledImage,
  StyledImageTitleWrapper,
  StyledTitle,
  StyledComplexity,
} from "./styles.ProjectCard";
import BookmarkButton from "../BookmarkButton";
import Link from "next/link";

export default function ProjectCard({ project, onToggleBookmark }) {
  const { imageUrl, title, complexity } = project;

  return (
    <CardWrapper>
   {/*    <BookmarkButton
        onToggleBookmark={() => onToggleBookmark(project.id)}
        isFavorite={project.isFavorite}
      /> */}
      <Link href={`/projects/${project.id}`}>
        <CardContainer color={complexity}>
          <StyledImageTitleWrapper>
            <StyledImage
              src={imageUrl}
              alt={title}
              width={100}
              height={100}
              priority
            />
            <StyledTitle>{title}</StyledTitle>
          </StyledImageTitleWrapper>
          <StyledComplexity>{complexity}</StyledComplexity>
        </CardContainer>
      </Link>
    </CardWrapper>
  );
}
