import Form from "@/components/Form";
import useLocalStorageState from "use-local-storage-state";
import FilterList from "@/components/FilterList";
import SearchBar from "@/components/SearchBar";
import { useState } from "react";

export default function HomePage({ projects, onAddProject, onBookmark }) {
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

  function handleClearMaterialsAndSteps() {
    setFormMaterials([""]);
    setFormSteps([{ id: "1", description: "" }]);
  }

  return (
    <>
      <Form
        onAddProject={onAddProject}
        projects={projects}
        formMaterials={formMaterials}
        formSteps={formSteps}
        onClearMaterialsAndSteps={handleClearMaterialsAndSteps}
      />

      <SearchBar onSearch={handleSearch} />
      <FilterList
        projects={projects}
        onAddProject={onAddProject}
        onBookmark={onBookmark}
        searchInput={searchInput}
      />
    </>
  );
}
