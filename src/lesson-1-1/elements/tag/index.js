import React from 'react';
import Styles from './styles.module.scss';

export const Tag = (props) => {
	const message = props.tagMessage || '';
	return (
		<div>
			<span className={ Styles.tag}>{message}</span>
		</div>
		
	)
};