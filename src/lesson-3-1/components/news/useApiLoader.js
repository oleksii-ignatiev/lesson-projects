import { useState } from 'react';
import { api } from '../../api.js';

export const useArticle = (hidden) => {
    const [ isArticleVisible, setVisible ] = useState(!hidden);

    return {
        setVisible,
        isArticleVisible,
    }
}