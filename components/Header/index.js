import { useState, useEffect,} from "react";
import MenuIcon from "@/public/svg/menuIcon_new.svg";
import MenuIconOpen from "@/public/svg/menuIconOpen_new.svg";
import Facebook from "@/public/svg/facebook.svg";
import Instagram from "@/public/svg/instagram.svg";
import XIcon from "@/public/svg/x-icon.svg";
import Youtube from "@/public/svg/youtube.svg";
import SearchBar from "../SearchBar";
import { useRouter } from "next/router";
import styled from "styled-components";
import HammerhartLogo from "@/public/svg/hammerhart_logo.svg";

export default function Header({ onSearch }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const router = useRouter();

  const isBookmarkPage = router.pathname === "/bookmarks";
  const isDetailsPage = router.pathname.includes("/projects");

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

  function toggleMenu() {
    setIsMenuOpen((prev) => !prev);
  }

  function closeMenu() {
    setIsMenuOpen(false);
  }
  return (
    <StyledNavBar>
      <StyledAnchor href="/">
        <StyledLogo
          $isBookmarkPage={isBookmarkPage}
          $isDetailsPage={isDetailsPage}
        />
      </StyledAnchor>

      {isMobile ? (
        <>
          <StyledMenuIcon
            onClick={toggleMenu}
            $isMenuOpen={isMenuOpen}
            $isBookmarkPage={isBookmarkPage}
            $isDetailsPage={isDetailsPage}
          >
            {isMenuOpen ? <MenuIconOpen /> : <MenuIcon />}
          </StyledMenuIcon>
          {isMenuOpen && (
            <StyledCancelBackground
              onClick={closeMenu}
            ></StyledCancelBackground>
          )}
          <StyledDropDownDiv
            $isMenuOpen={isMenuOpen}
            $isBookmarkPage={isBookmarkPage}
            $isDetailsPage={isDetailsPage}
          >
            <StyledMobileNavList>
              <li>
                <StyledListElements
                  href="/"
                  $isBookmarkPage={isBookmarkPage}
                  $isDetailsPage={isDetailsPage}
                >
                  Home
                </StyledListElements>
              </li>
              <li>
                <StyledListElements
                  href="/bookmarks"
                  $isBookmarkPage={isBookmarkPage}
                  $isDetailsPage={isDetailsPage}
                >
                  My Projects
                </StyledListElements>
              </li>
            </StyledMobileNavList>
            <StyledSocialBlock>
              <StyledSocialMediaIcon
                href="http://www.facebook.com"
                target="_blank"
                $isBookmarkPage={isBookmarkPage}
                $isDetailsPage={isDetailsPage}
              >
                <Facebook width="100%" />
              </StyledSocialMediaIcon>
              <StyledSocialMediaIcon
                href="http://www.instagram.com"
                target="_blank"
                $isBookmarkPage={isBookmarkPage}
                $isDetailsPage={isDetailsPage}
              >
                <Instagram width="100%" />
              </StyledSocialMediaIcon>
              <StyledSocialMediaIcon
                href="http://www.x.com"
                target="_blank"
                $isBookmarkPage={isBookmarkPage}
                $isDetailsPage={isDetailsPage}
              >
                <XIcon width="100%" />
              </StyledSocialMediaIcon>
              <StyledSocialMediaIcon
                href="http://www.youtube.com"
                target="_blank"
                $isBookmarkPage={isBookmarkPage}
                $isDetailsPage={isDetailsPage}
              >
                <Youtube width="100%" />
              </StyledSocialMediaIcon>
            </StyledSocialBlock>
          </StyledDropDownDiv>
        </>
      ) : (
        <StyledNavList>
          <SearchBar onSearch={onSearch} isDetailsPage={isDetailsPage} />
          <li>
            <StyledListElements
              href="/bookmarks"
              $isBookmarkPage={isBookmarkPage}
              $isDetailsPage={isDetailsPage}
            >
              My Projects
            </StyledListElements>
          </li>
          <li>
            <StyledListElements
              href="/"
              $isBookmarkPage={isBookmarkPage}
              $isDetailsPage={isDetailsPage}
            >
              Home
            </StyledListElements>
          </li>
        </StyledNavList>
      )}
      <StyledDivBlocker
        $isBookmarkPage={isBookmarkPage}
        $isDetailsPage={isDetailsPage}
      />
    </StyledNavBar>
  );
}

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
  background-color: ${({ $isBookmarkPage, $isDetailsPage }) =>
    $isBookmarkPage || $isDetailsPage
      ? "var(--color-primary-2)"
      : "var(--color-primary-1)"};
  border-radius: 0 0 10px 10px;
  z-index: 1;
`;

const StyledLogo = styled(HammerhartLogo)`
  fill: ${({ $isBookmarkPage, $isDetailsPage }) =>
    $isBookmarkPage || $isDetailsPage
      ? "var(--color-primary-1)"
      : "var(--color-primary-2)"};
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
  gap: 16px;
  list-style: none;
  padding-right: 25px;
  z-index: 3;
`;
const StyledNavList = styled.ul`
  display: flex;
  align-items: center;
  gap: 20px;
  list-style: none;
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
  fill: ${({ $isBookmarkPage, $isDetailsPage }) =>
    $isBookmarkPage || $isDetailsPage
      ? "var(--color-primary-1)"
      : "var(--color-primary-2)"};
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
  background-color: ${({ $isBookmarkPage, $isDetailsPage }) =>
    $isBookmarkPage || $isDetailsPage
      ? "var(--color-primary-2)"
      : "var(--color-primary-1)"};
  border-radius: 0 0 10px 10px;
  padding: 0 10%;
  box-shadow: var(--box-shadow-2);
  z-index: 111;
`;

const StyledMenuIcon = styled.div`
  fill: ${({ $isBookmarkPage, $isDetailsPage }) =>
    $isBookmarkPage || $isDetailsPage
      ? "var(--color-primary-1)"
      : "var(--color-primary-2)"};
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
  border-radius: 0 0 10px 10px;
  box-shadow: var(--box-shadow-2);
  z-index: 1;
  transform-origin: 100% 0%;
  transition: transform 0.4s ease;
  transform: ${({ $isMenuOpen }) => ($isMenuOpen ? "scaleY(1)" : "scaleY(0)")};
  background-color: ${({ $isBookmarkPage, $isDetailsPage }) =>
    $isBookmarkPage || $isDetailsPage
      ? "var(--color-primary-2)"
      : "var(--color-primary-1)"};
`;

const StyledListElements = styled.a`
  color: ${({ $isBookmarkPage, $isDetailsPage }) =>
    $isBookmarkPage || $isDetailsPage
      ? "var(--color-primary-1)"
      : "var(--color-primary-2)"};
  display: flex;
  align-self: end;
  -webkit-tap-highlight-color: transparent;
  font-size: 1.563rem;
  text-decoration: none;
  &:hover {
    transition: all 0.5s ease-in-out;
    transform: scale(1.1);
  }
  @media screen and (min-width: 640px) {
    font-size: 1.1rem;
  }
`;
