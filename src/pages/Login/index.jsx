import React, {useState} from "react";
import s from "./style.module.scss";
import {ROUTES} from "../../constants/navigation";
import {useDispatch} from "react-redux";
import {useNavigate} from "react-router-dom";
import userActions from "../../store/actions/User";

const LoginPage = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const LogIn = (e) => {
        e.preventDefault()
        const userData = {
            username,
            password
        }

        dispatch(userActions.logInUser(userData))
        navigate('/')
    }


    return (
        <div className={s.form__layout}>
            <div className={s.form__wrapper}>
                <div className={s.form__wrapper_header}>Login</div>
                <div>
                    <input
                        type="username"
                        placeholder="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </div>
                <div>
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <div>
                    <button onClick={LogIn}>
                        Login
                    </button>
                </div>
                <div className={s.form__wrapper_footer}>
                    <a href={ROUTES.MAIN}>Sign In</a>
                </div>
            </div>
        </div>
    );
};
export default React.memo(LoginPage);
