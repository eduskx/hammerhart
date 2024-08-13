import Form from "@/components/Form";
import useLocalStorageState from "use-local-storage-state";
import FilterList from "@/components/FilterList";
import SearchBar from "@/components/SearchBar";
import { useState } from "react";
import AddButton from "@/components/Modals/AddButton";

export default function HomePage({
  projects,
  onAddProject,
  onBookmark,
  onAddMaterialField,
  onRemoveMaterialField,
  onMaterialChange,
  onAddStepField,
  onRemoveStepField,
  onStepChange,
  formMaterials,
  formSteps,
  onClearDynamicFields,
  onToggleForm,
  toggleFormModal,
}) {
  const [searchInput, setSearchInput] = useState("");

  function handleSearch(event) {
    const lowerCasedInput = event.target.value.toLowerCase();
    setSearchInput(lowerCasedInput);
  }

  return (
    <>
      {/* <Form
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
      /> */}

      <SearchBar onSearch={handleSearch} />
      <AddButton
        onToggleForm={onToggleForm}
        toggleFormModal={toggleFormModal}
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
      <FilterList
        projects={projects}
        onAddProject={onAddProject}
        onBookmark={onBookmark}
        searchInput={searchInput}
      />
    </>
  );
}
