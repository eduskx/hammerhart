import Link from "next/link";
import styled from "styled-components";

const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
`;
const StyledUl = styled.ul`
  display: flex;
  flex-wrap: wrap;
  height: 100%;
  justify-content: center;
  gap: 30px;
list-style: none;
 margin-top: 10px;
 padding: 0 5%;
`;

const StyledNoSearchResults = styled.p`
  color: black;
  padding: 1rem;
  text-align: center;
`;

export { StyledLink, StyledUl, StyledNoSearchResults };
