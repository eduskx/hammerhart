import Form from "@/components/Form";
import Header from "@/components/Header";
import useLocalStorageState from "use-local-storage-state";
import FilterList from "@/components/FilterList";
import SearchBar from "@/components/SearchBar";
import { useState } from "react";

export default function HomePage({ projects, setNewProjects }) {
  const [searchInput, setSearchInput] = useState("");

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
      <SearchBar setSearchInput={setSearchInput} />
      <FilterList projects={projects} searchInput={searchInput} />
    </>
  );
}
