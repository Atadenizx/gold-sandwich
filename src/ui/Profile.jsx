import { useNavigate } from "react-router-dom";
import useLogout from "../features/authentication/useLogout";
import Button from "./Button";
import { signOut } from "../services/apiAuth";

function Profile() {
  const navigate = useNavigate();

  function onHandleSignOut() {
    signOut();
    navigate("/");
  }
  return (
    <div>
      <div>Welcome name</div>
      <ul>
        <li>
          <Button handleOnClick={onHandleSignOut} type="secondary">
            Log Out
          </Button>
        </li>
      </ul>
    </div>
  );
}

export default Profile;
