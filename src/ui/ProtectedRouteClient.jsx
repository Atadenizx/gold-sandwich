import { useEffect } from "react";
import useUser from "../features/authentication/useUser";
import { useNavigate } from "react-router-dom";
import { useUserContext } from "../services/userContext";

function ProtectedRouteClient({ children }) {
  const { setUser } = useUserContext();
  const { user, isLoading } = useUser();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoading) {
      if (!user || user.email === "admin@goldsandwich.com") {
        return navigate("/login");
      }
      if (user && !user.email?.includes("admin")) {
        setUser(user);
      }
    }
  }, [isLoading, user, navigate, setUser]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (user && user.email !== "admin@goldsandwich.com") {
    return children;
  }

  return null;
}

export default ProtectedRouteClient;
