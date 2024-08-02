import { useEffect, useState } from "react";
import ProjectsList from "../ProjectsList";
import styled from "styled-components";

export default function FilterList({ projects }) {
  const complexities = [
    { name: "All", color: "#070ff7" },
    { name: "Beginner", color: "#3ecd5e" },
    { name: "Intermediate", color: "#f9b234" },
    { name: "Advanced", color: "#e44002" },
  ];

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
        {complexities.map((complexity) => (
          <StyledButton
            key={complexity.name}
            onClick={() => filterByComplexity(complexity.name)}
            color={complexity.color}
            className={activeFilter === complexity.name}
          >
            {complexity.name}
          </StyledButton>
        ))}
      </StyledButtonWrapper>
      {filteredProjects.length === 0 ? (
        <StyledEmptyMessage>
          "No {activeFilter} projects available!"
        </StyledEmptyMessage>
      ) : (
        <ProjectsList projects={filteredProjects} />
      )}
    </>
  );
}

const StyledButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1rem;

  @media screen and (min-width: 640px) {
    gap: 2rem;
  }
`;

const StyledButton = styled.button`
  all: unset;
  width: fit-content;
  height: 2rem;
  padding: 0 1rem;
  cursor: pointer;
  color: #fff;
  background-color: ${(props) => props.color};
  border-radius: 2px;
  transition: transform 0.2s ease-in;

  &:focus,
  &:hover {
    outline: 2px solid white;
    transform: translateY(-3px);
  }

  &.active {
    outline: 2px solid white;
    transform: translateY(-3px);
  }
`;
const StyledEmptyMessage = styled.h1`
  text-align: center;
  color: #fff;
  margin-top: 2rem;
`;
