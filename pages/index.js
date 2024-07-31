import Form from "@/components/Form";
import Header from "@/components/Header";
import ProjectsList from "@/components/ProjectsList";

export default function HomePage({ projects, setNewProjects }) {
  console.log(setNewProjects);
  return (
    <>
      <Header />
      <Form setNewProjects={setNewProjects} projects={projects} />
      <ProjectsList projects={projects} />
    </>
  );
}
