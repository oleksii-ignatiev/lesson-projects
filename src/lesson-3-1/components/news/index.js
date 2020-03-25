import React from 'react';

import { Article } from '../article';

const db = [
    {
        id: 'H2K4J',
        isConfirmed: true,
        isSelected: true,
        title: 'На марсе нашли жизнь',
        description: 'Во время очередной миссии на марс, жителям земли удалось встретить существ очень похожих на человека'
    },
    {
        id: 'Z8L1S',
        title: 'Apple начала раздавать iPhone бессплатно',
        description: 'Вчера вечером кампания Apple анонсировала что теперь любой человек может получить iPhone бессплатно'
    },
    {
        id: 'S1N1T',
        hidden: true,
        title: 'Илон Маск научился добывать энергию из воздуха',
        description: 'Успешный предприниматель и инженер Илон Маск заявил что научился добывать энергию из воздуха'
    },
];

export const News = () => {
    const articleJSX = db.map(({id, ...props}) => (<Article key = { id } { ...props } />));

    return (
        <section>
            <h3>News</h3>
            { articleJSX }
        </section>
    );
};
