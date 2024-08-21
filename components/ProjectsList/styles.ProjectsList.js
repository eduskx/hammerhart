import Link from "next/link";
import styled from "styled-components";

const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
`;
const StyledUl = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 30px;
  list-style: none;
  margin-top: 30px;
  padding-bottom: 30px;
  @media screen and (min-width: 1275px) {
    padding: 0 10% 30px 10%;
  }
`;

const StyledNoSearchResults = styled.p`
  color: black;
  padding: 16px;
  text-align: center;
`;

export { StyledLink, StyledUl, StyledNoSearchResults };
