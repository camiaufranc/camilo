import ItemCount from '../ItemCount';
import ItemList from '../ItemList';
import React, {useState, useEffect} from 'react';
import Title from '../Title';

const paisaje = [
    {id: 1, image: 'https://cdn.aarp.net/content/dam/aarp/travel/Domestic/2013-04/1140-wildflowers-mount-rainier-washington-frommers-beautiful-mountains-esp.imgcache.rev0e36c9680e5843406394b38ea8826513.jpg', title: "Alpes"},
    {id: 2, image: 'https://fotografias.lasexta.com/clipping/cmsimages02/2022/03/17/8817DB4C-0E8F-47FF-A87F-DF95C9FDC014/grace-bay-beach_98.jpg?crop=1253,705,x0,y67&width=1900&height=1069&optimize=high&format=webply', title: "Playa"},
    {id: 3, image: 'https://www.caracteristicas.co/wp-content/uploads/2017/03/ciudad-3-e1565900105563-800x400.jpg', title: "Ciudad"},
];

export const ItemListContainer = ({texto}) => {

    const [data, setData] = useState([]);

    useEffect(() => {
        const getData = new Promise(resolve => {
            setTimeout(() => {
                resolve(paisaje);
            }, 3000)
        });

        getData.then(res => setData(res));

    }, [])

    const onAdd = (quantity) => {
        console.log ('Compraste' + quantity + 'unidades');    
    }

    return (
        <>
        <Title greeting={texto} />
        <ItemCount initial={4} stock={5} onAdd={onAdd} />
        <ItemList data={data}/>
        </>
    );

}

export default ItemListContainer;