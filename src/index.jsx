import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Root from "./routes/Root";
import Map from "./routes/Map";
import Camera from "./routes/Camera";
import Report from "./routes/Report";
import TreeProfile from "./routes/TreeProfile";
import Log from "./routes/Log";
import Account from "./routes/Account";
import Social from "./routes/Social";
import Friends from "./routes/Friends";
import Challenges from "./routes/Challenges";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Map />,
      },
      {
        path: "/map",
        element: <Map />,
      },
      {
        path: "/camera",
        element: <Camera />,
      },
      {
        path: "/treeprofile",
        element: <TreeProfile />,
      },
      {
        path: "/report",
        element: <Report />,
      },
      {
        path: "/log",
        element: <Log />,
      },
      {
        path: "/account",
        element: <Account />,
      },
      {
        path: "/social",
        element: <Social />,
      },
      {
        path: "friends",
        element: <Friends />,
      },
      {
        path: "challenges",
        element: <Challenges />,
      },
    ],
  },
]);

//const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
