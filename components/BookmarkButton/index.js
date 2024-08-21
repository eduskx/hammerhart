import HeartFilled from "@/public/svg/HeartFilled.svg";
import Heart from "@/public/svg/Heart.svg";
import HammerSmashed from "@/public/svg/hammerSmashed.svg";
import Hammer from "@/public/svg/hammer.svg";
import styled, {css} from "styled-components";


export default function BookmarkButton({ isFavorite, onToggleBookmark, $isHighlighted }) {
  return (
    <StyledButton onClick={onToggleBookmark} >
      {isFavorite ? <StyledHeartFilled $isHighlighted={$isHighlighted}/> : <StyledHeart $isHighlighted={$isHighlighted} />}
    </StyledButton>
  );
}

const StyledButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--color-secondary-1);
  border-radius: 10px;
  border: none;
  position: absolute;
  z-index: 1;
  bottom: 3px;
  left: 3px;
  cursor: pointer;

`;

const StyledHeartFilled = styled(HeartFilled)`
  width: 25px;
  height: 25px;

  ${(props) =>
    props.$isHighlighted &&
    css`
      height: 30px;
      width: 30px;
    `}
`;
const StyledHeart = styled(Heart)`
  width: 25px;
  height: 25px;
  opacity: 0.6;
 ${(props) =>
    props.$isHighlighted &&
    css`
      height: 30px;
      width: 30px;
    `}
`;
