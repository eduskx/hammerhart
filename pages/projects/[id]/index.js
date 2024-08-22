import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";
import { FaArrowLeftLong } from "react-icons/fa6";
import styled from "styled-components";
import DeleteButton from "@/components/Modals/DeleteButton";
import BookmarkButton from "@/components/BookmarkButton";
import Collapsible from "react-collapsible";
import Note from "@/components/Note";
import EditButton from "@/components/Modals/EditButton";

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
  onToggleForm,
  isFormOpen,
  onUpdateProject,
  onProcessFormData,
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

  const StyledCollapsible = ({ children, ...props }) => (
    <StyledCollapsibleWrapper>
      <Collapsible {...props}>{children}</Collapsible>
    </StyledCollapsibleWrapper>
  );

  return (
    <>
      <StyledDetailsWrapper>
        <StyledLink href="/">
          <FaArrowLeftLong /> Back
        </StyledLink>
        <StyledImageWrapper>
          <BookmarkButton
            onToggleBookmark={() => onToggleBookmark(id)}
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
      </StyledDetailsWrapper>
      <div>
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
                    onChange={() => onCheckbox(material.id, id, "materials")}
                    aria-checked={material.isChecked}
                    aria-label={`Select ${material.description}`}
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
                    onChange={() => onCheckbox(step.id, id, "steps")}
                    aria-checked={step.isChecked}
                    aria-label={`Select ${step.description}`}
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
          <DeleteButton
            onDelete={() => {
              onDeleteProject(id);
              router.push("/");
            }}
          />
          <EditButton
            onToggleForm={onToggleForm}
            isFormOpen={isFormOpen}
            projects={projects}
            onUpdateProject={onUpdateProject}
            onProcessFormData={onProcessFormData}
          />
        </StyledButtonsWrapper>
      </div>
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
  padding-top: 16px;
  color: var(--color-primary-2);
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin: 80px auto 0 auto;
  width: max-content;
`;
const StyledDetailsWrapper = styled.div`
  position: relative;
  box-shadow: var(--box-shadow-2);
  background-color: var(--color-primary-2);
  width: 100%;
  height: 100%;
 

  @media screen and (min-width: 640px) {
}
`;

const StyledDescription = styled.p`
  text-align: center;
  width: 90%;
`;

const StyledImage = styled(Image)`
  width: 100%;
  border-radius: 10px;
  object-fit: cover;
`;
const StyledImageWrapper = styled.div`
  position: relative;
  width: 100%;
`;

const StyledComplexityTag = styled.p`
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
