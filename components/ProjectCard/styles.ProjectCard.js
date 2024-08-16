import styled from "styled-components";
import Image from "next/image";

const handleColorType = (color) => {
    switch (color) {
      case "Intermediate":
        return `var(--color-intermediate)`;
      case "Advanced":
        return "#e44002";
      default:
        return "#3ecd5e";
    }
  };

const CardContainer = styled.div`
  box-shadow: 1px 1px 6px 1px #00000072;
  background: black;
  background-color: black;
  border: 1px solid red;;
  border-radius: 10px;
  position: relative;
  overflow: hidden;
  width: 145px;
  height: 125px;
  display: flex;
  flex-direction: row;
  list-style: none;
  padding: 0;
  margin: 0;
  gap: 1rem;
  transition: all 0.5s ease;
 
  @media screen and (min-width: 640px) {
    width: 350px;
  height: 200px;
  }
`;

const StyledImage = styled(Image)`
  width: 100%;
  height: 100%;
  border-radius: 10px 0 0 13px;
  object-fit: cover;
  z-index: 2;
  margin: 1rem;
`;
const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;



const StyledTitle = styled.h2`
  padding-top: 1rem;
  padding-right: 0.5rem;
  font-size: 100%;
  color: white;
  z-index: 2;
`;

const StyledComplexity = styled.p`
  font-size: 90%;
  padding: 0 15px 5px 0;
  text-align: end;
  color: white;
  z-index: 2;
`;

export {CardContainer, StyledImage, Wrapper, StyledTitle, StyledComplexity}