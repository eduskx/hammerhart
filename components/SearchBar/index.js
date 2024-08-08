import styled from "styled-components";

export default function SearchBar({ onSearch }) {
  return (
    <StyledContainer>
      <label htmlFor="searchbar"></label>
      <StyledSearchBar
        type="text"
        id="searchbar"
        name="searchbar"
        placeholder="🔎 Search projects"
        onChange={onSearch}
      />
    </StyledContainer>
  );
}

const StyledContainer = styled.div`
  padding-top: 1rem;
  padding-bottom: 2rem;
  display: flex;
  justify-content: center;
`;

const StyledSearchBar = styled.input`
  width: 20rem;
  height: 2.5rem;
  border-radius: 5px;
  border: none;
  background-color: #eaecef;
  font-size: 16px;

  &:focus {
    outline: none;
    background-color: white;
  }
  &:focus::-webkit-input-placeholder {
    color: transparent;
  }
`;
