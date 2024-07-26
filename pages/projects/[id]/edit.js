import { useRouter } from "next/router";
import Form from "@/components/Form";
import Link from "next/link";

export default function Edit({ projects, setNewProjects }) {
  const router = useRouter();
  const { id } = router.query;

  const projectData = projects.find((project) => project.id === id);

  if (!projectData) {
    return <h1>No project found</h1>;
  }

  const { title, materials, steps, id: updateId } = projectData;
  console.log("materials: ", materials);

  function editProject(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const newProject = Object.fromEntries(formData);
    newProject.id = updateId;
    newProject.materials = materials;
    newProject.steps = steps;
    console.log("newProject: ", newProject);

    const updatedProjects = projects.map((project) =>
      project.id === id ? newProject : project
    );

    console.log("updatedProjects:", updatedProjects);

    const newProjectUpdated = setNewProjects(updatedProjects);
    console.log("newProjectUpdated: ", newProjectUpdated);

    router.back();
  }

  return (
    <>
      <h2>{`Edit ${title}`}</h2>
      <button onClick={() => router.back()}>Cancel</button>
      <Form
        onSubmit={editProject}
        defaultData={projectData}
        materials={materials}
        steps={steps}
      />
    </>
  );
}
