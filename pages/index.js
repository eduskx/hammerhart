import FilterList from "@/components/FilterList";
import SearchBar from "@/components/SearchBar";
import { useState } from "react";
import HighlightedProject from "@/components/HighlitedProject";
import AddButton from "@/components/Modals/AddButton";

export default function HomePage({
  projects,
  onAddProject,
  onToggleBookmark,
  onProcessFormData,
  onToggleForm,
  isFormOpen,
}) {
  const [searchInput, setSearchInput] = useState("");

  function handleSearch(event) {
    const lowerCasedInput = event.target.value.toLowerCase();
    setSearchInput(lowerCasedInput);
  }

  return (
    <>
      <AddButton
        onAddProject={onAddProject}
        onProcessFormData={onProcessFormData}
        onToggleForm={onToggleForm}
        isFormOpen={isFormOpen}
      />

      <HighlightedProject
        projects={projects}
        onToggleBookmark={onToggleBookmark}
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
