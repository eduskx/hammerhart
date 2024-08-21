import styled, {css} from "styled-components";

export default function FilterButtons({
  complexities,
  onFilterChange,
  filterOn,
  activeFilter,
}) {
  return (
    <>
      <StyledButtonList $filterOn={filterOn}>
        {complexities.map((complexity) => (
          <li key={complexity}>
            <StyledFilterButton
              type="button"
              onClick={() => onFilterChange(complexity)}
              $isActive={activeFilter === complexity}
            >
              {complexity}
            </StyledFilterButton>
          </li>
        ))}
      </StyledButtonList>
    </>
  );
}

const StyledButtonList = styled.ul`
  display: ${({ $filterOn }) => ($filterOn ? "flex" : "none")};
  gap: 16px;
  justify-content: center;
  z-index: 100;
  list-style-type: none;
`;

const StyledFilterButton = styled.button`
  all: unset;
  justify-content: center;
  align-items: center;
  color: var(--color-primary-1);
  height: 27px;
  width: fit-content;
  font-size: 0.7rem;
  padding: 0 10px;
  border-radius: 10px;
  background-color: var(--color-primary-2);
  transition: transform 0.2s ease-in;
  &:focus,
  &:hover {
    outline-offset: -2px;
    outline: 2px solid var(--color-primary-2);
    transform: translateY(-3px);
    background-color: var(--color-primary-1);
    color: var(--color-primary-2);
  }
  ${(props) =>
    props.$isActive &&
    css`
  outline-offset: -2px;
  outline: 2px solid var(--color-primary-2);
  transform: translateY(-3px);
  background-color: var(--color-primary-1);
  color: var(--color-primary-2);
`}
`;
