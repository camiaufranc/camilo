import React, {useState, useEffect} from 'react';

import ItemDetail from '../ItemDetail'
import { useParams } from 'react-router-dom';


const paisaje = {id: 1, image: 'https://cdn.aarp.net/content/dam/aarp/travel/Domestic/2013-04/1140-wildflowers-mount-rainier-washington-frommers-beautiful-mountains-esp.imgcache.rev0e36c9680e5843406394b38ea8826513.jpg', title: "Alpes"}

export const ItemDetailContainer = () => {
    const [data, setData] = useState({})

    const {detalleId} = useParams();

    useEffect(() => {
        const getData = new Promise(resolve => {
            setTimeout(() => {
                resolve(paisaje);
            }, 3000);
        });

        getData.then(res => setData(res.find(paisaje => paisaje.id === parseInt(detalleId))));
    }, [])

    return (
        <ItemDetail data={data}/>
    );
}

export default ItemDetailContainer;