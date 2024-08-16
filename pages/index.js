import Form from "@/components/Form";
import FilterList from "@/components/FilterList";
import SearchBar from "@/components/SearchBar";
import { useState } from "react";
import HighlightedProject from "@/components/HighlitedProject";

export default function HomePage({
  projects,
  onAddProject,
  onToggleBookmark,
  onProcessFormData,
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
        onProcessFormData={onProcessFormData}
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
