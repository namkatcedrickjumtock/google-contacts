import { useSession } from "next-auth/react";
import Login from "../pages/Login";
import Header from "./Header";
import SideBar from "./SideBar";

function Layout({ children }: any) {
  const { data: session } = useSession();
  if (!session) return <Login />;
  return (
    <div className="max-h-screen overflow-y-hidden">
      <Header />
      <div className="flex">
        <SideBar />
        {children}
      </div>
    </div>
  );
}

export default Layout;
