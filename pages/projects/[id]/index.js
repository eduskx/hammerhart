import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";
import { FaArrowLeftLong } from "react-icons/fa6";
import { uid } from "uid";

export default function ProjectDetailsPage({ projects }) {
  const router = useRouter();
  const { id } = router.query;
  console.log(router);

  const projectData = projects.find((project) => project.id === id);
  const {
    title,
    imageUrl,
    complexity,
    description,
    duration,
    materials,
    steps,
  } = projectData;

  console.log("data: ", projectData);
  if (!projectData) {
    return null;
  }

  return (
    <>
      <Link href="/">
        <FaArrowLeftLong /> Back
      </Link>

      <h2>{title}</h2>
      <Image src={imageUrl} alt={title} width={300} height={200} />
      <p>{complexity}</p>
      <p>{description}</p>
      <p>{duration}</p>

      <ul>
        {materials.map((material) => (
          <li key={uid()}>{material}</li>
        ))}
      </ul>

      <ol>
        {steps.map((step) => (
          <li key={step.id}>{step.description}</li>
        ))}
      </ol>
    </>
  );
}
