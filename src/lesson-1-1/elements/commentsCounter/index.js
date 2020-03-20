import React from 'react';
import Styles from './styles.module.scss';

export const CommentsCounter = (props) => {
	const commentCount = props.commentCounter || '0';
  return (
    <span className={ Styles.commentsCounter }>{ commentCount }</span>
  )
};