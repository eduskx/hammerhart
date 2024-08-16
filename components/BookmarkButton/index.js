import HeartFilled from "./HeartFilled.svg";
import Heart from "./Heart.svg";
import styled from "styled-components";

export default function BookmarkButton({ isFavorite, onToggleBookmark }) {
  return (
    <StyledButton onClick={onToggleBookmark}>
      {isFavorite ? <HeartFilled width={50} /> : <Heart width={50} />}
    </StyledButton>
  );
}

const StyledButton = styled.button`
  background: rgba(255, 255, 255, 0.8);
  border-radius: 25%;
  fill: red;
  border: none;
  position: absolute;
  z-index: 10;
  top: 0;
  left: 0;
  right: 0;
  width: fit-content;
  cursor: pointer;
`;
