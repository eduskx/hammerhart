import Form from "@/components/Form";
import useLocalStorageState from "use-local-storage-state";
import FilterList from "@/components/FilterList";
import SearchBar from "@/components/SearchBar";
import { useState } from "react";

export default function HomePage({
  projects,
  onAddProject,
  onToggleBookmark,
  onAddMaterialField,
  onRemoveMaterialField,
  onMaterialChange,
  onAddStepField,
  onRemoveStepField,
  onStepChange,
  formMaterials,
  formSteps,
  onClearDynamicFields,
}) {
  const [searchInput, setSearchInput] = useState("");

  function handleSearch(event) {
    const lowerCasedInput = event.target.value.toLowerCase();
    setSearchInput(lowerCasedInput);
  }

  return (
    <>
      <Form
        onAddProject={onAddProject}
        projects={projects}
        formMaterials={formMaterials}
        formSteps={formSteps}
        onClearDynamicFields={onClearDynamicFields}
        onAddMaterialField={onAddMaterialField}
        onRemoveMaterialField={onRemoveMaterialField}
        onMaterialChange={onMaterialChange}
        onAddStepField={onAddStepField}
        onRemoveStepField={onRemoveStepField}
        onStepChange={onStepChange}
      />

      <SearchBar onSearch={handleSearch} />
      <FilterList
        projects={projects}
        onAddProject={onAddProject}
        onToggleBookmark={onToggleBookmark}
        searchInput={searchInput}
      />
    </>
  );
}
