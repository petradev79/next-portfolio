import Meta from '../Meta';
import Header from '../Header';

const Layout: React.FC<{ children: JSX.Element }> = ({ children }) => {
  return (
    <>
      <Meta />
      {/* <Header /> */}
      <main>{children}</main>
    </>
  );
};

export default Layout;
