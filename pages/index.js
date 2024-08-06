import Form from "@/components/Form";
import Header from "@/components/Header";
import FilterList from "@/components/FilterList";

export default function HomePage({ projects, setNewProjects }) {
  console.log("HomePage", projects);
  return (
    <>
      <Header />
      <Form setNewProjects={setNewProjects} projects={projects} />
      <FilterList projects={projects} />
    </>
  );
}
