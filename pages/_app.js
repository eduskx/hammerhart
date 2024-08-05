import GlobalStyle from "@/styles";
import projects from "@/lib/projects.js";
<<<<<<< HEAD
import { useState } from "react";
import { Saira } from "next/font/google";
import ModalContent from "@/components/Modal/ModalContent";
=======
import { Saira } from "next/font/google";
import useLocalStorageState from "use-local-storage-state";
>>>>>>> main

const saira = Saira({ subsets: ["latin"] });

export default function App({ Component, pageProps }) {
<<<<<<< HEAD
  const [newProjects, setNewProjects] = useState(projects);
  console.log(newProjects);
=======
  const [newProjects, setNewProjects] = useLocalStorageState("newProjects", {
    defaultValue: projects,
  });

>>>>>>> main
  return (
    <>
      <GlobalStyle />
      <div className={saira.className}>
        <Component
          {...pageProps}
          projects={newProjects}
          setNewProjects={setNewProjects}
        />
      </div>
    </>
  );
}
