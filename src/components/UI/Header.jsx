import React, {useEffect} from 'react';
import s from './index.module.scss'
import image from '../../constants/images'
import {ROUTES} from "../../constants/navigation";
import {Link, useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import userActions from "../../store/actions/User";
import {logout} from "../../store/reducers/UserSlice";

const Header = () => {
    const isAuth = localStorage.getItem('access_token')
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleLogOut = (e) => {
        e.preventDefault()
        dispatch(userActions.logOutUser())
        dispatch(logout())
        navigate(ROUTES.LOGIN)
    }

    if (!isAuth) {
        return (
            <div className={s.header}>
                <a href={ROUTES.MAIN} className={s.linkHeader}>
                    <div className={s.linkHeader__block}>
                        <img className={s.img1} alt={''} src={image.fiki}/>
                    </div>
                </a>
                <div>
                    <Link to={ROUTES.LOGIN} className={s.logout}>
                        <span>login</span>
                    </Link>
                </div>
            </div>
        );
    }
    return (
        <div className={s.header}>
            <div className={s.linkHeader}>
                <div className={s.linkHeader__block}>
                    <a href={ROUTES.MAIN}>
                        <img className={s.img1} alt={''} src={image.fiki}/>
                    </a>
                    <div>
                        <Link to={ROUTES.MYSUMMARIES} className={s.my_summaries}>
                            <p>Мои резюме</p>
                        </Link>
                    </div>
                </div>
                <div>
                    <Link to={ROUTES.PROFILE} className={s.nickname}>
                        <span>
                            nickname
                        </span>
                    </Link>
                    <Link onClick={handleLogOut} className={s.logout}>
                        <span>
                            Выйти
                        </span>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Header;