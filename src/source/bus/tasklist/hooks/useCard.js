import { useState } from 'react';

export const useCard = () => {
    const [ isCardVisible, setCardVisible ] = useState(false);
    const openCard = () => {
        setCardVisible(true);
    };
    const closeCard = () => {
        setCardVisible(false);
    };
    return {
        isCardVisible,
        openCard,
        closeCard,
    }
};