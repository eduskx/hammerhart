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
  background-color: var(--color-primary-2);
  border-radius: 0 0 10px 10px;
  z-index: 1;
`;

const StyledLogo = styled(HammerhartLogo)`
  width: 5rem;
  -webkit-tap-highlight-color: transparent;
  z-index: 2;
  &:hover {
    transition: all 0.5s ease;
    transform: scale(1.1);
  }
`;

const StyledBackground = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  width: 100vw;
  height: 100vh;
  background-color: transparent;
  z-index: 1;
`;

const StyledNavList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: end;
  gap: 1rem;
  list-style: none;
  padding-right: 1.563rem;
  z-index: 3;
`;

const StyledSocalList = styled(StyledNavList)`
  flex-direction: row;
  width: 100%;
  padding-right: 1.563rem;
  gap: 2rem;
  -webkit-tap-highlight-color: transparent;
  list-style: none;
  justify-content: end;
  align-items: center;
`;

const StyledSocialMediaIcon = styled.div`
  color: var(--primary-color-2) svg {
    fill: currentColor;
  }
  &:hover {
    transition: all 0.5s ease;
    transform: scale(1.3);
  }
`;

const StyledNavBar = styled.div`
  display: flex;
  position: fixed;
  right: 0;
  top: 0;
  width: 100%;
  height: 80px;
  background-color: var(--color-primary-1);
  border-radius: 0 0 10px 10px;
  align-items: center;
  padding: 16px 25px;
  justify-content: space-between;
  filter: drop-shadow(0px 4px 4px #00000049);
  z-index: 110;
`;

const StyledMenuIcon = styled.div`
  display: block;
  font-size: 0;
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
  z-index: 2;
  transition: opacity 0.3s ease-in-out;
  &:hover {
    transform: scale(1.1);
  }
  & > svg {
    transition: ${({ isMenuOpen }) =>
      isMenuOpen ? "0.3s ease-in-out" : "0.3s ease-in-out"};
  }
`;

const StyledDropDownDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;
  justify-content: end;
  position: fixed;
  gap: 5rem;
  padding-bottom: 1rem;
  top: 0px;
  right: 0;
  width: 100%;
  height: 290px;
  background-color: var(--color-primary-2);
  border-radius: 0 0 10px 10px;
  z-index: 1;
  transform-origin: 100% 0%;
  transition: transform 0.4s ease;
  transform: ${({ $isMenuOpen }) => ($isMenuOpen ? "scaleY(1)" : "scaleY(0)")};
`;

const StyledListElements = styled.a`
  display: flex;
  align-self: self-end;
  -webkit-tap-highlight-color: transparent;
  font-size: 1.563rem;
  color: #f9f5eb;
  text-decoration: none;
  &:hover {
    transition: all 0.5s ease-in-out;
    transform: scale(1.1);
  }
`;

export {StyledAnchor,StyledDivBlocker,StyledLogo,StyledBackground,StyledSocalList,StyledNavList,StyledSocialMediaIcon,StyledNavBar,StyledMenuIcon,StyledDropDownDiv,StyledListElements}