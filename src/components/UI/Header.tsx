import React from 'react';
import s from './index.module.scss'
import image from '../../constants/images'
import {ROUTES} from "../../constants/navigation";
import {Link} from "react-router-dom";

const Header = () => {
    return (
        <div className={s.header}>
            <Link to={ROUTES.MAIN}>
                <img className={s.img1} alt={''} src={image.fiki}/>
            </Link>
        </div>
    );
};

export default Header;