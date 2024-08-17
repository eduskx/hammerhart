import {
  StyledAnchor,
  StyledDivBlocker,
  StyledLogo,
  StyledBackground,
  StyledSocalList,
  StyledNavList,
  StyledSocialMediaIcon,
  StyledNavBar,
  StyledMenuIcon,
  StyledDropDownDiv,
  StyledListElements,
} from "./styles.Header";
import MenuIcon from "@/public/svg/menuIcon.svg";
import MenuIconOpen from "@/public/svg/menuIconOpen.svg";
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
      <StyledMenuIcon onClick={toggleMenu} isMenuOpen={isMenuOpen}>
        {isMenuOpen ? <MenuIconOpen /> : <MenuIcon />}
      </StyledMenuIcon>
      {isMenuOpen && <StyledBackground onClick={closeMenu}></StyledBackground>}
      <StyledDropDownDiv
        $isMenuOpen={isMenuOpen}
        onClick={(event) => event.stopPropagation()}
      >
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


