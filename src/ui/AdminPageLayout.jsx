import { Outlet } from "react-router-dom";
import AdminSideBar from "./AdminSideBar";

function AdminPageLayout() {
  return (
    <div className="grid h-screen grid-cols-6">
      <div className="bg-yellow-300">
        {" "}
        <AdminSideBar />
      </div>
      <div className="grid-span- col-span-5 bg-neutral-100">
        {" "}
        <Outlet />
      </div>
    </div>
  );
}

export default AdminPageLayout;
