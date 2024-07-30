import Form from "@/components/Form";
import Header from "@/components/Header";
import ProjectsList from "@/components/ProjectsList";

export default function HomePage({ newProjects, setNewProjects }) {
  console.log(setNewProjects);
  return (
    <>
      <Header />
      <Form setNewProjects={setNewProjects} newProjects={newProjects} />
      <ProjectsList newProjects={newProjects} />
    </>
  );
}
