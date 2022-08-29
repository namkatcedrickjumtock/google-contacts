import Header from "./Header";
import SideBar from "./SideBar";

function Layout({ children }: any) {
  return (
    <div>
      <Header />
      <SideBar />
      {children}
    </div>
  );
}

export default Layout;
