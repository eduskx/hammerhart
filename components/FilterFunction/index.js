import { useEffect, useState } from "react";
import ProjectsList from "../ProjectsList";
import styled from "styled-components";
export default function FilterByComplexity({ projects }) {
  const complexities = ["All", "Beginner", "Intermediate", "Advanced"];
  const colors = ["Blue", "#3ecd5e", "#f9b234", "#e44002"];
  const [filteredProjects, setFilteredProjects] = useState(projects);
  const [activeFilter, setActiveFilter] = useState("All");
  
  useEffect(() => {
    setFilteredProjects(projects);
  }, [projects]);

  const filterByComplexity = (complexity) => {
    setActiveFilter(complexity);
    if (complexity === "All") {
      setFilteredProjects(projects);
    } else {
      const filtered = projects.filter(
        (project) => project.complexity === complexity
      );
      setFilteredProjects(filtered);
    }
  };

  return (
    <>
      <StyledButtonWrapper>
        {complexities.map((complexity, index) => (
          <StyledButton
            key={complexity}
            onClick={() => filterByComplexity(complexity)}
            color={colors[index]}
          >
            {complexity}
          </StyledButton>
        ))}
      </StyledButtonWrapper>
      <ProjectsList projects={filteredProjects} />
    </>
  );
}
const StyledButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1rem;
  @media screen and (min-width: 640px) {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 2rem;
  }
`;

const StyledButton = styled.button`

  all: unset;
  width: fit-content;
  height: 2rem;
  padding: 0 1rem 0 1rem;
  margin: 0;
  cursor: pointer;
  color: #fff;
  background-color: ${(props) => props.color};
  border-radius: 2px;
  &:focus
  {
    outline: 2px solid white;
    background-color: ${(props) => props.color};
    color: #fff;
    transform: translateY(-3px);
  }
  @media screen and (min-width: 640px) {
    all: unset;
  width: fit-content;
  height: 2rem;
  padding: 0 1rem 0 1rem;
  margin: 0;
  cursor: pointer;
  color: #fff;
  background-color: ${(props) => props.color};
  border-radius: 2px;
  &:focus,
  &:hover {
    outline: 2px solid white;
    background-color: ${(props) => props.color};
    color: #fff;
    transform: translateY(-3px);
  }
}
`;
