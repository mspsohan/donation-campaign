import { Outlet } from "react-router-dom";
import Navbar from "../components/Header/Navbar";

const MainLayout = () => {
   return (
      <div>
         <div className="container mx-auto relative z-10">
            <Navbar></Navbar>
         </div>
         <div>
            <Outlet></Outlet>
         </div>
      </div>
   );
};

export default MainLayout;