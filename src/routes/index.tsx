import { lazy } from "react";
import App from "@/App";
import { createBrowserRouter } from "react-router";
import DashboardLayout from "@/components/layout/DashboardLayout";

const Home = lazy(() => import("@/pages/Home/Home"));
const AboutUs = lazy(() => import("@/pages/AboutUs"));
const Consultants = lazy(() => import("@/pages/Consultants/Consultants"));
const Destination = lazy(() => import("@/pages/Destination/Destination"));
const Services = lazy(() => import("@/pages/Services/Services"));
const Training = lazy(() => import("@/pages/Training/Training"));
const Login = lazy(() => import("@/pages/Login"));

const Overview = lazy(() => import("@/pages/Admin/Overview"));
const ManageServices = lazy(() => import("@/pages/Admin/ManageServices"));
const ManageDestinations = lazy(() => import("@/pages/Admin/ManageDestinations"));
const ManageCountries = lazy(() => import("@/pages/Admin/ManageCountries"));
const ManageBookings = lazy(() => import("@/pages/Admin/ManageBookings"));
const ManageFAQs = lazy(() => import("@/pages/Admin/ManageFAQs"));
const ManageTestimonials = lazy(() => import("@/pages/Admin/ManageTestimonials"));
const ManageExperts = lazy(() => import("@/pages/Admin/ManageExperts"));

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
    path: "/admin/login",
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
