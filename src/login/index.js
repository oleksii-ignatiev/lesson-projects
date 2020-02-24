import React from 'react';

import Styles from './styles/index.module.scss';

export const Login = () => {
  return (
    <section className={Styles.login}>
      <div className={Styles.content}>
        <h1>Добро пожаловать!</h1>
        <div className={Styles.inputRow}>
          <label>Электропочта</label>
          <input type="text"placeholder='Введите свой email'/>
        </div>
        <div className={Styles.inputRow}>
          <label>Пароль</label>
          <input type="password"placeholder='Введите свой пароль'/>
        </div>
        <button>Войти в систему</button>
      </div>

    </section>
  )
};
