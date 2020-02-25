import React from 'react';
import cx from 'classnames';

import Styles from './styles/index.module.scss';

export const Dashboard = () => {
  return (
    <section className={Styles.dashboard}>
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
          <div className={Styles.navigation}>
            <h1>Как у тебя проходит день?</h1>
            <div className={Styles.items}>
              <a href="/" className={cx([Styles.link, Styles.category1])}>
                <span className={Styles.title}>Добавить завтрак</span>
                <span className={Styles.description}>Хороший завтрак очень важен</span>
              </a>
              <a href="/" className={cx([Styles.link, Styles.category2])}>
                <span className={Styles.title}>Добавить обед</span>
                <span className={Styles.description}>Успешные люди обедают</span>
              </a>
              <a href="/" className={cx([Styles.link, Styles.category3])}>
                <span className={Styles.title}>Добавить ужин</span>
                <span className={Styles.description}>Лучше не ужинать вообще</span>
              </a>
              <a href="/" className={cx([Styles.link, Styles.category4])}>
                <span className={Styles.title}>Добавить активность</span>
                <span className={Styles.description}>Пешие прогулки это минимум</span>
              </a>
              <a href="/" className={cx([Styles.link, Styles.category5])}>
                <span className={Styles.title}>Добавить фрукты</span>
                <span className={Styles.description}>Фрукты подымают настроение</span>
              </a>
              <a href="/" className={cx([Styles.link, Styles.category6])}>
                <span className={Styles.title}>Добавить овощи</span>
                <span className={Styles.description}>Овощи очень важны</span>
              </a>
              <a href="/" className={cx([Styles.link, Styles.category7])}>
                <span className={Styles.title}>Добавить фастфуд</span>
                <span className={Styles.description}>Эта еда очень вредная</span>
              </a>
              <a href="/" className={cx([Styles.link, Styles.category8])}>
                <span className={Styles.title}>Добавить воду</span>
                <span className={Styles.description}>Вода это жизнь</span>
              </a>
              <a href="/" className={cx([Styles.link, Styles.category9])}>
                <span className={Styles.title}>Добавить сон</span>
                <span className={Styles.description}>Спать нужно всем</span>
              </a>
              <a href="/" className={cx([Styles.link, Styles.category10])}>
                <span className={Styles.title}>Добавить кофе</span>
                <span className={Styles.description}>Можно и без него</span>
              </a>
            </div>
          </div>
          <div className={Styles.widget}>
            <span className={Styles.title}>Life Score</span>
            <div className={Styles.module}>
              <span className={Styles.score} style={{bottom: '50%'}}>105</span>
              <div className={Styles.progress}>
                <div className={Styles.fill} style={{height: '50%'}}></div>
              </div>
              <span className={cx([Styles.label, Styles.level1])}>Off Track</span>
              <span className={cx([Styles.label, Styles.level2])}>Imbalanced</span>
              <span className={cx([Styles.label, Styles.level3])}>Balanced</span>
              <span className={cx([Styles.label, Styles.level4])}>Healthy</span>
              <span className={cx([Styles.label, Styles.level5])}>Perfect Fit</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
};
