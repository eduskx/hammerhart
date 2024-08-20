import styled from "styled-components";

export default function FilterButtons({ complexities, onFilterChange }) {
  return (
    <>
      <StyledButtonList>
        {complexities.map((complexity) => (
          <li key={complexity}>
            <button type="button" onClick={() => onFilterChange(complexity)}>
              {complexity}
            </button>
          </li>
        ))}
      </StyledButtonList>
    </>
  );
}

const StyledButtonList = styled.ul`
  display: flex;
  gap: 1rem;
  justify-content: center;
  z-index: 100;
  list-style: none;
`;
