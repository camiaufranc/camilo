import React, {useState, useEffect} from 'react';


import ItemList from '../ItemList';
import Title from '../Title';
import { useParams } from 'react-router-dom';

const paisaje = [
    {id: 1, price: 350, image: 'https://cdn.aarp.net/content/dam/aarp/travel/Domestic/2013-04/1140-wildflowers-mount-rainier-washington-frommers-beautiful-mountains-esp.imgcache.rev0e36c9680e5843406394b38ea8826513.jpg', category: 'cursos',title: "Alpes"},
    {id: 2, price: 230, image: 'https://fotografias.lasexta.com/clipping/cmsimages02/2022/03/17/8817DB4C-0E8F-47FF-A87F-DF95C9FDC014/grace-bay-beach_98.jpg?crop=1253,705,x0,y67&width=1900&height=1069&optimize=high&format=webply', category: 'cursos', title: "Playa"},
    {id: 3, price: 100, image: 'https://www.caracteristicas.co/wp-content/uploads/2017/03/ciudad-3-e1565900105563-800x400.jpg', category: 'seminarios', title: "Ciudad"},
];

export const ItemListContainer = ({texto}) => {

    const {categoriaId} = useParams();

    const [data, setData] = useState([]);

    useEffect(() => {
        const getData = new Promise(resolve => {
            setTimeout(() => {
                resolve(paisaje);
            }, 1000)
        });
        if (categoriaId) {
            getData.then(res => setData(res.filter(cursos => cursos.category === categoriaId)));
        } else {
            getData.then(res => setData(res));
        }
    }, [categoriaId])

    /* const onAdd = (quantity) => {
        console.log ('Compraste' + quantity + 'unidades');    
    } */

    return (
        <>
        <Title greeting={texto} />
        
        <ItemList data={data}/>
        </>
    );

}

export default ItemListContainer;