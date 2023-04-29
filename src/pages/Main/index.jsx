import React, {useEffect} from "react";
import s from "./style.module.scss";
import {useDispatch, useSelector} from "react-redux";
import {getSummaries} from "../../store/actions/Summaries";
const MainPage = () => {
    // const navigate = useNavigate()
    // const user = useSelector(state => state.user)
    const dispatch = useDispatch()
    const summaries = useSelector(state => state.summaries.summaries)


    useEffect(() => {
        //Todo: Сделать на проверку и обновление токенов
        // if (!user.access_token){
        //     navigate('/login')
        // }
        dispatch(getSummaries())
    }, [dispatch])

    return (
        <>
            {
                summaries.map(item =>
                    <div className={s.form__mainpage} key={item.id}>
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
