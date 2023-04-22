import React from 'react';
import s from './index.module.scss'
import image from '../../constants/images'

const Header = () => {
    return (
        <div className={s.header}>
            <img className={s.img1} alt={''} src={image.fiki}/>
        </div>
    );
};

export default Header;