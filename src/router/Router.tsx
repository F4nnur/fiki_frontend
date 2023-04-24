import React from "react";
import {Route, Routes} from "react-router-dom";
import {ROUTES} from "../constants/navigation";
import LoginPage from "../pages/Login";
import MainPage from "../pages/Main";
import RegistrationPage from "../pages/Registration";
import Profile from '.././pages/Profile'
import EditSummaries from "../pages/EditSummaries";
import MySummaries from "../pages/MySummaries";
import SummariesPage from "../pages/SummariesPage";
import AddSummaries from "../pages/AddSummaries";

const Router = () => {
    return (
        <Routes>
            <Route path={ROUTES.LOGIN} element={<LoginPage/>}/>
            <Route path={ROUTES.MAIN} element={<MainPage/>}/>
            <Route path={ROUTES.REGISTRATION} element={<RegistrationPage/>}/>
            <Route path={ROUTES.PROFILE} element={<Profile/>}/>
            <Route path={ROUTES.EDITSUMMARIES} element={<EditSummaries/>}/>
            <Route path={ROUTES.MYSUMMARIES} element={<MySummaries/>}/>
            <Route path={ROUTES.SUMMARIESPAGE} element={<SummariesPage/>}/>
            <Route path={ROUTES.ADDSUMMARIES} element={<AddSummaries/>}/>
        </Routes>
    );
};
export default Router;
