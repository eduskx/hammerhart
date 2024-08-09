import styled from "styled-components";
import Header from "../Header/index.js";
import Navigation from "../Navigation/index.js";

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <StyledMain>{children}</StyledMain>
      <Navigation />
    </>
  );
}

const StyledMain = styled.main`
  padding-top: 5rem;
  padding-bottom: 5rem;
`;
