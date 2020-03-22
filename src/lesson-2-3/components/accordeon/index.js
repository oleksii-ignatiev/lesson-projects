import React from 'react';
import Styles from './styles.scss';
import { Question } from '../question';

export const Accordeon = (props) => {
	const accordeon = props.source || [];
    
    return (
        <section className="accordion">
            <h1>Accordion</h1>
			{accordeon.map( 
                (item, index) => <Question key = {index} question = {item} /> 
			)}
		</section>
    )
};