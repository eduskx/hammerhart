import Form from "@/components/Form";
import Header from "@/components/Header";
import FilterByComplexity from "@/components/FilterButton";

export default function HomePage({ projects, setNewProjects }) {
  return (
    <>
      <Header />
      <Form setNewProjects={setNewProjects} projects={projects} />
      <FilterByComplexity projects={projects} />
    </>
  );
}
