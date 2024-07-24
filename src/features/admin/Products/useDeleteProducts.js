import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteProductApi } from "../../../services/admin/apiProductsAdmin";
import toast from "react-hot-toast";

function useDeleteProducts() {
  const queryClient = useQueryClient();
  const { mutate: deleteProduct, isLoading } = useMutation({
    mutationFn: (id) => {
      console.log("mutation id", id);
      return deleteProductApi(id);
    },
    onSuccess: () => {
      toast.success("product has been successfully deleted"),
        queryClient.invalidateQueries({
          queryKey: ["Admin_products"],
        });
    },
    onError: (error) => {
      if (error.status === 409) {
        toast.error("Conflict: Product could not be deleted.");
      } else {
        toast.error("An error occurred: " + error.message);
      }
    },
  });

  return { deleteProduct, isLoading };
}

export default useDeleteProducts;
