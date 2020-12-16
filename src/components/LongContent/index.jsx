import React from 'react';

const items = [];
for(let i = 0; i < 200; i+= 1) {
    items.push(i);
}

export default class LongContent extends React.Component {
    render() {
        return (
            <ul>
                {items.map((item) => <li key={ item }>{item}</li>)}
            </ul>
        );
    }
}
