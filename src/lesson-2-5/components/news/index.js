import React from 'react';
import Styles from './styles.module.scss';
import { Article } from '../article';
import { string, number, arrayOf } from 'prop-types';

export const News = (props) => {
	const news = props.source || [];
    
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
News.propTypes = {
    element: arrayOf(
        shape({
            title: string.isRequired,
        description: string.isRequired,
        published: string.isRequired,
            likes: number,
        comments: number,
            image: string.isRequired,
            tags: arrayOf(
                    string,
                ),
            }),
        )
}