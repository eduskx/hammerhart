import { useRouter } from "next/router";
import Image from "next/image";
import styled from "styled-components";
import DeleteButton from "@/components/Modals/DeleteButton";
import BookmarkButton from "@/components/BookmarkButton";
import Collapsible from "react-collapsible";
import Note from "@/components/Note";
import EditButton from "@/components/Modals/EditButton";

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
        <StyledImageWrapper>
          <BookmarkButton
            onToggleBookmark={() => onToggleBookmark(id)}
            isFavorite={projectData.isFavorite}
            $isDetail
          />
          <StyledImage
            src={imageUrl}
            alt={title}
            width={600}
            height={200}
            priority
          />
          <Styledtitle>{title}</Styledtitle>
        </StyledImageWrapper>
        <StyledDescription>{description}</StyledDescription>
        <StyledDivider />
        <StyledDurationComplexityWrapper>
          <StyledDuration>Duration: {duration}</StyledDuration>
          <StyledComplexityTag color={complexity}>
            {complexity}
          </StyledComplexityTag>
        </StyledDurationComplexityWrapper>
        <StyledDivider />
        <StyledCollapsible
          trigger="MATERIALS NEEDED ▼"
          triggerWhenOpen="MATERIALS NEEDED ▲"
          transitionTime={100}
          easing="ease-in-out"
          open={true}
        >
          {materials.length === 0 ? (
            <h2>No Materials found. Please add new ones.</h2>
          ) : (
            <ul>
              {materials.map((material) => (
                <StyledCheckboxWrapper key={material.id}>
                  <StyledCheckboxMaterial
                    type="checkbox"
                    checked={material.isChecked}
                    onChange={() => onCheckbox(material.id, id, "materials")}
                    aria-checked={material.isChecked}
                    aria-label={`Select ${material.description}`}
                  />
                  <StyledLabel htmlFor={`material-${material.id}`}>
                    {material.description}
                  </StyledLabel>
                </StyledCheckboxWrapper>
              ))}
            </ul>
          )}
        </StyledCollapsible>
        <StyledDivider />
        <StyledCollapsible
          trigger="INSTRUCTIONS ▼"
          triggerWhenOpen="INSTRUCTIONS ▲"
          transitionTime={100}
          easing="ease-in-out"
          open={true}
        >
          {steps.length === 0 ? (
            <h2>No Instructions found. Please add new ones.</h2>
          ) : (
            <ol>
              {steps.map((step) => (
                <StyledCheckboxWrapper key={step.id}>
                  <StyledCheckboxSteps
                    type="checkbox"
                    checked={step.isChecked}
                    onChange={() => onCheckbox(step.id, id, "steps")}
                    aria-checked={step.isChecked}
                    aria-label={`Select ${step.description}`}
                  />
                  <StyledLabel htmlFor={`step-${step.id}`}>
                    {step.description}
                  </StyledLabel>
                </StyledCheckboxWrapper>
              ))}
            </ol>
          )}
        </StyledCollapsible>
        <StyledCollapsible
          trigger="ENTER YOUR NOTES BELOW:"
          triggerWhenOpen="ENTER YOUR NOTES BELOW:"
          transitionTime={100}
          easing="ease-in-out"
          open={true}
        >
          <Note project={projectData} />
        </StyledCollapsible>
        <DetailsDeleteEditButtonWrapper>
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
        </DetailsDeleteEditButtonWrapper>
      </StyledDetailsWrapper>
    </>
  );
}
const StyledDetailsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 120px 10%;

  @media screen and (min-width: 640px) {
    padding: 120px 10%;
  }
`;
const StyledImage = styled(Image)`
width: 100%;
height: 100%;
  border-radius: 10px;
  overflow: hidden;
  object-fit: cover;
`;
const StyledImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  width: 90%;
  height: 300px;
  @media screen and (min-width: 640px) {
    width: 90%;
    height: 300px;
  }
  @media screen and (min-width: 1000px) {
    width: 90%;
    height: 300px;
    
  }
`;
const Styledtitle = styled.h2`
  position: absolute;
  text-align: center;
  max-width: 80%;
  bottom: -20px;
  color: var(--color-primary-1);
  background-color: var(--color-primary-2);
  border-radius: 10px;
  border: 2px solid var(--color-primary-1);
  font-size: 1rem;
  padding: 13px 15px 8px 15px;
  @media screen and (min-width: 640px) {
    font-size: 2rem;
  }
`;
const StyledDescription = styled.p`
  text-align: center;
  font-weight: 400;
  width: 80%;
  padding-top: 40px;
  color: var(--color-primary-2);
`;

const StyledDivider = styled.div`
  height: 3px;
  width: 90%;
  margin: 30px 0;
  background-color: var(--color-secondary-3);
  border-radius: 10px;
`;
const StyledDurationComplexityWrapper = styled.div`
  display: flex;
  width: 90%;
  justify-content: space-between;
`;
const StyledComplexityTag = styled.p`
  display: flex;
  align-items: center;
  font-weight: 400;
  padding: 15px 10px 13px 10px;
  height: 20px;
  border-radius: 10px;
  background-color: ${({ color }) => handleColorType(color)};
  color: var(--color-primary-1);
  @media screen and (min-width: 640px) {
  }
`;
const StyledDuration = styled.p`
  display: flex;
  align-items: center;
  font-weight: 400;
  padding: 15px 10px 13px 10px;
  height: 20px;
  border-radius: 10px;
  outline-offset: -2px;
  outline: 2px solid var(--color-primary-2);
  color: var(--color-primary-2);
`;

const StyledCheckboxWrapper = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const StyledCheckboxMaterial = styled.input`
  /* Hide the default checkbox but keep it visible for debugging */
  appearance: none;
  width: 30px;
  height: 30px;
  border: 2px solid var(--color-secondary-2);
  border-radius: 10px;
  background-color: var(--color-primary-1);
  margin-right: 15px;
  cursor: pointer;
  position: relative;
  padding: 13px;

  &:checked {
    background-color: var(--color-primary-1);
    border-color: var(--color-primary-2);
  }

  &:checked::after {
    content: "✔";
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--color-primary-2);
    font-size: 2rem;
    position: absolute;
    top: -13px;
    left: 5px;
  }
`;
const StyledCheckboxSteps = styled(StyledCheckboxMaterial)``;
const StyledLabel = styled.label`
  font-size: 1rem;
  font-weight: 400;
  color: var(--color-primary-2);
  cursor: pointer;
  padding: 3px;
`;

const StyledCollapsibleWrapper = styled.div`
  width: 90%;
  color: var(--color-primary-2);
  -webkit-tap-highlight-color: transparent;

  .Collapsible__trigger {
    display: flex;
    font-weight: 700;
    font-size: 1.3rem;
    width: 100%;
    cursor: pointer;
  }
  .Collapsible__contentOuter {
    list-style-type: none;
    text-align: start;
    
  }
  .Collapsible__contentInner {
    list-style-type: none;
    padding: 20px 0;
   
  }
`;

const DetailsDeleteEditButtonWrapper = styled.div`
  display: flex;
  position: fixed;
width: 100%;
  height: 80px;
  justify-content: center;
  align-items: center;
  border-radius: 10px 10px 0 0;
  bottom: 0;
  background-color: var(--color-primary-2);
  z-index: 3;
  box-shadow: var(--box-shadow-1);
`;
const StyledButtonsWrapper = styled.div`
  display: flex;
  gap: 2rem;
 
`;
