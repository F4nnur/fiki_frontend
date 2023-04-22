import React from "react";
import { Route, Routes } from "react-router-dom";
import { ROUTES } from "../constants/navigation";
import LoginPage from "../pages/Login";
import MainPage from "../pages/Main";
import RegistrationPage from "../pages/Registration";

const Router = () => {
  return (
    <Routes>
      <Route path={ROUTES.LOGIN} element={<LoginPage />} />
      <Route path={ROUTES.MAIN} element={<MainPage />} />
      <Route path={ROUTES.REGISTRATION} element={<RegistrationPage />} />
    </Routes>
  );
};
export default Router;
