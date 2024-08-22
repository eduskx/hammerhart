import SearchBar from "@/components/SearchBar";
import HighlightedProject from "@/components/HighlightedProject";
import styled, { css } from "styled-components";
import Sliders from "@/public/svg/Sliders.svg";
import FilterButtons from "@/components/FilterButtons";
import ProjectsList from "@/components/ProjectsList";
import AddButton from "@/components/Modals/AddButton";

export default function HomePage({
  projects,
  onToggleBookmark,
  onSearch,
  searchInput,
  complexities,
  activeFilter,
  onFilterChange,
  onToggleForm,
  isFormOpen,
  onAddProject,
  onProcessFormData,
  onToggleDisplayFilter,
  filterOn,
}) {
  return (
    <>
      <StyledWelcomeSection>
      
       <StyledWelcomeHighlightWrapper>
          <StyledWelcomeAddButtonWrapper>
            <StyledWelcomeText>
              Hammerhart
              <StyledWelcomeTextSpan>
                Your “Do-It-Yourself” App for Planning, Creating and Sharing your
                Vision.
              </StyledWelcomeTextSpan>
              <StyledWelcomeTextSpan>
                Start your Project, today!
              </StyledWelcomeTextSpan>
            </StyledWelcomeText>
            <AddButton
              onAddProject={onAddProject}
              onProcessFormData={onProcessFormData}
              onToggleForm={onToggleForm}
              isFormOpen={isFormOpen}
            />
          </StyledWelcomeAddButtonWrapper>
          <HighlightedProject
            $isDesktopOn
            projects={projects}
            onToggleBookmark={onToggleBookmark}
          />
       </StyledWelcomeHighlightWrapper>
      </StyledWelcomeSection>
      <StyledListSection>
       
        <HighlightedProject
          $isDesktop
          projects={projects}
          onToggleBookmark={onToggleBookmark}
        />
        <StyledProjectsWrapper>
          <StyledToggleSearchWrapper>
            <StyledProjectsTitle>Projects</StyledProjectsTitle>
            <StyledToggleSearchWrapper>
              <SearchBar onSearch={onSearch} $isNotMobile />
              <StyledFilterToggleButton
                $filterOn={filterOn}
                onClick={onToggleDisplayFilter}
              >
                <StyledSliders $filterOn={filterOn} fill="currentColor" />
              </StyledFilterToggleButton>
            </StyledToggleSearchWrapper>
          </StyledToggleSearchWrapper>
          <FilterButtons
            complexities={complexities}
            onFilterChange={onFilterChange}
            activeFilter={activeFilter}
            filterOn={filterOn}
          />
        </StyledProjectsWrapper>
        <StyledDivider />
        <ProjectsList
          projects={projects}
          onToggleBookmark={onToggleBookmark}
          searchInput={searchInput}
          activeFilter={activeFilter}
        />
      </StyledListSection>
    </>
  );
}

const StyledWelcomeHighlightWrapper = styled.div`
width: 100%;
display:flex;
align-items: center;
justify-content: space-between;
padding: 150px 10% 30px 10%;
`;

const StyledDivider = styled.div`
  width: 80%;
  height: 3px;
  border-radius: 6px;
  background-color: var(--color-primary-2);
  @media screen and (min-width: 1275px) {
    margin: 0 10%;
  }
`;
const StyledWelcomeAddButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  
  @media screen and (min-width: 640px) {
    align-items: start;
  }
  @media screen and (min-width: 1275px) {
    flex-direction: column;
  }
`;
const StyledProjectsTitle = styled.h2`
  color: var(--color-primary-2);
  align-self: start;
  
`;
const StyledProjectsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 30px 10% 16px 10%;
  width: 100%;
  gap: 16px;
  @media screen and (min-width: 640px) {
    flex-direction: row;
  }
  @media screen and (min-width: 1275px) {
    flex-direction: row;
    padding: 30px 10% 16px 10%;
    margin: 0 10%;
  }
`;
const StyledToggleSearchWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
`;

const StyledFilterToggleButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 27px;
  border-radius: 10px;
  color: var(--color-primary-1);
  border: none;
  background-color: var(--color-primary-2);
  z-index: 10;
  transition: transform 0.2s ease-in;
  ${(props) =>
    props.$filterOn &&
    css`
      outline-offset: -2px;
      outline: 2px solid var(--color-primary-2);
      background-color: var(--color-primary-1);
      color: var(--color-primary-2);
      transform: translateY(-3px);
    `}

  @media screen and (min-width: 1275px) {
    &:hover {
      outline-offset: -2px;
      outline: 2px solid var(--color-primary-2);
      transform: translateY(-3px);
      background-color: var(--color-primary-1);
      color: var(--color-primary-2);
    }
  }
`;
const StyledSliders = styled(Sliders)`
  transform: ${({ $filterOn }) => ($filterOn ? "none" : "rotate(180deg)")};
`;
const StyledWelcomeTextSpan = styled.span`
  line-height: 1.25;
  font-size: 1.25rem;
  font-weight: 400;
  @media screen and (min-width: 640px) {
    font-size: 2rem;
  }
`;
const StyledWelcomeText = styled.h1`
  font-size: 2.5rem;
  display: flex;
  flex-direction: column;
  gap: 25px;
  text-align: center;
  line-height: 1.1;
  @media screen and (min-width: 640px) {
    text-align: start;
    font-size: 4rem;
  }
`;

const StyledWelcomeSection = styled.div`
  display: flex;
  position: relative;
  justify-content: space-between;
  height: 100%;
  flex-direction: column;
  color: var(--color-primary-1);
  background-color: var(--color-primary-2);
  box-shadow: var(--inner-shadow-2);
  overflow: hidden;
  align-items: center;

  @media screen and (min-width: 640px) {
    flex-direction: row;
  }
  @media screen and (min-width: 1275px) {
    flex-direction: row;
  }
`;

const StyledListSection = styled(StyledWelcomeSection)`
  height: 100%;
  box-shadow: none;
  background-color: var(--color-primary-1);
  padding-bottom: 30px;
  @media screen and (min-width: 640px) {
    flex-direction: column;
  }
  @media screen and (min-width: 1275px) {
    padding: 0;
    flex-direction: column;
  }
`;
