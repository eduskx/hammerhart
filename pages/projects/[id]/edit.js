import { useRouter } from "next/router";
import Form from "@/components/Form";
import { useEffect, useState } from "react";

export default function Edit({ projects, setNewProjects }) {
  const [formMaterials, setFormMaterials] = useState([""]);

  const [formSteps, setFormSteps] = useState([{ id: "1", description: "" }]);

  const router = useRouter();
  const { id } = router.query;

  const projectData = projects.find((project) => project.id === id);

  useEffect(() => {
    if (projectData) {
      setFormMaterials(projectData.materials);
      setFormSteps(projectData.steps);
    }
  }, [projects]);

  function editProject(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const newProject = Object.fromEntries(formData);
    newProject.id = id;
    newProject.materials = formMaterials;
    newProject.steps = formSteps;
    const updatedProject = projects.map((project) =>
      project.id === id ? newProject : project
    );
    setNewProjects(updatedProject);
    router.back();
  }

  return (
    <>
      <h2>{`Edit ${projectData.title}`}</h2>
      <button onClick={() => router.back()}>Cancel</button>
      <Form
        onSubmit={editProject}
        formMaterials={formMaterials}
        setFormMaterials={setFormMaterials}
        formSteps={formSteps}
        setFormSteps={setFormSteps}
        defaultData={projectData}
      />
    </>
  );
}
