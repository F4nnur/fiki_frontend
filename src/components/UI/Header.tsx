import React from 'react';
import s from './index.module.scss'
import image from '../../constants/images'
import {ROUTES} from "../../constants/navigation";
import {Link} from "react-router-dom";

const Header = () => {


    return (
        <div className={s.header}>
            <Link to={ROUTES.MAIN} className={s.linkHeader}>
                <div className={s.linkHeader__block}>
                    <img className={s.img1} alt={''} src={image.fiki}/>
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
                    <Link to={ROUTES.LOGOUT} className={s.logout}>
                        <span>
                            Выйти
                        </span>
                    </Link>
                </div>
            </Link>
        </div>
    );
};

export default Header;