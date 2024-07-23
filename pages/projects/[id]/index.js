import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";
import { FaArrowLeftLong } from "react-icons/fa6";
import { uid } from "uid";
import styled from "styled-components";

export default function ProjectDetailsPage({ projects }) {
  const router = useRouter();
  const { id } = router.query;
  

  const projectData = projects.find((project) => project.id === id);

  if (!projectData) {
    return null;
  }

  const {
    title,
    imageUrl,
    complexity,
    description,
    duration,
    materials,
    steps,
  } = projectData;

  


  return (
    <>
      <Link href="/">
        <FaArrowLeftLong /> Back
      </Link>

      <h2>{title}</h2>
     <StyledImageWrapper>
        <Image src={imageUrl} alt={title} width={300} height={200}/>
        <StyledP>{complexity}</StyledP>
     </StyledImageWrapper>
        
      
      <p>{description}</p>
      <p>Duration: {duration}</p>

      <ul>
        <h3>Materials</h3>
        {materials.map((material) => (
          <li key={uid()}>{material}</li>
        ))}
      </ul>

      <ol>
        <h3>Instructions</h3>
        {steps.map((step) => (
          <li key={step.id}>{step.description}</li>
        ))}
      </ol>
    </>
  );
}

const StyledImageWrapper = styled.div`
position: relative;

width: fit-content;
`;

const StyledP = styled.p`
position: absolute;
bottom: 0.5rem;
right: 0.5rem;
padding: 5px;
margin: 0;
background-color: white;
border-radius: 10px;
`;