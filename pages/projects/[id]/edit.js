import { useRouter } from "next/router";
import Form from "@/components/Form";

export default function Edit({ projects, setNewProjects }) {
  const router = useRouter();
  const { id } = router.query;

  const projectData = projects.find((project) => project.id === id);

  if (!projectData) {
    return <h1>No project found</h1>;
  }

  const { title, materials, steps, id: updateId } = projectData;
  //   console.log("materialsEdit: ", materials);
  //   console.log("stepsEdit: ", steps);

  function editProject(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const newProject = Object.fromEntries(formData);
    // console.log("newProject: ", newProject);
    newProject.id = updateId;
    newProject.materials = materials;
    newProject.steps = steps;

    // console.log("UpdatedProject: ", newProject.materials);

    const updatedProject = projects.map((project) =>
      project.id === id ? newProject : project
    );

    // console.log("updatedProjectsArray:", updatedProject);

    const newProjectUpdated = setNewProjects(updatedProject);
    // console.log("newProjectUpdated: ", newProjectUpdated);
    // console.log("projects: ", projects);
    // console.log("Hello edit");
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
        projects={projects}
      />
    </>
  );
}
