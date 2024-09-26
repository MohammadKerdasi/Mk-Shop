import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import ProductProvider from "./contexts/ProductContext.jsx";
import SidebarProvider from "./contexts/SidebarContext.jsx";
import CartContext from "./contexts/CartContext.jsx";
import { RouterProvider, createBrowserRouter, Navigate } from "react-router-dom";

// Import pages
import Home from "./pages/Home";
import ProductDetails from "./pages/ProductDetails";
import Login from "./pages/Login";  
import ErrorPage from "./pages/ErrorPage";

// Create the router
const router = createBrowserRouter([
  {
    path: "/",  
    element: localStorage.getItem("token") ? <Navigate to="/home" /> : <Login />, 
    errorElement: <ErrorPage />,
  },
  {
    path: "/home",
    element: <App />,  
    children: [
      {
        path: "",  // Home page at "/home"
        element: <Home />,
      },
      {
        path: "/home/product/:id",  // Relative path for product details at "/home/product/:id"
        element: <ProductDetails />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <SidebarProvider>
    <CartContext>
      <ProductProvider>
        <StrictMode>
          <RouterProvider router={router} />
        </StrictMode>
      </ProductProvider>
    </CartContext>
  </SidebarProvider>
);
