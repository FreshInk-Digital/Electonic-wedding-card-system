import React from "react";
import { useRoutes } from "react-router-dom";
import NotFound from "pages/NotFound";
import Landing from "pages/Landing";
// import Home from "pages/Home";
import Register from "pages/Register";
import Login from "pages/Login";
// import Events from "pages/Events";
import EventsOne from "pages/EventsOne";

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
    // {
    //   path: "events",
    //   element: <Events />,
    // },
    {
      path: "eventsOne",
      element: <EventsOne />,
    },
  ]);

  return element;
};

export default ProjectRoutes;