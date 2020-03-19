import React from 'react';
import Styles from './styles.module.scss';
import { CommentsCounter } from '../../elements/commentsCounter';
import { LikesCounter } from '../../elements/likesCounter';
import { Tag } from '../../elements/tag';

export const Article = () => {
  return (
	<section className={ Styles.article }>
		<header>
			<div className={ Styles.poster }>
				<img src="https://miro.medium.com/max/1280/1*N6eYi8bOQ9tyZy8NGWDNKA.png" alt=""/>
			</div>
			<div className={ Styles.tags }>
				<Tag tag='Literature' />
				<Tag tag='Books' />
			</div>
		</header>
		<article>
			<h1>American writer of bad cowboy stories arrived in</h1>
			<p>Volunteering to help people in need combined with travelling to faraway places is a new </p>
		</article>
		<footer>
			<span>15.07.2017</span>
			<div className={ Styles.controls }>
				<CommentsCounter />
				<LikesCounter />
			</div>
		</footer>
	</section>
  )
};
