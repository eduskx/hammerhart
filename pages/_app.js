import GlobalStyle from "@/styles";
import projects from "@/lib/projects.js";
import { Saira } from "next/font/google";
import useLocalStorageState from "use-local-storage-state";
projects;
const saira = Saira({ subsets: ["latin"] });

export default function App({ Component, pageProps }) {
  // const [newProjects, setNewProjects] = useState(projects);
  // console.log(newProjects);

  const [newProjects, setNewProjects] = useLocalStorageState("newProjects", {
    defaultValue: projects,
  });

  return (
    <>
      <GlobalStyle />
      <div className={saira.className}>
        <Component
          {...pageProps}
          setNewProjects={setNewProjects}
          projects={newProjects}
        />
      </div>
    </>
  );
}
