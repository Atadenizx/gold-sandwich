import { NavLink, useNavigate } from "react-router-dom";
import { signOut } from "../services/apiAuth";

function AdminSideBar() {
  const navigate = useNavigate();

  function onHandleSignOut() {
    console.log("sign out");
    signOut();
    navigate("/");
    // window.location.reload();
  }

  return (
    <div className="flex h-full flex-col items-center justify-center gap-10 text-xl">
      <NavLink
        className={({ isActive }) =>
          isActive
            ? "ml-4 block w-full rounded-l-full bg-neutral-100 py-4 text-center"
            : "py-3"
        }
        to="stats"
      >
        Stats
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive
            ? "ml-4 block w-full rounded-l-full bg-neutral-100 py-4 text-center"
            : "py-3"
        }
        to="menus"
      >
        Menus
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive
            ? "ml-4 block w-full rounded-l-full bg-neutral-100 py-4 text-center"
            : "py-3"
        }
        to="products"
      >
        Products
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive
            ? "ml-4 block w-full rounded-l-full bg-neutral-100 py-4 text-center"
            : "py-3"
        }
        to="orders"
      >
        Orders
      </NavLink>
      <div onClick={onHandleSignOut}>
        <NavLink>Logout</NavLink>
      </div>
    </div>
  );
}

export default AdminSideBar;
