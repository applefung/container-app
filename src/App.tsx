import "./App.css";

import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Auth from "./pages/Auth";
import DoctorDetail from "doctor/DoctorDetail";
import DoctorList from "doctor/DoctorList";
// import { GlobalContextProvider } from "./providers/context";
import Home from "./pages/Home";
import PharmacyDetail from "pharmacy/PharmacyDetail";
import PharmacyList from "pharmacy/PharmacyList";
import { Provider } from "react-redux";
import { store } from "./stores/global";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    // children: [
    //   {
    //     path: "inbox",
    //     element: <Inbox />,
    //   },
    // ],
  },
  {
    path: "doctors",
    element: <DoctorList />,
    // children: [
    //   {
    //     path: ':id',
    //     element: <DoctorDetail />
    //   }
    // ]
  },
  {
    path: "doctors/:id",
    element: <DoctorDetail />,
  },
  {
    path: "pharmacies",
    element: <PharmacyList />,
    // children: [
    //   {
    //     path: ':id',
    //     element: <DoctorDetail />
    //   }
    // ]
  },
  {
    path: "pharmacies/:id",
    element: <PharmacyDetail />,
  },
  {
    path: "auth",
    element: <Auth />,
  },
]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
