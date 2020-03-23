import React from 'react';
import Styles from './styles.module.scss';
import { string } from 'prop-types';

export const Tag = (props) => {
	const message = props.tagMessage || '';
	return (
		<div>
			<span className={ Styles.tag}>{message}</span>
		</div>
		
	)
};
Tag.propTypes = {
    tagMessage: string,
}