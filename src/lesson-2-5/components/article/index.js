import React from 'react';
import Styles from './styles.module.scss';
import { CommentsCounter } from '../../elements/commentsCounter';
import { LikesCounter } from '../../elements/likesCounter';
import { Tag } from '../../elements/tag';
import { string, number, arrayOf } from 'prop-types';

export const Article = (props) => {
	const article = props.element || {};
	const currentDate = new Date(article.published).toLocaleString("uk",{
        year: 'numeric',
        month: 'numeric',
        day: 'numeric',
    }) ;
	return (
		<section className = { Styles.article }>
			<header>
				<div className = { Styles.poster }>
					<img src = { article.image } alt=""/>
				</div>
				<div className = { Styles.tags }>
					{article.tags.map( 
						(message, index) => <Tag 
												key = {index} 
												tagMessage = {message} 
											/> 
					)}
				</div>
			</header>
			<article>
				<h1>{ article.title }</h1>
				<p>{ article.description }</p>
			</article>
			<footer>

				<span>{ currentDate }</span>
				<div className={ Styles.controls }>
					<CommentsCounter commentCounter = { article.comments } />
					<LikesCounter likesCounter = { article.likes } />
				</div>
			</footer>
		</section>
	)
};
Article.propTypes = {
            title: string.isRequired,
      description: string.isRequired,
        published: string.isRequired,
            likes: number,
         comments: number,
            image: string.isRequired,
             tags: arrayOf(
                       string,
                   )
}