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
            <div className={Styles.question}>
            <h1>Ты сегодня завтракал?</h1>
            <div className={Styles.answers}>
              <span className={cx([Styles.answer])}>Я не завтракал</span>
              <span className={cx([Styles.answer, Styles.selected])}>У меня был легкий завтрак</span>
              <span className={cx([Styles.answer])}>Я очень плотно покушал</span>
            </div>
            <button className={Styles.sendAnswer}>Ответить</button>
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
