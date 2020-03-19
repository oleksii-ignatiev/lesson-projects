import React from 'react';
import Styles from '../styles/styles.scss';
import Article from '../article';

export const News = () => {
  return (
    <section className={Styles.news}>
		<Article />
		<Article />
		<Article />
	</section>
  )
};
