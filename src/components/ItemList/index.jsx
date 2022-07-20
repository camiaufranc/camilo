import Item from '../Item';
import React from 'react';

const ItemList = ({data = []}) => {
    return (
        data.map(paisaje => <Item key={paisaje.id} info={paisaje} />)
    );
}

export default ItemList;