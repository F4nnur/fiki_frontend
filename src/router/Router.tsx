import React from "react";
import { Route, Routes } from "react-router-dom";
import { ROUTES } from "../constants/navigation";
import LoginPage from "../pages/Login";
import MainPage from "../pages/Main";

const Router = () => {
  return (
    <Routes>
      <Route path={ROUTES.LOGIN} element={<LoginPage />} />
      <Route path={ROUTES.MAIN} element={<MainPage />} />
    </Routes>
  );
};
export default Router;
