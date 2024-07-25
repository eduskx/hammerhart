import styled from "styled-components";
import Image from "next/image";







const handleColorType = color => {
    switch (color) {
      case "Intermediate":
        return "#f9b234";
      case "Advanced":
        return "#e44002";
      default:
        return "#3ecd5e";
    }
  };

const StyledTitle = styled.h2`
  font-size: 100%;
`;
const StyledComplexity = styled.p`
  font-size: 90%;
  border-radius: 10px;
  
  width: fit-content;
  padding: 5px;
  background-color: ${({ color }) => handleColorType(color)}
`;
const StyledImage = styled(Image)`
  width: 100%;
  border-radius: 10px 0 0 13px;
  object-fit: fill;
`;
const CardContainer = styled.div`
  display: flex;
  gap: 1rem;
  position: relative;
  overflow:hidden;
  margin:0.5rem;
  
`;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export { StyledTitle, StyledComplexity, StyledImage, CardContainer, Wrapper };
