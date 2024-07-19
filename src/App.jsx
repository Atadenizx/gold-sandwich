import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./ui/AppLayout";
import Error from "./ui/Error";
import Home from "./ui/Home";
import AdminPageProducts from "./features/admin/Products/AdminPageProducts";
import Menus from "./features/menus/Menus";
import Products from "./features/products/Products";
import ProductDetails from "./features/products/ProductDetails";
import Cart from "./features/cart/Cart";
import Checkout from "./ui/Checkout";
import Login from "./ui/Login";
import Profile from "./ui/Profile";
import AdminPageMenus from "./features/admin/AdminPageMenus";
import AdminPageOrders from "./features/admin/AdminPageOrders";
import PageNotFound from "./ui/PageNotFound";
import { Toaster } from "react-hot-toast";
import ProtectedRouteClient from "./ui/ProtectedRouteClient";
import ProtectedRouteAdmin from "./ui/ProtectedRouteAdmin";
import AdminPageLayout from "./ui/AdminPageLayout";
import { UserProvider } from "./services/userContext";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 30,
    },
  },
});

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/menus", element: <Menus /> },
      { path: "/products", element: <Products /> },
      { path: "/products/:productId", element: <ProductDetails /> },
      { path: "/cart", element: <Cart /> },
      { path: "/checkout", element: <Checkout /> },
      {
        path: "/profile",
        element: (
          <ProtectedRouteClient>
            <Profile />
          </ProtectedRouteClient>
        ),
      },
    ],
  },
  {
    path: "/admin",
    element: (
      <ProtectedRouteAdmin>
        <AdminPageLayout />
      </ProtectedRouteAdmin>
    ),
    errorElement: <Error />,
    children: [
      { index: true, element: <AdminPageProducts /> },
      { path: "products", element: <AdminPageProducts /> },
      { path: "menus", element: <AdminPageMenus /> },
      { path: "orders", element: <AdminPageOrders /> },
    ],
  },
  { path: "*", element: <PageNotFound />, errorElement: <Error /> },
  { path: "/login", element: <Login />, errorElement: <Error /> },
]);

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <UserProvider>
        <ReactQueryDevtools initialIsOpen={false} />
        <RouterProvider router={router} />
        <Toaster
          position="top-center"
          gutter={12}
          containerStyle={{ margin: "8px" }}
          toastOptions={{
            success: {
              duration: 3000,
            },
            error: {
              duration: 5000,
            },
            style: {
              fontSize: "16px",
              maxWidth: "500px",
              padding: "16px 24px",
              backgroundColor: "var(--color-grey-0)",
              color: "var(--color-grey-700)",
            },
          }}
        />
      </UserProvider>
    </QueryClientProvider>
  );
}

export default App;
