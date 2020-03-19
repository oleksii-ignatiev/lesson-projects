import React from 'react';
import Styles from './styles.module.scss';

export const Tag = (props) => {
  return (
	<div>
		<span className={ Styles.tag}>{props.tag}</span>
	</div>
    
  )
};