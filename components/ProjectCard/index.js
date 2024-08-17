import {CardContainer, StyledImage, Wrapper, StyledTitle, StyledComplexity} from "./styles.ProjectCard"
import BookmarkButton from "../BookmarkButton";

export default function ProjectCard({ project, onToggleBookmark }) {
  const { imageUrl, title, complexity } = project;

  return (
    <CardContainer color={complexity}>
      <BookmarkButton onToggleBookmark={onToggleBookmark}/>
      <StyledImage
        src={imageUrl}
        alt={title}
       width={100}
       height={100}
        priority
      />
      <Wrapper>
        <StyledTitle>{title}</StyledTitle>
        <StyledComplexity>{complexity}</StyledComplexity>
      </Wrapper>
      
    </CardContainer>
  );
}


