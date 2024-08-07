import styled from "styled-components";
import { useRouter } from "next/router";
import Link from "next/link.js";

const List = styled.ul`
  list-style: none;
  display: flex;
  background-color: #584849;
  border: 3px solid black;

  bottom: 0px;
  right: 0px;
  left: 0px;
  justify-content: space-around;
  padding: 1rem;
  margin: 0rem;
`;

const NavLink = styled(Link)`
  text-decoration: none;
  color: black;
  padding: 0 0.3rem;
  font-weight: bold;
  &:hover {
    background-color: #a48476;
  }
`;

export default function Navigation() {
  const router = useRouter();

  return (
    <nav>
      <List>
        <li>
          <NavLink href="/">Home</NavLink>
        </li>
        <li>
          <NavLink href="/bookmark">Bookmark</NavLink>
        </li>
      </List>
    </nav>
  );
}
