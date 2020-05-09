import React from 'react';
import cx from "classnames";

import { useDispatch } from 'react-redux';
import { forcastActions } from '../actions';

export const CheckField = (props) => {
    const dispatch = useDispatch();
     
    const checkCX = cx({
        'checkbox': true,
        'selected': (props.id === props.state.isChecked) ? true : false,
        'blocked': !props.state.isSubmit ? true : false
    });

    const toggle = () => {
        if (props.state.isSubmit) dispatch(forcastActions.setIsChecked(props.id));
    }
    return (
        <span className={ checkCX } onClick = { () => toggle() } >{ props.value }</span>
    );
};