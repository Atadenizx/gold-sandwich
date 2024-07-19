import { useQuery } from "@tanstack/react-query";
import { getCurrentUser } from "../../services/apiAuth";

function useUser() {
  const {
    isLoading,
    isFetching,
    data: user,
    error,
  } = useQuery({
    queryKey: ["user"],
    queryFn: getCurrentUser,
    staleTime: 30 * 1000,
  });

  console.log("user:", user);

  if (error) throw new Error(error.message);

  return { isLoading, user, isFetching };
}

export default useUser;
