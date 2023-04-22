import React from "react";
import s from "./style.module.scss";
import {ROUTES} from "../../constants/navigation";

const LoginPage = () => {
  return (
      <div className={s.form__layout}>
          <div className={s.form__wrapper}>
              <div className={s.form__wrapper_header}>Login</div>
              <div>
                  <input type="text" placeholder="username"/>
              </div>
              <div>
                  <input type="text" placeholder="Password"/>
              </div>
              <div>
                  <button>
                      Login
                  </button>
              </div>
              <div className={s.form__wrapper_footer}>
                  <a href={ROUTES.LOGIN}>Sign Up</a>
              </div>
          </div>
      </div>
  );
};
export default React.memo(LoginPage);
