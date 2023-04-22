import React from "react";
import {BrowserRouter} from "react-router-dom";
import {store} from "./store/store";
import {Provider} from "react-redux";
import Router from "./router/Router";
import "./styles/index.scss";
import Header from "./components/UI/Header";

const App = () => (
    <BrowserRouter>
        <Provider store={store}>
            <Header/>
            <Router/>
        </Provider>
    </BrowserRouter>
);

export default App;
