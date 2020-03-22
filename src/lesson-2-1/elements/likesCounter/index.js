import React from 'react';
import Styles from './styles.module.scss';

export const LikesCounter = (props) => {
	const likesCounter = props.likesCounter || '0';

  return (
    <span className={ Styles.likesCounter }>{likesCounter}</span>
  )
};