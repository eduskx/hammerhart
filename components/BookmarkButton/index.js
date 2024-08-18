import HeartFilled from "@/public/svg/HeartFilled.svg";
import Heart from "@/public/svg/Heart.svg";
import styled from "styled-components";

export default function BookmarkButton({ isFavorite, onToggleBookmark }) {
  return (
    <StyledButton onClick={onToggleBookmark}>
      {isFavorite ? <HeartFilled width={50} /> : <Heart width={50} />}
    </StyledButton>
  );
}

const StyledButton = styled.button`
  background: var(--color-secondary-1);
  border-radius: 10px;
  fill: red;
  border: none;
  position: absolute;
  z-index: 1;
  bottom: 3px;
  left: 3px;
  cursor: pointer;
`;
