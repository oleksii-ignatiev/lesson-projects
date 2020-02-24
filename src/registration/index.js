import React from 'react';
import cx from 'classnames';

import Styles from './styles/index.module.scss';

export const Registration = () => {
  return (
    <section className={Styles.registration}>
      <div className={Styles.left}>
        <div className={Styles.content}>
          <h1>Регистрация</h1>
          <div className={Styles.gender}>
            <div className={cx([Styles.female, Styles.selected])}>
              <span>Женщина</span>
            </div>
            <div className={Styles.male}>
              <span>Мужчина</span>
            </div>
          </div>
          <div className={Styles.inputRow}>
            <label>Электропочта</label>
            <input type="email" placeholder='Введите свой email'/>
          </div>
          <div className={Styles.inputRow}>
            <label>Имя</label>
            <input type="text" placeholder='Введите свое имя'/>
          </div>
          <div className={Styles.inputRow}>
            <label>Фамилия</label>
            <input type="text" placeholder='Введите свою фамилию'/>
          </div>
          <div className={Styles.inputRow}>
            <label>Пароль</label>
            <input type="password" placeholder='Введите свой пароль'/>
          </div>
          <div className={Styles.inputRow}>
            <label>Возраст</label>
            <input type="number" placeholder='Введите свой возраст'/>
          </div>
          <div className={Styles.inputRow}>
            <label>Рост</label>
            <input type="number" placeholder='Введите свой рост'/>
          </div>
          <div className={Styles.inputRow}>
            <label>Вес</label>
            <input type="number" placeholder='Введите свой вес'/>
          </div>
          <button>Зарегистрироваться</button>
        </div>
      </div>
      <div className={Styles.right}>

      </div>
    </section>
  )
};
