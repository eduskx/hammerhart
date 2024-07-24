import Form from "@/components/Form";
import Header from "@/components/Header";
import ProjectsList from "@/components/ProjectsList";

export default function HomePage({ projects }) {
  return (
    <>
      <Header />
      <Form />
      <ProjectsList projects={projects} />
    </>
  );
}
