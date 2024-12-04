import { createBrowserRouter } from "react-router-dom";

import { routePath } from "../utils/helper";
import {
  AboutUs,
  ContactUs,
  Faqs,
  Home,
  Login,
  Dashboard,
  Currency,
  Account,
} from "./dynamicImport";
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
  {
    Component: Login,
    path: routePath.LOGIN,
  },
  {
    Component: Dashboard,
    path: routePath.DASHBOARD,
    children: [
      {
        Component: Currency,
        path: routePath.CURRENCY,
      },
      {
        Component: Account,
        path: routePath.ACCOUNT,
      },
    ],
  },
]);
