import { useState, useEffect, useCallback } from "react";
import {
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
  StyledSocialMediaIcon,
  StyledNavList
} from "@/components/Header/styles.Header";
import MenuIcon from "@/public/svg/menuIcon_new.svg";
import MenuIconOpen from "@/public/svg/menuIconOpen_new.svg";
import Facebook from "@/public/svg/facebook.svg";
import Instagram from "@/public/svg/instagram.svg";
import XIcon from "@/public/svg/x-icon.svg";
import Youtube from "@/public/svg/youtube.svg";
import SearchBar from "../SearchBar";


export default function Header({ onSearch }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setIsMobile(window.innerWidth <= 640);

      function handleResize() {
        setIsMobile(window.innerWidth <= 640);
      }

      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);

  const toggleMenu = useCallback(() => {
    setIsMenuOpen((prev) => !prev);
  }, []);

  const closeMenu = useCallback(() => {
    setIsMenuOpen(false);
  }, []);

  return (
    <StyledNavBar>
      <StyledAnchor href="/">
        <StyledLogo />
      </StyledAnchor>

      {isMobile ? (
        <>
          <StyledMenuIcon onClick={toggleMenu} $isMenuOpen={isMenuOpen}>
            {isMenuOpen ? <MenuIconOpen /> : <MenuIcon />}
          </StyledMenuIcon>
          {isMenuOpen && (
            <StyledCancelBackground onClick={closeMenu}></StyledCancelBackground>
          )}
          <StyledDropDownDiv $isMenuOpen={isMenuOpen}>
            <StyledMobileNavList>
              <li>
                <StyledListElements href="/">Home</StyledListElements>
              </li>
              <li>
                <StyledListElements href="/bookmarks">My Projects</StyledListElements>
              </li>
            </StyledMobileNavList>
            <StyledSocialBlock>
              <StyledSocialMediaIcon href="http://www.facebook.com" target="_blank">
                <Facebook width="100%" />
              </StyledSocialMediaIcon>
              <StyledSocialMediaIcon href="http://www.instagram.com" target="_blank">
                <Instagram width="100%" />
              </StyledSocialMediaIcon>
              <StyledSocialMediaIcon href="http://www.x.com" target="_blank">
                <XIcon width="100%" />
              </StyledSocialMediaIcon>
              <StyledSocialMediaIcon href="http://www.youtube.com" target="_blank">
                <Youtube width="100%" />
              </StyledSocialMediaIcon>
            </StyledSocialBlock>
          </StyledDropDownDiv>
        </>
      ) : (
        <StyledNavList>
          <SearchBar onSearch={onSearch}/>
          <li>
            <StyledListElements href="/bookmarks">My Projects</StyledListElements>
          </li>
          <li>
            <StyledListElements href="/">Home</StyledListElements>
          </li>
        </StyledNavList>
      )}
      <StyledDivBlocker />
    </StyledNavBar>
  );
}
