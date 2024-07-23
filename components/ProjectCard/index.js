import Image from "next/image";
import styled from "styled-components";

export default function ProjectCard({ project }) {
  const { imageUrl, title, complexity } = project;
  return (
    <CardContainer>
      <Image src={imageUrl} alt={title} width={200} height={150} />
      <Wrapper>
        <h2>{title}</h2>
        <p>
          Complexity:
          <br />
          {complexity}
        </p>
      </Wrapper>
    </CardContainer>
  );
}

const CardContainer = styled.div`
  display: flex;
  margin: 1rem 1rem;
  gap: 1rem;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
