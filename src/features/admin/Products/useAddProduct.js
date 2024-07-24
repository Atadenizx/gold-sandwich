import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addProductApi } from "../../../services/admin/apiProductsAdmin";
import toast from "react-hot-toast";

function useAddProduct() {
  const queryClient = useQueryClient();
  const { mutate: addProduct, isLoading } = useMutation({
    mutationFn: ({ product }) => addProductApi({ product }),
    onSuccess: () => {
      toast.success("new produc has been successfully added"),
        queryClient.invalidateQueries({
          queryKey: ["Admin_products"],
        });
    },
  });

  return { addProduct, isLoading };
}

export default useAddProduct;
