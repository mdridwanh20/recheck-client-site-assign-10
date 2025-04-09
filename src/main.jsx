import { createRoot } from "react-dom/client";
import "./index.css";

import { BrowserRouter } from "react-router";
import AppRoutes from "./AppRoutes/AppRoutes.jsx";
import { Toaster } from "react-hot-toast";
import AuthProvider from "./AuthProvider/AuthProvider.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <AuthProvider>
      <AppRoutes></AppRoutes>
      <Toaster></Toaster>
    </AuthProvider>
  </BrowserRouter>
);
