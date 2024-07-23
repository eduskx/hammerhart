import Header from "@/components/Header";
import ProjectsList from "@/components/ProjectsList";

export default function HomePage({ projects }) {
  return (
    <>
      <Header />
      <ProjectsList projects={projects} />
    </>
  );
}
