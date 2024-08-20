import styled from "styled-components";

export default function FilterButtons({ complexities, onFilterChange }) {
  return (
    <>
      <StyledButtonList>
        {complexities.map((complexity) => (
          <li key={complexity}>
            <StyledButton
              type="button"
              onClick={() => onFilterChange(complexity)}
            >
              {complexity}
            </StyledButton>
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
  list-style-type: none;
`;

const StyledButton = styled.button`
  background-color: var(--color-primary-2);
  color: white;
  border: none;
  border-radius: 10px;
  padding: 4px 8px;
`;
