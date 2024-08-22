import styled, { css } from "styled-components";
import SearchIcon from "@/public/svg/search.svg";
import { useRouter } from "next/router";

export default function SearchBar({ onSearch, $isNotMobile }) {
  const router = useRouter();

  const isBookmarkPage = router.pathname === "/bookmarks";
  return (
    <>
      <label htmlFor="searchbar"></label>
      <StyledSearchBarIconWrapper $isNotMobile={$isNotMobile}>
        <StyledSearchBar
          type="text"
          id="searchbar"
          name="searchbar"
          placeholder="Search..."
          onChange={onSearch}
          $isBookmarkPage={isBookmarkPage}
        />
        <StyledIcon
          $isBookmarkPage={isBookmarkPage}
          $isNotMobile={$isNotMobile}
        >
          <SearchIcon fill="currentColor" />
        </StyledIcon>
      </StyledSearchBarIconWrapper>
    </>
  );
}
const StyledSearchBarIconWrapper = styled.div`
  display: flex;
  position: relative;
  width: 130px;
  @media screen and (min-width: 640px) {
    width: 200px;
  }
  ${(props) =>
    props.$isNotMobile &&
    css`
      @media screen and (min-width: 640px) {
        display: none;
      }
    `}
`;
const StyledIcon = styled.div`
  display: flex;
  position: absolute;
  justify-content: center;
  align-items: center;
  color: var(--color-primary-1);
  right: 0;
  height: 27px;
  width: 27px;
  border-radius: 10px;
  padding: 5px;
  background-color: var(--color-primary-2);
  ${(props) =>
    props.$isBookmarkPage &&
    css`
      @media screen and (min-width: 640px) {
        outline-offset: -2px;
        outline: 2px solid var(--color-primary-1);
        background-color: var(--color-primary-1);
        color: var(--color-primary-2);
      }
    `}
`;
const StyledSearchBar = styled.input`
  width: 130px;
  height: 27px;
  border-radius: 10px;
  border: 2px solid var(--color-primary-2);
  background-color: var(--color-secondary-1);
  font-size: 0.8rem;
  padding-left: 10px;
  ${(props) =>
    props.$isBookmarkPage &&
    css`
      @media screen and (min-width: 640px) {
        outline-offset: -2px;
        outline: 2px solid var(--color-primary-1);
      }
    `}

  &::placeholder {
    color: #536f5f80;
  }
  &:focus {
    outline-offset: -3px;
    outline: 2px solid var(--color-primary-2);
  }
  @media screen and (min-width: 640px) {
    width: 200px;
  }
`;
