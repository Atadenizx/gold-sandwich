import { useMutation, useQueryClient } from "@tanstack/react-query";
import { editProductApi } from "../../../services/admin/apiProductsAdmin";
import toast from "react-hot-toast";

function useEditProduct() {
  const queryClient = useQueryClient();
  const { mutate: editProduct, isLoading } = useMutation({
    mutationFn: ({ product, id }) => editProductApi({ product, id }),
    onSuccess: () => {
      toast.success("product has been successfully edited"),
        queryClient.invalidateQueries({
          queryKey: ["Admin_products"],
        });
    },
  });

  return { editProduct, isLoading };
}

export default useEditProduct;
