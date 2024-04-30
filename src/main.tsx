import React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import Post from "./components/post";
import ErrorPage from "./ErrorPage";
import "./index.css";
import "./inputs.css";
import Authentication from "./routes/AuthenticationPage";
import Contact from "./routes/ContactPage";
import CreatePost from "./routes/CreatePostPage";
import Imprint from "./routes/ImprintPage";
import LandingPageRoute from "./routes/LandingPageRoute";
import Main_feed from "./routes/MainFeed";
import PictureDetailsPage from "./routes/PictureDetailsRoute";
import PrivacyPolicy from "./routes/PrivacyPolicyPage";
import { default as Profile, default as Root } from "./routes/profile";
import Search from "./routes/Search";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/main",
    element: <Main_feed />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/authentication",
    element: <Authentication />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/profile",
    element: <Profile />,
    errorElement: <ErrorPage />,
  },
  {
    path: "main/posts/:postID",
    element: <Post imgLink={""} postLink={""} />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/create_post",
    element: <CreatePost />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/search",
    element: <Search />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/imprint",
    element: <Imprint />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/contact",
    element: <Contact />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/privacy_policy",
    element: <PrivacyPolicy />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/landingpage",
    element: <LandingPageRoute />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/picture_details",
    element: <PictureDetailsPage></PictureDetailsPage>,
    errorElement: <ErrorPage></ErrorPage>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App>
      <RouterProvider router={router} />
    </App>
  </React.StrictMode>
);
