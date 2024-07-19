import { NavLink } from "react-router-dom";
import Button from "./Button";
import Input from "./Input";
import { useUserContext } from "../services/userContext";

function Header() {
  const { user } = useUserContext();
  console.log("context user", user);

  return (
    <header className="flex items-center justify-evenly gap-8">
      <NavLink to="/">logo</NavLink>
      <div>
        <Input
          type={"text"}
          placeholder="Search your taste"
          style="rounded-full border border-yellow-300 text-center px-10 py-2 active:border-black p-1"
        />
        {/* <input type="text" placeholder="search your taste" /> */}
      </div>
      <div>
        {user ? <NavLink to={"/profile"}>Profile</NavLink> : ""}
        {!user ? (
          <div className="flex gap-4">
            <Button type={"secondary"} options={"px-6 py-2 mr-2"}>
              {" "}
              <NavLink to="/login">login</NavLink>{" "}
            </Button>
            <Button type={"primary"} options={"px-6 py-2"}>
              <NavLink>register</NavLink>
            </Button>
          </div>
        ) : (
          ""
        )}
      </div>
    </header>
  );
}

export default Header;
