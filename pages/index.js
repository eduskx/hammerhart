import Form from "@/components/Form";
import useLocalStorageState from "use-local-storage-state";
import FilterList from "@/components/FilterList";

export default function HomePage({ projects, setNewProjects, $onBookmark }) {
  const [formMaterials, setFormMaterials] = useLocalStorageState("materials", {
    defaultValue: [""],
  });

  const [formSteps, setFormSteps] = useLocalStorageState("steps", {
    defaultValue: [{ id: "1", description: "" }],
  });

  return (
    <>
      <Form
        setNewProjects={setNewProjects}
        projects={projects}
        formMaterials={formMaterials}
        setFormMaterials={setFormMaterials}
        formSteps={formSteps}
        setFormSteps={setFormSteps}
      />
      <FilterList
        projects={projects}
        setNewProjects={setNewProjects}
        $onBookmark={$onBookmark}
      />
    </>
  );
}
