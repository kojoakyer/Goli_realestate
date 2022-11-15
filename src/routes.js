import * as React from "react";
import { useRoutes } from "react-router-dom";
import Home from "./pages/Home";

function ERoutes() {
  const element = useRoutes([
    {
      path: "/",
      element: <Home/>
    }

  ]);

  return element;
}

export default ERoutes