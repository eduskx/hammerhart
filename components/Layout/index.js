import Header from '@/components/Header';


const RootLayout = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      
    </>
  );
};

export default RootLayout;