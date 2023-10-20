import React from "react";
import Browse from "./Browse";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
// import { auth } from "../utils/firebase";
import Login from "./Login";

const Body = () => {
  // const navigate = useNavigate();
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/browse",
      element: <Browse />,
    },
  ]);

  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default Body;
