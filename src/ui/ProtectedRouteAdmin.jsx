/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom";
import useUser from "../features/authentication/useUser";
import { useEffect } from "react";
import Spinner from "./Spinner";

function ProtectedRouteAdmin({ children }) {
  const navigate = useNavigate();
  // load the authenticated user
  const { user, isLoading, isFetching } = useUser();

  console.log(isFetching);
  console.log(user);
  // useEffect(() => {
  //   if (isLoading) {
  //     console.log("it is loading...");
  //   }
  //   if (!isLoading) {
  //     console.log("user : ", user);
  //     if (!user || !user?.email.includes("admin")) return navigate("/login");
  //   }
  // }, [isLoading, user, navigate]);

  useEffect(() => {
    if (!isLoading && !isFetching) {
      console.log("user:", user.user);
      if (!user || !user?.user?.email?.includes("admin")) {
        navigate("/login");
      }
    }
  }, [isLoading, isFetching, user, navigate]);

  if (isLoading || isFetching) return <Spinner />;
  console.log(user?.user?.email?.includes("admin"));
  console.log(user?.user?.email);

  // if (user?.user?.email?.includes("admin")) return children;
  if (user?.user?.email?.includes("admin")) {
    console.log(user);
    console.log("admin is here");
    return children;
  }

  return null;
}

export default ProtectedRouteAdmin;
