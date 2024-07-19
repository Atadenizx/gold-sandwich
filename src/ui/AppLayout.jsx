import { Outlet } from "react-router-dom";
import Header from "./Header";

function AppLayout() {
  return (
    <div>
      <div className="mx-5 my-10">
        <Header />
      </div>
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default AppLayout;
