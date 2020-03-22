import React, { useState } from 'react';
import Styles from './styles.module.scss';

export const LikesCounter = (props) => {
    const likesCounter = props.likesCounter || '0';
    
    const [likesValue, setValue] = useState(likesCounter);
    const [isLike, setLike] = useState(false);

    const _toggleLikes = () => {
        if (isLike) { 
            setValue((likesValue) => likesValue - 1); 
        } else { 
            setValue((likesValue) => likesValue + 1 ); 
        }
        setLike((isLike) => !isLike);
    }
    
    return (
        <span  onClick = { _toggleLikes } className={ Styles.likesCounter }>{likesValue}</span>
    )
};