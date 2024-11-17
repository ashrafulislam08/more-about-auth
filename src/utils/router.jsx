import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import AllTreatment from "../pages/AllTreatment";
import MyAppointment from "../pages/MyAppointment";
import Profile from "../pages/Profile";
import PrivateRoute from "../Routes/PrivateRoute";
import Details from "../components/Details";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: async () => {
          const servicesRes = await fetch("/service.json");
          const servicesData = await servicesRes.json();

          const feedBackRes = await fetch("/happyclients.json");
          const feedBackData = await feedBackRes.json();

          return { servicesData, feedBackData };
        },
      },
      {
        path: "/all-treatments",
        element: <AllTreatment />,
        loader: () => fetch("/service.json"),
      },
      {
        path: "/my-appointment",
        element: (
          <PrivateRoute>
            <MyAppointment />
          </PrivateRoute>
        ),
      },
      {
        path: "/profile",
        element: <Profile />,
      },
      {
        path: "/details/:id",
        element: <Details />,
        loader: async ({ params }) => {
          const res = await fetch("/service.json");
          const data = await res.json();
          const singleData = data.find((d) => d.id == params.id);
          return singleData;
        },
      },
    ],
  },
]);

export default router;
