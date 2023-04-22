import React from "react";
import s from "./style.module.scss";

const MainPage = () => {
  return (
    <div className={s.mainPage}>
      <h1 className={s.title}>Главная</h1>
    </div>
  );
};
export default React.memo(MainPage);
