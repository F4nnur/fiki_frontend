import React from "react";
import s from "./style.module.scss";

const MainPage = () => {
    // let re = [{t:'12', d:12}, {t:'12', d:12}, {t:'12', d:12}]
    return (
        <div className={s.form__mainpage}>
            <div className={s.form__wrapper}>
                <div className={s.form__wrapper_tittle}>
                    <p>Заголовок</p>
                </div>
                <div className={s.form__wrapper_description}>
                    <p className={s.form__wrapper_text}>воааыаоыаыаооываыаоыоаыаоыоаоыоаыоаоыаыаыоаоаааааааааааааааааааааааааааааааааааааааааааааааааа</p>
                </div>
                <div>
                    <button>
                        Посмотреть
                    </button>
                </div>
            </div>
        </div>
    );
};
export default React.memo(MainPage);
