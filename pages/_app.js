import GlobalStyle from "@/styles";
import projects from "@/lib/projects.js";
import { useState } from "react";
import { Saira } from "next/font/google";
import ModalContent from "@/components/Modal/ModalContent";

const saira = Saira({ subsets: ["latin"] });

export default function App({ Component, pageProps }) {
  const [newProjects, setNewProjects] = useState(projects);
  console.log(newProjects);
  return (
    <>
      <GlobalStyle />
      <div className={saira.className}>
        <Component
          {...pageProps}
          newProjects={newProjects}
          setNewProjects={setNewProjects}
        />
      </div>
    </>
  );
}
