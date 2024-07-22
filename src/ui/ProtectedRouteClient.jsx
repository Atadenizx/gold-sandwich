import { useEffect } from "react";
import useUser from "../features/authentication/useUser";
import { useNavigate } from "react-router-dom";
import { useUserContext } from "../services/userContext";
import Spinner from "./Spinner";

function ProtectedRouteClient({ children }) {
  const { setUser } = useUserContext();
  const { user, isLoading, isFetching, userRole } = useUser();
  const navigate = useNavigate();

  console.log(user);
  console.log(userRole);

  useEffect(() => {
    if (!isLoading && !isFetching) {
      if (!user || userRole) {
        console.log("navigating to log in from client route");

        return navigate("/login");
      }
      if (user && userRole !== "admin") {
        setUser(user);
      }
    }
  }, [isLoading, user, navigate, setUser, isFetching, userRole]);

  if (isLoading) {
    return <Spinner />;
  }

  if (user && !userRole) {
    return children;
  }

  return null;
}

export default ProtectedRouteClient;
