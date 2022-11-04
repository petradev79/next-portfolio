import Navbar from '../Navbar';
import Meta from '../Meta';

interface LayoutInterface {
  children: JSX.Element;
}

const Layout = ({ children }: LayoutInterface) => {
  return (
    <>
      <Meta />
      <main>{children}</main>
    </>
  );
};

export default Layout;
