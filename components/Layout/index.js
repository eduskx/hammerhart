import Header from "@/components/Header";
import { useRouter } from "next/router";

const Layout = ({ children, onSearch }) => {
  return (
    <>
      <Header onSearch={onSearch} />
      <main>{children}</main>
    </>
  );
};

export default Layout;
