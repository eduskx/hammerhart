import Image from "next/image";

export default function ProjectCard({ project }) {
  return (
    <div>
      <h2>{project.title}</h2>
      <Image
        src={project.imageUrl}
        alt={project.title}
        width={200}
        height={150}
      />
      <p>{project.description}</p>
    </div>
  );
}
