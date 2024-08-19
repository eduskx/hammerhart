import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";
import { FaArrowLeftLong } from "react-icons/fa6";
import styled from "styled-components";
import Modal from "@/components/Modal";
import BookmarkButton from "@/components/BookmarkButton";
import Collapsible from "react-collapsible";
import Note from "@/components/Note";

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
  onDeleteProject,
  onToggleBookmark,
  onCheckbox,
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

  const StyledCollapsible = ({ children, ...props }) => (
    <StyledCollapsibleWrapper>
      <Collapsible {...props}>{children}</Collapsible>
    </StyledCollapsibleWrapper>
  );

  return (
    <>
      <StyledLink href="/">
        <FaArrowLeftLong /> Back
      </StyledLink>

      <StyledDetailsWrapper>
        <StyledImageWrapper>
          <BookmarkButton
            onToggleBookmark={() => onToggleBookmark(detailsId)}
            isFavorite={projectData.isFavorite}
          />
          <StyledImage
            src={imageUrl}
            alt={title}
            width={600}
            height={200}
            priority
          />
          <StyledComplexityTag color={complexity}>
            {complexity}
          </StyledComplexityTag>
        </StyledImageWrapper>
        <Styledtitle>{title}</Styledtitle>
        <StyledDescription>{description}</StyledDescription>
        <StyledDuration>Duration: {duration}</StyledDuration>

        <StyledCollapsible
          trigger="Materials ▼"
          triggerWhenOpen="Materials ▲"
          transitionTime={100}
          easing="ease-in-out"
          open={true}
        >
          {materials.length === 0 ? (
            <h2>No Materials found. Please add new ones.</h2>
          ) : (
            <StyledMaterialsList>
              {materials.map((material) => (
                <StyledListItems key={material.id}>
                  <input
                    type="checkbox"
                    checked={material.isChecked}
                    onChange={() =>
                      onCheckbox(material.id, detailsId, "materials")
                    }
                  />
                  {material.description}
                </StyledListItems>
              ))}
            </StyledMaterialsList>
          )}
        </StyledCollapsible>

        <StyledCollapsible
          trigger="Instructions ▼"
          triggerWhenOpen="Instructions ▲"
          transitionTime={100}
          easing="ease-in-out"
          open={true}
        >
          {steps.length === 0 ? (
            <h2>No Instructions found. Please add new ones.</h2>
          ) : (
            <StyledInstructionsList>
              {steps.map((step) => (
                <StyledListItems key={step.id}>
                  <input
                    type="checkbox"
                    checked={step.isChecked}
                    onChange={() => onCheckbox(step.id, detailsId, "steps")}
                  />
                  {step.description}
                </StyledListItems>
              ))}
            </StyledInstructionsList>
          )}
        </StyledCollapsible>

        <StyledCollapsible
          trigger="Notes ▼"
          triggerWhenOpen="Notes ▲"
          transitionTime={100}
          easing="ease-in-out"
          open={true}
        >
          <Note project={projectData} />
        </StyledCollapsible>
        <StyledButtonsWrapper>
          <Modal
            onDelete={() => {
              onDeleteProject(id);
              router.push("/");
            }}
          />
          <StyledEditLink href={`/projects/${detailsId}/edit`}>
            Edit
          </StyledEditLink>
        </StyledButtonsWrapper>
      </StyledDetailsWrapper>
    </>
  );
}

const Styledtitle = styled.h1`
  font-size: 1.5rem;
  @media screen and (min-width: 640px) {
    font-size: 2rem;
  }
`;

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
  width: 90%;
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
  list-style-type: none;
  text-align: start;
  padding: 0;
  margin: 0;
  color: #ffffff;
`;

const StyledInstructionsList = styled.ol`
  list-style-position: inside;
  list-style-type: none;
  padding: 0 1rem;
  margin-bottom: 1rem;
  text-align: start;
  color: #ffffff;

  @media screen and (min-width: 640px) {
    list-style-position: inside;
    padding: 0;
    text-align: start;
  }
`;

const StyledListItems = styled.li`
  line-height: 1.4rem;
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

const StyledCollapsibleWrapper = styled.div`
  border-radius: 2px;
  color: rgba(58, 58, 58, 1);
  background: rgba(255, 255, 255, 0.5);
  border: 1px solid #ccc;
  width: 95%;

  &:hover {
    outline: 1px solid white;
  }
  .Collapsible__trigger {
    display: flex;


    color: rgba(58, 58, 58, 1);
    width: 100%;
    cursor: pointer;
    padding-left: 0.5rem;

    -webkit-tap-highlight-color: transparent;
  }
  .Collapsible__contentOuter {
    background-color: #a38376;
  }
  .Collapsible__contentInner {
    padding: 0.5rem;
  }
`;
