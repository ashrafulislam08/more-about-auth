import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import About from "../pages/About";
import AllTreatment from "../pages/AllTreatment";
import MyAppointment from "../pages/MyAppointment";
import Profile from "../pages/Profile";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/all-treatment",
        element: <AllTreatment />,
      },
      {
        path: "/my-appointment",
        element: <MyAppointment />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
    ],
  },
]);

export default router;
