import Image from "next/image";
import styled from "styled-components";

export default function ProjectCard({ project }) {
  return (
    <CardContainer>
      <Image
        src={project.imageUrl}
        alt={project.title}
        width={200}
        height={150}
      />
      <Wrapper>
        <h2>{project.title}</h2>
        <p>
          Complexity:
          <br />
          {project.complexity}
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
