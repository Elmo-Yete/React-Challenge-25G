import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Login from "./pages/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <h1>Home paige con los posts</h1>,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <h3>Aqui ira la vista de register</h3>,
  },
  {
    path: "/create-post",
    element: <h4>Aqui se va a crear el post</h4>,
  },
  {
    path: "/post",
    element: <h5>Aqui en teoria va el post en especifico</h5>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
