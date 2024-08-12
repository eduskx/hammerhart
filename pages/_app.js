import GlobalStyle from "@/styles";
import projects from "@/lib/projects.js";
import { Saira } from "next/font/google";
import useLocalStorageState from "use-local-storage-state";
// import { useState } from "react";

const saira = Saira({ subsets: ["latin"] });

export default function App({ Component, pageProps }) {
  const [newProjects, setNewProjects] = useLocalStorageState("newProjects", {
    defaultValue: projects,
  });
  // const [imagePreview, setImagePreview] = useState(null);

  function handleUpdateProject(updatedProject) {
    setNewProjects(
      newProjects.map((project) =>
        project.id === updatedProject.id ? updatedProject : project
      )
    );
  }

  // function handleChangeImage(event) {
  //   setImagePreview(event.target.files[0]);
  // }

  return (
    <>
      <GlobalStyle />
      <div className={saira.className}>
        <Component
          {...pageProps}
          projects={newProjects}
          onUpdateProject={handleUpdateProject}
          setNewProjects={setNewProjects}
          // onChangeImage={handleChangeImage}
          // imagePreview={imagePreview}
        />
      </div>
    </>
  );
}
