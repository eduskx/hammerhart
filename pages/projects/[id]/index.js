import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";
import { FaArrowLeftLong } from "react-icons/fa6";
import styled from "styled-components";
import Modal from "@/components/Modal/";

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
  newProjects,
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
  } = projectData;

  return (
    <>
      <Link href="/">
        <FaArrowLeftLong /> Back
      </Link>

      <StyledDetailsWrapper>
        <h1>{title}</h1>
        <StyledImageWrapper>
          <Image src={imageUrl} alt={title} width={300} height={200} />
          <StyledComplexityTag>{complexity}</StyledComplexityTag>
        </StyledImageWrapper>
        <p>{description}</p>
        <StyledDuration>Duration: {duration}</StyledDuration>

        <h2>Materials</h2>
        <StyledMaterialsList>
          {materials.map((material, index) => (
            <StyledListItems key={index}>{material}</StyledListItems>
          ))}
        </StyledMaterialsList>

        <h2>Instructions</h2>
        <StyledInstructionsList>
          {steps.map((step) => (
            <StyledListItems key={step.id}>{step.description}</StyledListItems>
          ))}
          <Modal
            id={id}
            projects={projects}
            setNewProjects={setNewProjects}
            newProjects={newProjects}
          />
        </StyledInstructionsList>
      </StyledDetailsWrapper>
    </>
  );
}

const StyledDetailsWrapper = styled.div`
  width: 300px;
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
`;

const StyledMaterialsList = styled.ul`
  align-self: flex-start;
  list-style-position: inside;
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
