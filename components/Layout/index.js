import Header from "@/components/Header";

const Layout = ({ children, onSearch }) => {
  return (
    <>
      <Header onSearch={onSearch} />
      <main>{children}</main>
    </>
  );
};

export default Layout;
