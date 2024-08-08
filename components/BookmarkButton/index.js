import HeartFilled from "./HeartFilled.svg";
import Heart from "./Heart.svg";
import styled from "styled-components";

export default function BookmarkButton({ isFavorite, $onBookmark }) {
  return (
    <StyledButton onClick={$onBookmark}>
      {isFavorite ? <HeartFilled width={50} /> : <Heart width={50} />}
    </StyledButton>
  );
}

const StyledButton = styled.button`
  background: rgba(255, 255, 255, 0.8);
  border-radius: 25%;
  fill: red;
  border-color: transparent;
  position: absolute;
  z-index: 10;
  top: 0rem;
  left: 0%;
  right: 0%;
  width: fit-content;
`;
