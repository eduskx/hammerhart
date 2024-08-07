import HeartFilled from "./HeartFilled.svg";
import Heart from "./Heart.svg";
import styled from "styled-components";

export default function BookmarkButton({ $onBookmark, isFavorite }) {
  return (
    <StyledButton onClick={$onBookmark}>
      {isFavorite ? <HeartFilled width={50} /> : <Heart width={50} />}
    </StyledButton>
  );
}

const StyledButton = styled.button`
  background: transparent;
  border-radius: 25%;
  padding: 1rem;
  fill: red;
  border-color: transparent;
  position: absolute;
  margin: -9rem 20rem 20rem 15rem;
  z-index: 1;
`;
