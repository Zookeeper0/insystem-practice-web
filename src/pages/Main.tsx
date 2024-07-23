import { Outlet } from "react-router";
import { MainTemplate } from "../components/templates/MainTemplate";

export const Main = () => {
  return (
    <MainTemplate>
      <Outlet />
    </MainTemplate>
  );
};
