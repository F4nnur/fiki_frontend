import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import userActions from "../../store/actions/User";
import s from './style.module.scss'

const Profile = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(userActions.getUser())
    }, [dispatch])

    const userData = useSelector(state => state.profile.userData)
    console.log(userData)

    return (
        <>
            {
                userData.map(item =>
                    <div className={s.mainFrame__layout} key={item.id}>
                        <div className={s.mainFrame__elements}>
                            <div className={s.mainFrame__paragraph_block}>
                                <p>{item.username}</p>
                            </div>
                            <div className={s.mainFrame__paragraph_block}>
                                <p>{item.email}</p>
                            </div>
                            <div className={s.mainFrame__paragraph_block}>
                                <p>{item.fio ?? 'Фамилия не указана'}</p>
                            </div>
                        </div>
                        <div className={s.mainFrame__buttons}>
                            <div className={s.mainFrame__button_change}>
                                <button>Редактировать</button>
                            </div>
                            <div className={s.mainFrame__button_delete}>
                                <button>Удалить</button>
                            </div>
                        </div>
                    </div>
                )
            }
        </>
    );
};

export default Profile;