import React, { useState } from 'react';
import cx from 'classnames';
import Styles from './styles.module.scss';
import { string, shape, arrayOf } from 'prop-types';

export const Accordeon = (props) => {
    const accordeonTitle = props.title;
    const accordion = props.source || [];
    const [active, setActive] = useState(0);
    const toggle = (index) => setActive(index);
    
    return (
        <section className = {Styles.accordion} >
            <h1>{ accordeonTitle }</h1>
			{accordion.map( (item, index) => {
                
                const accordionCX = cx({
                    [ Styles['accordion-item'] ]: true, 
                    [ Styles['selected'] ]: (active === index) ? true : false
                })
                   
                return (
                    <div key = { index } className = { accordionCX } onClick = { () => toggle(index) } >
                        <div className={Styles['accordion-question']}>
                            <span>{ item.question }</span>
                        </div>
                        <p className={Styles['accordion-answer']}>
                            { item.answer }
                        </p>
                    </div>   
                )
            })}
		</section>
    )
};
Accordeon.defaultProps = {
    title: 'Accordion',
}
Accordeon.propTypes = {
    source: arrayOf(
        shape({
            question: string.isRequired,
            answer: string.isRequired,
        }),
    ),
    title: string,
}