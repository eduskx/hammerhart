import styled from "styled-components";
import Link from "next/link";

const StyledList = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
  padding: 0;
  margin: 0;
  gap: 1rem;

  @media (min-width: 640px) {
    display: flex;
    justify-content: space-evenly;
    flex-flow: row wrap;
    list-style: none;
    padding: 0;
    margin: 0;
    gap: 1rem;
  }
`;

const StyledListElement = styled.li`
  box-shadow: 1px 1px 6px 1px #000000;
  border-radius: 20px;

  margin: 0 1rem;
  padding: 0.5rem;
  @media (min-width: 640px) {
    width: 45%;
    height: auto;
    margin: 0;
    padding: 0.5rem;
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
`;

export {StyledList,StyledListElement,StyledLink}