import React from 'react';
import cx from 'classnames';
import Styles from './styles.module.scss';

import { useArticle } from './useArticle';

export const Article = (props) => {
    const { id, isConfirmed, isSelected, title, description, hidden } = props;
    const { isArticleVisible, setVisible } = useArticle(hidden)

    const confirmedJSX = isConfirmed && <i>Новость подтверждена правительством</i>;
    const articleCX = cx({
        [Styles.article]: true,
        [Styles.selected]: isSelected
    });

    const showArticle = () => {
        setVisible(true);
    }

    const articleJSX = isArticleVisible && (
        <div key={ id } className={ articleCX }>
            <h4>{ title }</h4>
            <p>{ description }</p>
            { confirmedJSX }
        </div>
    );

    const showJSX = !isArticleVisible && (
        <>
            <p>
                Article is hidden, but you can show, just
                <button onClick={ showArticle }>Click here!</button>
            </p>
        </>
    );

    return (
        <>
            {articleJSX}
            {showJSX}
        </>
    );
};
