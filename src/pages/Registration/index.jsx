import React, {useState} from "react";
import s from "./style.module.scss";
import {ROUTES} from '../../constants/navigation'
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import toast from "bootstrap/js/src/toast";
import register from '../../store/actions/User'

const MainPage = () => {
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [FIO, setFIO] = useState('')
    const [password, setPassword] = useState('')
    const [password2, setPassword2] = useState('')
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const {isLoading} = useSelector((state) => state.user)

    async function RegistrationFunc(e){
        e.preventDefault()
        if (password !== password2){
            alert('Пароли не совпадают')
        }else {
            const userData = {
                username,
                email,
                FIO,
                password,
                role: 1
            }
            dispatch(register(userData)).unwrap().then((user) => {
                toast.success('registered new user' + user.username)
                navigate('/')
            })
                .catch(toast.error)
        }

    }
    if (isLoading ) {
        return <h1>Загрузка</h1>
    }
    return (
        <div className={s.form__layout}>
            <div className={s.form__wrapper}>
                <div className={s.form__wrapper_header}>Sign Up</div>
                <div>
                    <input
                        type="text"
                        placeholder="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </div>
                <div>
                    <input
                        type="email"
                        placeholder="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value )}
                    />
                </div>
                <div>
                    <input
                        type="text"
                        placeholder="FirstNameLastName"
                        value={FIO}
                        onChange={(e) => setFIO(e.target.value )}
                    />
                </div>
                <div>
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value )}
                    />
                </div>
                <div>
                    <input
                        type="password"
                        placeholder="Password"
                        value={password2}
                        onChange={(e) => setPassword2(e.target.value )}
                    />
                </div>
                <div>
                    <button onClick={RegistrationFunc}>
                        Sign Up
                    </button>
                </div>
                <div className={s.form__wrapper_footer}>
                    <a href={ROUTES.LOGIN}>Логин</a>
                </div>
            </div>
        </div>
    );
};
export default React.memo(MainPage);
