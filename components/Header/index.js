import {
  StyledAnchor,
  StyledDivBlocker,
  StyledLogo,
  StyledCancelBackground,
  StyledSocalBlock,
  StyledNavList,
  StyledSocialMediaIcon,
  StyledNavBar,
  StyledMenuIcon,
  StyledDropDownDiv,
  StyledListElements,
 
} from "./styles.Header";
import MenuIcon from "@/public/svg/menuIcon_new.svg";
import MenuIconOpen from "@/public/svg/menuIconOpen_new.svg";
import Facebook from "@/public/svg/facebook.svg";
import Instagram from "@/public/svg/instagram.svg";
import X from "@/public/svg/x-icon.svg";
import Youtube from "@/public/svg/youtube.svg";

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

      <StyledMenuIcon onClick={toggleMenu} $isMenuOpen={isMenuOpen}>
        {isMenuOpen ? <MenuIconOpen /> : <MenuIcon />}
      </StyledMenuIcon>
      {isMenuOpen && (
        <StyledCancelBackground onClick={closeMenu}></StyledCancelBackground>
      )}
      <StyledDropDownDiv $isMenuOpen={isMenuOpen}>
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
        <StyledSocalBlock>
          <StyledSocialMediaIcon href="http://www.facebook.com" target="_blank"><Facebook width="100%" /></StyledSocialMediaIcon>
          <StyledSocialMediaIcon href="http://www.instagram.com" target="_blank"><Instagram width="100%" /></StyledSocialMediaIcon>
          <StyledSocialMediaIcon href="http://www.x.com" target="_blank"><X width="100%"/></StyledSocialMediaIcon>
          <StyledSocialMediaIcon href="http://www.youtube.com" target="_blank"><Youtube width="100%"/></StyledSocialMediaIcon>
        </StyledSocalBlock>
      </StyledDropDownDiv>
      <StyledDivBlocker />
    </StyledNavBar>
  );
}
