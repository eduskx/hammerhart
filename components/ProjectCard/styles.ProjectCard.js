import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";

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
  box-shadow: 1px 1px 6px 1px #00000072;
  background-color: ${({ color }) => handleColorType(color)};
  border-radius: 10px;
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: row;
  gap: 1rem;
  width: 145px;
  height: 125px;
  box-shadow: var(--inner-shadow-2);
  `;

const CardWrapper = styled.div`
  position: relative;
`;

const StyledImage = styled(Image)`
width: 100%;
  height: 100%;
`;

const StyledTitle = styled.h2`
display: flex;
font-size: .75rem;
  position: absolute;
 margin: 0;
 padding:3px 10px;
 line-height: 1.2;
 
 top:0;
  left:0;
  border-radius: 0 0 10px 0;
  color: var(--color-primary-2);
  background-color: var(--color-secondary-1);
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
`;

const StyledImageTitleWrapper = styled.div`
display:flex ;
 height: 100%;
width: 100%;
border-radius: 10px;
overflow: hidden;
box-shadow: var(--box-shadow-1);
transition: all 0.5s ease;
&:hover,&:focus {
transform-origin: 100% 100%;
transform: rotate(-5deg) translate(0px, 5px);
  }
`;

export {
  StyledImageTitleWrapper,
  CardContainer,
  CardWrapper,
  StyledImage,
  StyledTitle,
  StyledComplexity,
};
