import { useRouter } from "next/router";
import Form from "@/components/Form";
import { useEffect } from "react";

export default function Edit({
  projects,
  setNewProjects,
  materials,
  setMaterials,
  steps,
  setSteps,
}) {
  const router = useRouter();
  const { id } = router.query;

  const projectData = projects.find((project) => project.id === id);

  useEffect(() => {
    if (projectData) {
      setMaterials(projectData.materials);
      setSteps(projectData.steps);
    }
  }, [projectData, setMaterials, setSteps]);

  function editProject(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const newProject = Object.fromEntries(formData);
    newProject.id = id;
    newProject.materials = materials;
    newProject.steps = steps;
    const updatedProject = projects.map((project) =>
      project.id === id ? newProject : project
    );
    setNewProjects(updatedProject);
    router.back();
  }

  return (
    <>
      <h2>{`Edit ${projectData?.title}`}</h2>
      <button onClick={() => router.back()}>Cancel</button>
      <Form
        onSubmit={editProject}
        defaultData={projectData}
        materials={materials}
        setMaterials={setMaterials}
        setSteps={setSteps}
        steps={steps}
        projects={projects}
      />
    </>
  );
}
