import React, {useState} from 'react';
import s from "../AddSummaries/style.module.scss";


const AddSummaries = () => {
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')

    const handleSubmit = () => {
        const data = {
            title,
            description
        }

    }

    return (
        <div className={s.form__mainpage}>
            <div className={s.form__wrapper}>
                <div className={s.form__wrapper_tittle}>
                    <input/>
                </div>
                <div className={s.form__wrapper_description}>
                    <input
                        className={s.form__wrapper_text}
                        onkeydown="this.style.width = ((this.value.length + 1) * 8) + 'px';"
                    />
                </div>
                <div>
                    <button>
                        Добавить
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AddSummaries ;