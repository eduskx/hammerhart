import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";
import { FaArrowLeftLong } from "react-icons/fa6";
import styled from "styled-components";
import Modal from "@/components/Modal";
import BookmarkButton from "@/components/BookmarkButton";

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

export default function ProjectDetailsPage({
  projects,
  setNewProjects,
  $onBookmark,
}) {
  const router = useRouter();
  const { id } = router.query;

  const projectData = projects.find((project) => project.id === id);

  if (!projectData) {
    return <h1>No project found</h1>;
  }

  const {
    title,
    imageUrl,
    complexity,
    description,
    duration,
    materials,
    steps,
    id: detailsId,
  } = projectData;

  function handleDelete(id) {
    setNewProjects(projects.filter((project) => project.id !== id));
    router.push("/");
  }

  return (
    <>
      <StyledLink href="/">
        <FaArrowLeftLong /> Back
      </StyledLink>

      <StyledDetailsWrapper>
        <StyledImageWrapper>
          <BookmarkButton
            $onBookmark={() => $onBookmark(projectData.id)}
            isFavorite={projectData.isFavorite}
          />
          <StyledImage src={imageUrl} alt={title} width={600} height={200} />
          <StyledComplexityTag color={complexity}>
            {complexity}
          </StyledComplexityTag>
        </StyledImageWrapper>
        <h1>{title}</h1>
        <StyledDescription>{description}</StyledDescription>
        <StyledDuration>Duration: {duration}</StyledDuration>

        <StyledListTitle>Materials</StyledListTitle>
        <StyledMaterialsList>
          {materials.map((material, index) => (
            <StyledListItems key={index}>{material}</StyledListItems>
          ))}
        </StyledMaterialsList>

        <StyledListTitle>Instructions</StyledListTitle>
        <StyledInstructionsList>
          {steps.map((step) => (
            <StyledListItems key={step.id}>{step.description}</StyledListItems>
          ))}
        </StyledInstructionsList>
        <StyledButtonsWrapper>
          <Modal onDelete={() => handleDelete(id)} />
          <StyledEditLink href={`/projects/${detailsId}/edit`}>
            Edit
          </StyledEditLink>
        </StyledButtonsWrapper>
      </StyledDetailsWrapper>
    </>
  );
}

const StyledButtonsWrapper = styled.div`
  display: flex;
  gap: 1rem;
  padding-bottom: 1rem;
`;

const StyledLink = styled(Link)`
  font-size: larger;
  padding-top: 1rem;
  color: white;
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  justify-content: center;
`;
const StyledDetailsWrapper = styled.div`
  box-shadow: 1px 1px 6px 1px #00000072;
  background: rgb(44, 150, 164);
  background-color: #a38376;
  width: 320px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 1rem auto 1rem auto;
  border-radius: 20px;
  color: white;
  padding: 0;
  gap: 1rem;

  @media screen and (min-width: 640px) {
    box-shadow: 1px 1px 6px 1px #00000072;
    background-color: #a38376;
    width: 600px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 1rem auto 1rem auto;
    border-radius: 20px;
    color: white;
    padding: 0;
    gap: 1rem;
  }
`;

const StyledDescription = styled.p`
  text-align: center;
  text-align: center;
`;

const StyledImage = styled(Image)`
  width: 100%;
  border-radius: 10px 10px 0 0;
  object-fit: cover;
`;
const StyledImageWrapper = styled.div`
  position: relative;
  width: 100%;
`;

const StyledComplexityTag = styled.p`
  position: absolute;
  bottom: 0.4rem;
  right: 0rem;
  padding: 5px;
  margin: 0;
  background-color: ${({ color }) => handleColorType(color)};
  border-radius: 10px 0px 0 0px;
`;

const StyledDuration = styled.p`
  align-self: self-end;
  padding-right: 2rem;
`;

const StyledMaterialsList = styled.ul`
  list-style-position: inside;
  list-style-type: circle;
  padding: 0;
  margin: 0;
  margin-top: 1rem;
`;

const StyledInstructionsList = styled.ol`
  list-style-position: inside;
  padding: 0 1rem;
  margin-bottom: 1rem;
  list-style-position: inside;
  padding: 0 1rem 0 1rem;
  margin-bottom: 1rem;

  @media screen and (min-width: 640px) {
    list-style-position: inside;
    margin-bottom: 1rem;
    padding: 0;
  }
`;

const StyledListItems = styled.li`
  line-height: 1.4rem;
  padding: 0rem 1rem;
`;

const StyledListTitle = styled.h2`
  padding: 0;
  margin: 0;
  align-self: center;
`;

const StyledEditLink = styled(Link)`
  text-decoration: none;
  all: unset;
  width: 4rem;
  height: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  color: rgba(58, 58, 58, 1);
  margin-bottom: 0.5rem;
  background: rgba(255, 255, 255, 0.5);
  border-radius: 2px;
  &:focus,
  &:hover {
    outline: 1px solid white;
  }
`;
