import { createBrowserRouter } from "react-router-dom";

import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import SignIn from "../pages/SignIn/SignIn";
import BlogPage from "../pages/BlogPage/BlogPage";
import Games from "../pages/Games/Games";
import Controller from "../pages/Controller/Controller";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/signin",
        element: <SignIn></SignIn>,
      },
      {
        path: "/blogs",
        element: <BlogPage></BlogPage>,
      },
      {
        path: "/games",
        element: <Games></Games>,
      },
      {
        path: "/controller",
        element: <Controller />,
      },
    ],
  },
]);

export default router;
