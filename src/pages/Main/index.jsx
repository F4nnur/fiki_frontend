import React from "react";
import s from "./style.module.scss";

const MainPage = () => {
    let re = [
        {t: '12', d: 'dsahadadshdhhshsdahsdaaaaaaasahshshsahsahsahsahsahshshsahasjaadsadjajdjasdjdjsadjajdjssjsjdsjajdjsajdjajds'},
        {t: '12', d: "dsahadadshdhhshsdahsdaaaaaaasahshshsahsahsahsahsahshshsahasjaadsadjajdjasdjdjsadjajdjssjsjdsjajdjsajdjajds"},
        {t: '12', d: "dsahadadshdhhshsdahsdaaaaaaasahshshsahsahsahsahsahshshsahasjaadsadjajdjasdjdjsadjajdjssjsjdsjajdjsajdjajds"}
    ]
    return (
        <>
            {
                re.map(item =>
                    <div className={s.form__mainpage}>
                        <div className={s.form__wrapper}>
                            <div className={s.form__wrapper_tittle}>
                                <p>{item.t}</p>
                            </div>
                            <div className={s.form__wrapper_description}>
                                <p className={s.form__wrapper_text}>{item.d}</p>
                            </div>
                            <div>
                                <button>
                                    Посмотреть
                                </button>
                            </div>
                        </div>
                    </div>
                )
            }
        </>
    );
};
export default React.memo(MainPage);
