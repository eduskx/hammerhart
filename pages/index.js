import Form from "@/components/Form";
import FilterList from "@/components/FilterList";
import SearchBar from "@/components/SearchBar";
import { useState } from "react";
import HighlightedProject from "@/components/HighlightedProject";
import styled from "styled-components";
import Sliders from "@/public/svg/Sliders.svg";

export default function HomePage({
  projects,
  onAddProject,
  onToggleBookmark,
  onProcessFormData,
  onSearch,
  searchInput,
}) {
  return (
    <>
      <StyledWelcomeSection>
        {/*      <Form
          onAddProject={onAddProject}
          projects={projects}
          onProcessFormData={onProcessFormData}
          /> */}

        <StyledPatternTop />
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

        <StyledCreateButton>Create a Project +</StyledCreateButton>
      </StyledWelcomeSection>
      <StyledListSection>
        <StyledPatternBottom />
        <HighlightedProject
          projects={projects}
          onToggleBookmark={onToggleBookmark}
        />
        <StyledToggleSearchWrapper>
          <SearchBar onSearch={onSearch} />
          <StyledFilterToggleButton>
            <Sliders fill="currentColor" />
          </StyledFilterToggleButton>
        </StyledToggleSearchWrapper>
        <FilterList
          projects={projects}
          onAddProject={onAddProject}
          onToggleBookmark={onToggleBookmark}
          searchInput={searchInput}
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
  border: none;
`;

const StyledCreateButton = styled.button`
  all: unset;
  cursor: pointer;
  align-self: center;
  text-align: center;
  width: 180px;
  height: 35px;
  color: var(--color-primary-2);
  background-color: var(--color-primary-1);
  border-radius: 10px;
  box-shadow: var(--box-shadow-2);
  z-index: 1;
  margin-bottom: 50px;
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
  z-index: 1;
`;

const StyledPatternTop = styled.div`
  position: absolute;
  background-image: url("./svg/backgroundImage_new.svg");
  background-repeat: no-repeat;
  background-position: 0% 0%;
  height: 200%;
  width: 100%;
`;
const StyledPatternBottom = styled.div`
  position: absolute;
  background-image: url("./svg/backgroundImage_new.svg");
  background-repeat: no-repeat;
  background-position: 60% 130%;
  height: 100%;
  width: 100%;
`;

const StyledWelcomeSection = styled.div`
  display: flex;
  position: relative;
  width: 100vw;
  flex-direction: column;
  color: var(--color-primary-1);
  background-color: var(--color-primary-2);
  box-shadow: var(--inner-shadow-2);
  overflow: hidden;
  @media screen and (min-width: 640px) {
    padding: 0 20%;
  }
`;
const StyledListSection = styled(StyledWelcomeSection)`
  height: 100%;
  background-color: var(--color-primary-1);
  padding-bottom: 20px;
`;
