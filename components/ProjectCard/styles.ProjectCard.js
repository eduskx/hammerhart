import styled from "styled-components";
import Image from "next/image";


const handleColorType = (color) => {
  switch (color) {
    case "Intermediate":
      return "var(--color-intermediate)";
    case "Advanced":
      return "var(--color-advanced)";
    default:
      return "var(--color-beginner)";
  }
};

const CardContainer = styled.div`
  background-color: ${({ color }) => handleColorType(color)};
  position: relative;
  display: flex;
  flex-direction: row;
  overflow: hidden;
  border-radius: 10px;
  width: 145px;
  height: 125px;
  box-shadow: var(--inner-shadow-1);
  @media screen and (min-width: 640px) {
    width: 315px;
  height: 175px;
  }
`;
const StyledShadowDiv = styled.div`
position: absolute;
border-radius: 10px;
width: 145px;
  height: 125px;
  box-shadow: var(--box-shadow-2);
  @media screen and (min-width: 640px) {
    width: 315px;
  height: 175px;
  }
`;
const CardWrapper = styled.div`
  position: relative;
 `;

const StyledImage = styled(Image)`
  width: 100%;
  height: 100%;
  
`;

const StyledTitleBackground = styled.div`
  display: flex;
  position: absolute;
  padding: 3px 5px 3px 10px;
  top: 0;
  left: 0;
  background-color: var(--color-secondary-1);
  border-radius: 0 0 10px 0;
  @media screen and (min-width: 640px) {
font-size: 1.3rem;
padding: 3px 8px 3px 15px;
  }
 
 `;

const StyledTitle = styled.p`
  font-size: 0.75rem;
  margin: 0;
  
  line-height: 1.2;
  color: var(--color-primary-2);
  @media screen and (min-width: 640px) {
font-size: 1.3rem;
  }
 
`;

const StyledComplexity = styled.p`
  display: flex;
  position: absolute;
  align-items: center;
  padding: 5px 5px;
  bottom: 5px;
  right: 5px;
  font-size: 0.5rem;
  height: 14px;
  border-radius: 25px;
  outline: 1px solid var(--color-primary-2);
  outline-offset: -1px;
  background-color: var(--color-secondary-1);
  color: var(--color-primary-2);
  backdrop-filter: blur(5px);
  @media screen and (min-width: 640px) {
font-size: .8rem;
padding: 10px 10px;
outline: 2px solid var(--color-primary-2);
outline-offset: -1px;
  }
`;

const StyledImageTitleWrapper = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: var(--box-shadow-1);
  transition: all 0.5s ease;
  &:hover,
  &:focus {
    transform-origin: 100% 100%;
    transform: rotate(-5deg) translate(0, 5px);
  }
`;

export {
  StyledImageTitleWrapper,
  CardContainer,
  CardWrapper,
  StyledImage,
  StyledTitle,
  StyledComplexity,
  StyledTitleBackground,
  StyledShadowDiv,
};
