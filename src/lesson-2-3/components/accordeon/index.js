import React, { useState } from 'react';
import cx from 'classnames';
import Styles from './styles.module.scss';
//import { Question } from '../question';

export const Accordeon = (props) => {
    const accordion = props.source || [];
    const [active, setActive] = useState(0);
    const toggle = (index) => setActive(index);
    
    return (
        <section className = {Styles.accordion} >
            <h1>Accordion</h1>
			{accordion.map( (item, index) => {
                
                const accordionCX = cx({
                    [ Styles['accordion-item'] ]: true, 
                    [ Styles['selected'] ]: (active === index) ? active : index 
                })
                   
                return (
                    //<Question key = { index }  index = { index } question = {item} styles = {Styles} onClick = { () => toggle(index) }/>
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