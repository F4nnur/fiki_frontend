import React from "react";
import s from "./style.module.scss";

const LoginPage = () => {
  return (
    <div className={s.loginPage}>
      <h1 className={s.title}>Логин</h1>
    </div>
  );
};
export default React.memo(LoginPage);
