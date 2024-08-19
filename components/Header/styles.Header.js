import styled from "styled-components";
import HammerhartLogo from "@/public/svg/hammerhart_logo.svg";

const StyledAnchor = styled.a`
  line-height: 0;
  z-index: 2;
`;
const StyledDivBlocker = styled.div`
  position: fixed;
  right: 0;
  top: 0;
  width: 100%;
  height: 80px;
  background-color: var(--color-primary-1);
  border-radius: 0 0 10px 10px;
  z-index: 1;
`;

const StyledLogo = styled(HammerhartLogo)`
  fill: var(--color-primary-2);
  width: 80px;
  -webkit-tap-highlight-color: transparent;
  &:hover {
    transition: all 0.5s ease;
    transform: scale(1.1);
  }
`;

const StyledCancelBackground = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  width: 100vw;
  height: 100vh;
  background-color: transparent;
  z-index: 1;
`;

const StyledMobileNavList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: end;
  gap: 1rem;
  list-style: none;
  padding-right: 25px;
  z-index: 3;
`;
const StyledNavList = styled.ul`
  display: flex;
  align-items: center;
  gap: 32px;
  list-style: none;
  padding-right: 25px;
  z-index: 3;
`;

const StyledSocialBlock = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  -webkit-tap-highlight-color: transparent;
  padding-right: 25px;
  z-index: 3;
`;

const StyledSocialMediaIcon = styled.a`
  fill: var(--color-primary-2);
  display: flex;
  height: 22px;
  &:hover {
    transition: all 0.5s ease;
    transform: scale(1.1);
  }
`;

const StyledNavBar = styled.div`
  display: flex;
  position: fixed;
  align-items: center;
  justify-content: space-between;
  right: 0;
  top: 0;
  width: 100%;
  height: 80px;
  background-color: var(--color-primary-1);
  border-radius: 0 0 10px 10px;
  padding: 0 25px;
  box-shadow: var(--box-shadow-2);
  z-index: 2;
  @media screen and (min-width: 640px) {
    padding: 0 20%;
    
  }
`;

const StyledMenuIcon = styled.div`
  fill: var(--color-primary-2);
  width: 30px;
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
  z-index: 2;
  &:hover {
    transform: scale(1.1);
  }
`;

const StyledDropDownDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;
  justify-content: end;
  position: fixed;
  gap: 80px;
  padding-bottom: 16px;
  top: 0;
  right: 0;
  width: 100%;
  height: 300px;
  background-color: var(--color-primary-1);
  border-radius: 0 0 10px 10px;
  box-shadow: var(--box-shadow-2);
  z-index: 1;
  transform-origin: 100% 0%;
  transition: transform 0.4s ease;
  transform: ${({ $isMenuOpen }) => ($isMenuOpen ? "scaleY(1)" : "scaleY(0)")};

`;

const StyledListElements = styled.a`
  color: var(--color-primary-2);
  display: flex;
  align-self: end;
  -webkit-tap-highlight-color: transparent;
  font-size: 1.563rem;
  text-decoration: none;
  &:hover {
    transition: all 0.5s ease-in-out;
    transform: scale(1.1);
  }
`;

export {
  StyledAnchor,
  StyledDivBlocker,
  StyledLogo,
  StyledCancelBackground,
  StyledSocialBlock,
  StyledMobileNavList,
  StyledNavBar,
  StyledMenuIcon,
  StyledDropDownDiv,
  StyledListElements,
  StyledSocialMediaIcon,StyledNavList,
};
