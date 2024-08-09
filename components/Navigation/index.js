import styled from "styled-components";
import Link from "next/link.js";

export default function Navigation() {
  return (
    <StyledNavContainer>
      <StyledNavList>
        <li>
          <StyledNavLink href="/">Home</StyledNavLink>
        </li>
        <li>
          <StyledNavLink href="/bookmarks">Bookmarks</StyledNavLink>
        </li>
      </StyledNavList>
    </StyledNavContainer>
  );
}

const StyledNavContainer = styled.nav`
  background-color: #7e6768;
  position: fixed;
  width: 100%;
  bottom: 0;
  padding: 2rem 0;
  z-index: 999;
  border-radius: 20px 20px 0 0;
`;

const StyledNavList = styled.nav`
  display: flex;
  list-style: none;
  justify-content: space-around;
`;

const StyledNavLink = styled(Link)`
  text-decoration: none;
  color: white;
  font-weight: bold;
  cursor: pointer;
  font-size: 20px;
`;
