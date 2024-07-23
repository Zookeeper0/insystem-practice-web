import { Routes as DomReoutes, Route } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import MainPage from "../pages/mainPage/MainPage";
import { Main } from "../pages/Main";
import HomePage from "../pages/homePage/HomePage";
interface RouterItem {
  path: string;
  element: React.ReactNode;
  withAuthorization: boolean;
}

const routerItems: RouterItem[] = [
  /* 메인화면 */
  { path: "/", element: <HomePage />, withAuthorization: true },
  { path: "/main", element: <MainPage />, withAuthorization: true },
];

export function Routes() {
  return (
    <DomReoutes>
      <Route element={<Main />}>
        {routerItems
          .filter((route) => route.withAuthorization)
          .map((route: RouterItem) => {
            return (
              <Route
                key={route.path}
                path={route.path}
                element={<PrivateRoute component={route.element} />}
              />
            );
          })}
      </Route>
    </DomReoutes>
  );
}
