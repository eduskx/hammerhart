import styled from "styled-components";
import MenuIcon from "@/public/image/menuIcon.svg";
import MenuIconOpen from "@/public/image/menuIconOpen.svg";
import Facebook from "@/public/image/facebook.svg";
import Instagram from "@/public/image/instagram.svg";
import X from "@/public/image/x-icon.svg";
import Youtube from "@/public/image/youtube.svg";
import HammerhartLogo from "@/public/image/hammerhart_logo.svg";
import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function toggleMenu() {
    setIsMenuOpen(!isMenuOpen);
  }

  function closeMenu() {
    setIsMenuOpen(false);
  }

  return (
    <StyledNavBar>
      <StyledAnchor href="/">
        <StyledLogo />
      </StyledAnchor>
      <StyledMenuIcon onClick={toggleMenu}>
        {isMenuOpen ? <MenuIconOpen /> : <MenuIcon />}
      </StyledMenuIcon>
      <StyledBackground $isMenuOpen={isMenuOpen} onClick={closeMenu}>
      </StyledBackground>
        <StyledDropDownDiv $isMenuOpen={isMenuOpen} onClick={(event) => event.stopPropagation()}>
          <StyledNavList>
            <li>
              <StyledListElements href="/">Home</StyledListElements>
            </li>
            <li>
              <StyledListElements href="/bookmarks">
                My Projects
              </StyledListElements>
            </li>
          </StyledNavList>
          <StyledSocalList>
            <li>
              <a href="http://www.facebook.com/" target="_blank">
                <StyledSocialMediaIcon>
                  <Facebook />
                </StyledSocialMediaIcon>
              </a>
            </li>
            <li>
              <a href="http://www.instagram.com/" target="_blank">
                <StyledSocialMediaIcon>
                  <Instagram />
                </StyledSocialMediaIcon>
              </a>
            </li>
            <li>
              <a href="http://www.x.com/" target="_blank">
                <StyledSocialMediaIcon>
                  <X />
                </StyledSocialMediaIcon>
              </a>
            </li>
            <li>
              <a href="http://www.youtube.com/" target="_blank">
                <StyledSocialMediaIcon>
                  <Youtube />
                </StyledSocialMediaIcon>
              </a>
            </li>
          </StyledSocalList>
        </StyledDropDownDiv>
        <StyledDivBlocker></StyledDivBlocker>
    </StyledNavBar>
  );
}

const StyledDivBlocker = styled.div`
  position: fixed;
  right: 0;
  top: 0;
  width: 100%;
  height: 80px;
  background-color: #536f5f;
  border-radius: 0 0 10px 10px;
  z-index: 1;
`;


const StyledAnchor = styled.a`
  display: block;
  font-size: 0;
  z-index: 2;
`;

const StyledBackground = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  width: 100vw;
  height: 100vh;
  background-color: transparent;
  z-index: 1;
  display: ${({$isMenuOpen}) => (!$isMenuOpen ? "none" : "block")};
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
  width: 100100%;
  padding-right: 1.563rem;
  gap: 2rem;
  -webkit-tap-highlight-color: transparent;
  list-style: none;
  justify-content: end;
  align-items: center;
`;

const StyledSocialMediaIcon = styled.div`
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
  background-color: #536f5f;
  border-radius: 0 0 10px 10px;
  align-items: center;
  padding: 16px 25px;
  justify-content: space-between;
  filter: drop-shadow(0px 4px 4px #00000049);
  z-index: 110;
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

const StyledMenuIcon = styled.div`
  display: block;
  font-size: 0;
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
  z-index: 2;
  &:hover {
    transition: all 0.5s ease;
    transform: scale(1.1);
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
  top: 0;
  right: 0;
  width: 100%;
  height: 290px;
  background-color: #536f5f;
  border-radius: 0 0 10px 10px;
  z-index: 1;
  animation: ${({ $isMenuOpen }) => ($isMenuOpen ? 'fadeInNav' : 'fadeOutNav')} 0.4s ease-in-out 0s 1 normal forwards;

  @keyframes fadeInNav {
    0% {
      transform: scaleY(0);
      transform-origin: 100% 0%;
    }
    100% {
      transform: scaleY(1);
      transform-origin: 100% 0%;
    }
  }

  @keyframes fadeOutNav {
    0% {
      transform: scaleY(1);
      transform-origin: 100% 0%;
    }
    100% {
      transform: scaleY(0);
      transform-origin: 100% 0%;
    }
  }
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
