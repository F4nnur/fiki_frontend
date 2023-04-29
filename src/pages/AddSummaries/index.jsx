import React, {useState} from 'react';
import s from "../AddSummaries/style.module.scss";
import {useDispatch} from "react-redux";
import {addSummaries} from "../../store/actions/Summaries";


const AddSummaries = () => {
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const dispatch = useDispatch()

    const handleSubmit = () => {
        const data = {
            title,
            description,
            user_id: 4
        }
        dispatch(addSummaries(data))
        setTitle('')
        setDescription('')

    }

    return (
        <div className={s.form__mainpage}>
            <div className={s.form__wrapper}>
                <div className={s.form__wrapper_tittle}>
                    <input
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </div>
                <div className={s.form__wrapper_description}>
                    <textarea
                        cols={100}
                        rows={4}
                        className={s.form__wrapper_text}
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />
                </div>
                <div>
                    <button onClick={handleSubmit}>
                        Добавить
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AddSummaries ;