import React from 'react';
import Styles from '../styles/styles.scss';

export const Article = () => {
  return (
	<section className={Styles.article}>
		<header>
			<div class="poster">
				<img src="https://miro.medium.com/max/1280/1*N6eYi8bOQ9tyZy8NGWDNKA.png" alt=""/>
			</div>
			<div class="tags">
				<div>
				<span class="tag">Literature</span>
				</div>
				<div>
				<span class="tag">Books</span>
				</div>
			</div>
		</header>
		<article>
			<h1>American writer of bad cowboy stories arrived in</h1>
			<p>Volunteering to help people in need combined with travelling to faraway places is a new </p>
		</article>
		<footer>
			<span>15.07.2017</span>
			<div class="controls">
			<span class="commentsCounter">10</span>
				<span class="likesCounter">315</span>
			</div>
		</footer>
	</section>
  )
};
