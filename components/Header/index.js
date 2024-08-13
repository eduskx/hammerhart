import styled from "styled-components";
import Link from "next/link";

export default function Header() {
  return (
    <StyledContainer>
      <StyledHeaderLink href="/">
        <h1>⚒️ Hammerhart</h1>
      </StyledHeaderLink>
    </StyledContainer>
  );
}

const StyledContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 1rem;
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 999;
  background-color: #95786c;
  border-radius: 0 0 20px 20px;
`;

const StyledHeaderLink = styled(Link)`
  color: white;
  text-decoration: none;
`;
