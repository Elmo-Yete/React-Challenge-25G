import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Post from "./pages/Post";
import Create from "./pages/CreateP";
import Relevant from "./pages/Relevant";
import Latest from "./pages/Latest";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/create-post",
    element: <Create />,
  },
  {
    path: "/post",
    element: <Post />,
  },
  {
    path: "/relevant",
    element: <Relevant />,
  },
  {
    path: "/latest",
    element: <Latest />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <RouterProvider router={router} />
);
