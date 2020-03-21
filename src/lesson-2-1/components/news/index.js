import React from 'react';
import Styles from './styles.module.scss';
import { Article } from '../article';

export const News = (props) => {
	const news = props.source || [];
	console.log(news);	
	return (
		<section className={Styles.news}>
			{news.map( (element, index) => <Article 
												key = {index} 
												element = {element} 
											/> 
			) }
		</section>
	)
};
