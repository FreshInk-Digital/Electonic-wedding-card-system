import React from "react";
import { useRoutes } from "react-router-dom";
import NotFound from "pages/NotFound";
import Landing from "pages/Landing";
import Register from "pages/Register";
import Login from "pages/Login";

const ProjectRoutes = () => {
  let element = useRoutes([
    { path: "/", element: <Landing /> },
    { path: "*", element: <NotFound /> },
    // {
    //   path: "landing",
    //   element: <Landing />,
    // },
    {
      path: "register",
      element: <Register />,
    },
    {
      path: "login",
      element: <Login />,
    },
  ]);

  return element;
};

export default ProjectRoutes;