import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";
import { RiArrowGoBackFill } from "react-icons/ri";
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
        {/*     <StyledLink href="/">
          <RiArrowGoBackFill /> Back
        </StyledLink> */}
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
          trigger="MATERIALS NEEDED:"
          triggerWhenOpen="MATERIALS NEEDED:"
          transitionTime={100}
          easing="ease-in-out"
          open={true}
        >
          {materials.length === 0 ? (
            <h2>No Materials found. Please add new ones.</h2>
          ) : (
            <StyledMaterialsList>
              {materials.map((material) => (
                <li key={material.id}>
                  <input
                    type="checkbox"
                    checked={material.isChecked}
                    onChange={() => onCheckbox(material.id, id, "materials")}
                    aria-checked={material.isChecked}
                    aria-label={`Select ${material.description}`}
                  />
                  {material.description}
                </li>
              ))}
            </StyledMaterialsList>
          )}
        </StyledCollapsible>
        <StyledDivider />
        <StyledCollapsible
          trigger="INSTRUCTIONS"
          triggerWhenOpen="INSTRUCTIONS"
          transitionTime={100}
          easing="ease-in-out"
          open={true}
        >
          {steps.length === 0 ? (
            <h2>No Instructions found. Please add new ones.</h2>
          ) : (
            <StyledInstructionsList>
              {steps.map((step) => (
                <li key={step.id}>
                  <input
                    type="checkbox"
                    checked={step.isChecked}
                    onChange={() => onCheckbox(step.id, id, "steps")}
                    aria-checked={step.isChecked}
                    aria-label={`Select ${step.description}`}
                  />
                  {step.description}
                </li>
              ))}
            </StyledInstructionsList>
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
  width: 100%;
  height: 160px;
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
  font-size: 1.5rem;
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

const StyledButtonsWrapper = styled.div`
  display: flex;
  gap: 1rem;
  padding-bottom: 1rem;
`;
const StyledMaterialsList = styled.ul`
  list-style-position: inside;
  list-style-type: none;
  text-align: start;
  padding: 0;
  margin: 0;
`;

const StyledInstructionsList = styled.ol`
  list-style-position: inside;
  list-style-type: none;
  padding: 0 1rem;
  margin-bottom: 1rem;
  text-align: start;

  @media screen and (min-width: 640px) {
    list-style-position: inside;
    padding: 0;
    text-align: start;
  }
`;

const StyledCollapsibleWrapper = styled.div`
width: 100%;


  .Collapsible__trigger {
    display: flex;
    font-weight: 700;
    color: var(--color-primary-2);
    width: 100%;
    cursor: pointer;


    -webkit-tap-highlight-color: transparent;
  }
  .Collapsible__contentOuter {
   
  }
  .Collapsible__contentInner {
  
    color: var(--color-primary-2);
    font-weight: 400;
  }
`;
