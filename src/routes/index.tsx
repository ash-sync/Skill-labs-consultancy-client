import App from "@/App";
import AboutUs from "@/pages/AboutUs";
import Consultants from "@/pages/Consultants/Consultants";
import Destination from "@/pages/Destination/Destination";
import Home from "@/pages/Home/Home";
import Services from "@/pages/Services/Services";
import Training from "@/pages/Training/Training";
import { createBrowserRouter } from "react-router";


import Login from "@/pages/Login";
import DashboardLayout from "@/components/layout/DashboardLayout";
import Overview from "@/pages/Admin/Overview";
import ManageServices from "@/pages/Admin/ManageServices";
import ManageDestinations from "@/pages/Admin/ManageDestinations";
import ManageCountries from "@/pages/Admin/ManageCountries";
import ManageBookings from "@/pages/Admin/ManageBookings";
import ManageFAQs from "@/pages/Admin/ManageFAQs";
import ManageTestimonials from "@/pages/Admin/ManageTestimonials";
import ManageExperts from "@/pages/Admin/ManageExperts";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/about-us",
        element: <AboutUs></AboutUs>,
      },
      {
        path: "/services",
        element: <Services></Services>,
      },
      {
        path: "/destinations",
        element: <Destination></Destination>,
      },
      {
        path: "/consultants",
        element: <Consultants></Consultants>,
      },
      {
        path: "/training",
        element: <Training></Training>,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/admin/dashboard",
    element: <DashboardLayout />,
    children: [
      {
        index: true,
        element: <Overview />,
      },
      {
        path: "services",
        element: <ManageServices />,
      },
      {
        path: "destinations",
        element: <ManageDestinations />,
      },
      {
        path: "countries",
        element: <ManageCountries />,
      },
      {
        path: "bookings",
        element: <ManageBookings />,
      },
      {
        path: "faqs",
        element: <ManageFAQs />,
      },
      {
        path: "testimonials",
        element: <ManageTestimonials />,
      },
      {
        path: "experts",
        element: <ManageExperts />,
      },
    ],
  },
]);

export default router;
