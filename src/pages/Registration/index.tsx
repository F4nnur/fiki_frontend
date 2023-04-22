import React from "react";
import s from "./style.module.scss";
import {ROUTES} from '../.././constants/navigation'

const MainPage = () => {
    return (
        <div className={s.form__layout}>
            <div className={s.form__wrapper}>
                <div className={s.form__wrapper_header}>Sign Up</div>
                <div>
                    <input type="text" placeholder="username"/>
                </div>
                <div>
                    <input type="text" placeholder="email"/>
                </div>
                <div>
                    <input type="text" placeholder="FirstNameLastName"/>
                </div>
                <div>
                    <input type="text" placeholder="Password"/>
                </div>
                <div>
                    <button>
                        Sign Up
                    </button>
                </div>
                <div className={s.form__wrapper_footer}>
                    <a href={ROUTES.LOGIN}>Логин</a>
                </div>
            </div>
        </div>
    );
};
export default React.memo(MainPage);
