import React from 'react';
import Styles from './styles.module.scss';
import { string } from 'prop-types';

export const CommentsCounter = (props) => {
	const commentCount = props.commentCounter || '0';
    return (
        <span className={ Styles.commentsCounter }>{ commentCount }</span>
    )
};
CommentsCounter.propTypes = {
    likesCounter: string,
}