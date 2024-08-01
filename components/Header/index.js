import styled from "styled-components";

export default function Header() {
  return <StyledHeader>Hammerhart</StyledHeader>;
}

const StyledHeader = styled.h1`
  color: white;
  display: flex;
  padding: 1rem;
  justify-content: center;
`;
