import { createBrowserRouter } from "react-router-dom";

import { routePath } from "../utils/helper";
import { Home } from "./dynamicImport";
import Loader from "../components/Loader";

export const router = createBrowserRouter([
  {
    Component: Home,
    path: routePath.HOME,
    hydrateFallbackElement: <Loader />,
    HydrateFallback: Loader,
  },
]);
