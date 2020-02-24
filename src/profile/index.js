import React from 'react';
import cx from 'classnames';

import Styles from './styles/index.module.scss';

export const Profile = () => {
  return (
    <section className={Styles.profile}>
      <div className={cx([Styles.sidebar, Styles.male])}></div>
      <div className={Styles.wrap}>
        <div className={Styles.header}>
          <a href="/" className={Styles.homeLink}>На главную</a>
          <div className={cx([Styles.avatar, Styles.male])}>
            <div className={Styles.column}>
              <span className={Styles.name}>Иванов Сергей</span>
              <button className={Styles.logout}>Выйти</button>
            </div>
          </div>
        </div>
        <div className={Styles.content}>
          <h1>Профиль</h1>
          <div className={Styles.gender}>
            <div className={Styles.female}>
              <span>Женщина</span>
            </div>
            <div className={cx([Styles.male, Styles.selected])}>
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
          <button>Обновить профиль</button>
        </div>
      </div>
      <button className={Styles.clearData}>Сбросить данные</button>
    </section>
  )
};
