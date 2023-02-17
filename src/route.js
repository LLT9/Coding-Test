import MainPage from "./page/MainPage";
import { Outlet } from "react-router-dom";
import { Navigate } from "react-router-dom";
import LoginPage from "./page/LoginPage";
import ProtectedRoute from "./layout/ProtectedRoute";
import WelcomePage from "./page/WelcomePage";
// To define different route
// ref: https://reactrouter.com/en/main/hooks/use-routes
const routes= [
  {
    path: "/",
    element: <Outlet></Outlet>,
    children: [
      { path: "/", element: <WelcomePage /> },
      { path: "/login", element: <LoginPage /> },
      { path: "*", element: <Navigate to="/" replace={true} /> },
    ],
  },
  {
    path: "/main",
    element: (
      <ProtectedRoute>
        <Outlet></Outlet>
      </ProtectedRoute>
    ),
    children: [
      {
        path: "/main",
        element: <MainPage/>,
      },
    ],
  },
];

export default routes;
