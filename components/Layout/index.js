import styled from "styled-components";
import Header from "../Header/index.js";
import Navigation from "../Navigation/index.js";

const Wrapper = styled.div`
  height: 100vh;
  display: grid;
  grid-template-rows: 5rem auto 4rem;
`;

const Heading = styled.h1`
  text-align: center;
`;

const Main = styled.main`
  overflow-y: scroll;
`;

export default function Layout({ children }) {
  return (
    <Wrapper>
      <Header></Header>
      <Main>{children}</Main>
      <Navigation />
    </Wrapper>
  );
}
