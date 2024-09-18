import { createBrowserRouter } from "react-router-dom";
import App from "../../app/App";
import { ErrorPage } from "../../pages/ErrorPage";
import { MainPage } from "../../pages/MainPage";
import { OrgsPage } from "../../pages/OrgsPage";

export enum AppRoutes {
  MAIN = "main",
  ORGS = "orgs",
  NOT_FOUND = "not_found",
}

export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: "/",
  [AppRoutes.ORGS]: "/orgs",
  [AppRoutes.NOT_FOUND]: "*",
};

export const routerConfig = createBrowserRouter([
  {
    path: RoutePath.main,
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: RoutePath.main,
        element: <MainPage />,
      },
      {
        path: RoutePath.orgs,
        element: <OrgsPage />,
      },
    ],
  },
]);
