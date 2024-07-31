import { createBrowserRouter } from "react-router-dom";

import { routePath } from "../utils/helper";
import { AboutUs, ContactUs, Faqs, Home } from "./dynamicImport";
import Loader from "../components/Loader";

export const router = createBrowserRouter([
  {
    Component: Home,
    path: routePath.HOME,
    hydrateFallbackElement: <Loader />,
  },
  {
    Component: AboutUs,
    path: routePath.ABOUT_US,
  },
  {
    Component: Faqs,
    path: routePath.FAQS,
  },
  {
    Component: ContactUs,
    path: routePath.CONTACT_US,
  },
]);
