import React from 'react';
import Styles from './styles.module.scss';
import { Article } from '../article';

export const News = () => {
  return (
    <section className={Styles.news}>
		<Article />
		<Article />
		<Article />
	</section>
  )
};
