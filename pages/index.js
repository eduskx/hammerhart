import Form from "@/components/Form";
import Header from "@/components/Header";
import useLocalStorageState from "use-local-storage-state";
import FilterList from "@/components/FilterList";
import SearchBar from "@/components/SearchBar";
import { useState } from "react";
import AddButton from "@/components/Modals/AddButton";

export default function HomePage({ projects, setNewProjects }) {
  const [searchInput, setSearchInput] = useState("");

  function handleSearch(event) {
    const lowerCasedInput = event.target.value.toLowerCase();
    setSearchInput(lowerCasedInput);
  }

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
      <SearchBar onSearch={handleSearch} />
      <AddButton
        projects={projects}
        setNewProjects={setNewProjects}
        formMaterials={formMaterials}
        setFormMaterials={setFormMaterials}
        formSteps={formSteps}
        setFormSteps={setFormSteps}
      />
      <FilterList projects={projects} searchInput={searchInput} />
    </>
  );
}
