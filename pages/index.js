import Form from "@/components/Form";
import Header from "@/components/Header";
import ProjectsList from "@/components/ProjectsList";
import useLocalStorageState from "use-local-storage-state";
import FilterList from "@/components/FilterList";

export default function HomePage({ projects, setNewProjects }) {
  const [formMaterials, setFormMaterials] = useLocalStorageState("materials", {
    defaultValue: [""],
  });

  const [formSteps, setFormSteps] = useLocalStorageState("steps", {
    defaultValue: [{ id: "1", description: "" }],
  });
  return (
    <>
      <Header />
      <Form
        setNewProjects={setNewProjects}
        projects={projects}
        formMaterials={formMaterials}
        setFormMaterials={setFormMaterials}
        formSteps={formSteps}
        setFormSteps={setFormSteps}
      />
      <ProjectsList projects={projects} />
      <FilterList projects={projects} />
    </>
  );
}
