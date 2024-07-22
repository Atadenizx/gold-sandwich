/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Spinner from "./Spinner";
import useUser from "../features/authentication/useUser";

function ProtectedRouteAdmin({ children }) {
  // load the authenticated user
  const { user, isLoading, isFetching, userRole } = useUser();

  const navigate = useNavigate();

  console.log(user);
  console.log(userRole);

  useEffect(() => {
    if (!isLoading && !isFetching) {
      if (!user || !userRole || userRole !== "admin") {
        console.log("navigating to log in from admin route");
        return navigate("/login");
      }
    }
  }, [isLoading, isFetching, user, navigate, userRole]);

  if (isLoading || isFetching) return <Spinner />;

  if (user && userRole === "admin") {
    console.log("gonna return kids");
    return children;
  }

  return null;
}

export default ProtectedRouteAdmin;
