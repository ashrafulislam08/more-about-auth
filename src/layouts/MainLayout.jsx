import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const MainLayout = () => {
  return (
    <div>
      <Navbar />
      <div className="w-[80%] mx-auto mx-w-[1200px] mt-6">
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;
