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
  filterOn
}) {
return (
    <>
      <StyledWelcomeSection>
        <StyledPattern />
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
      </StyledWelcomeSection>
      <StyledListSection>
        <StyledPatternBottom />
        <HighlightedProject
          projects={projects}
          onToggleBookmark={onToggleBookmark}
        />
        <StyledToggleSearchWrapper>
          <SearchBar onSearch={onSearch} $isNotMobile />
          <StyledFilterToggleButton
            $filterOn={filterOn}
            onClick={onToggleDisplayFilter}
          >
            <StyledSliders $filterOn={filterOn} fill="currentColor" />
          </StyledFilterToggleButton>
        </StyledToggleSearchWrapper>
        <FilterButtons
          complexities={complexities}
          onFilterChange={onFilterChange}
          activeFilter={activeFilter}
          filterOn={filterOn}
        />
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

const StyledToggleSearchWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 16px 0 16px 0;
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
  
    @media screen and (min-width: 1200px) {
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
`;
const StyledWelcomeText = styled.h1`
  margin-top: 120px;
  padding: 0 16px 0 16px;
  font-size: 2.5rem;
  display: flex;
  flex-direction: column;
  gap: 25px;
  text-align: center;
  line-height: 1.1;
  @media screen and (min-width: 640px) {
    text-align: start;
  }
`;

const StyledPattern = styled.div`
  position: absolute;
  background-image: url("./svg/backgroundImage_white.svg");
  background-repeat: repeat;
  background-attachment: local;
  opacity: 0.2;
  width: 2560px;
  height: 100%;
`;
const StyledPatternBottom = styled(StyledPattern)`
  background-repeat: repeat;
  background-image: url("./svg/backgroundImage_green.svg");
`;

const StyledWelcomeSection = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  height: 100%;
  flex-direction: column;
  color: var(--color-primary-1);
  background-color: var(--color-primary-2);
  box-shadow: var(--inner-shadow-2);
  overflow: hidden;
  align-items: center;
  
  @media screen and (min-width: 1200px) {
    padding: 0 5%;
  }
`;

const StyledListSection = styled(StyledWelcomeSection)`
  height: 100%;
  box-shadow: none;
  background-color: var(--color-primary-1);
`;
