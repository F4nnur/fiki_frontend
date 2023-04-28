import React, {useEffect} from "react";
import s from "./style.module.scss";
import {useDispatch, useSelector} from "react-redux";
import {getSummaries} from "../../store/actions/Summaries";

const MainPage = () => {
    const dispatch = useDispatch()
    const summaries = useSelector(state => state.summaries.summaries)


    useEffect(() => {
        dispatch(getSummaries())
        console.log('----')
    }, [dispatch])

    return (
        <>
            {
                summaries.map(item =>
                    <div className={s.form__mainpage}>
                        <div className={s.form__wrapper}>
                            <div className={s.form__wrapper_tittle}>
                                <p>{item.title}</p>
                            </div>
                            <div className={s.form__wrapper_description}>
                                <p className={s.form__wrapper_text}>{item.description}</p>
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
