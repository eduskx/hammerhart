import Form from "@/components/Form";
import Header from "@/components/Header";
import ProjectsList from "@/components/ProjectsList";

export default function HomePage({
  projects,
  setNewProjects,
  materials,
  setMaterials,
  steps,
  setSteps,
}) {
  return (
    <>
      <Header />
      <Form
        setNewProjects={setNewProjects}
        projects={projects}
        materials={materials}
        setMaterials={setMaterials}
        steps={steps}
        setSteps={setSteps}
      />
      <ProjectsList projects={projects} />
    </>
  );
}
