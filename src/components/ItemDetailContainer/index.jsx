import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../ItemDetail/index";
import { doc, getDoc, getFirestore } from "firebase/firestore";

const ItemDetailContainer = () => {
	const [data, setData] = useState({});
	const { detalleId } = useParams();

	useEffect(() => {
		const querydb = getFirestore();
		const queryDoc = doc(querydb, "products", detalleId);
		getDoc(queryDoc).then((res) => setData({ id: res.id, ...res.data() }));
	}, [detalleId]);

	return <ItemDetail data={data} />;
};

 export default ItemDetailContainer;
/*
import React, {useEffect,useState} from "react";
import ItemDetail from "../ItemDetail/index";
import {getFirestore , doc , getDoc} from 'firebase/firestore';
import { useParams } from "react-router-dom";

export const ItemDetailContainer = () => {
    const [data,setData] = useState({});
    const {detalleId} = useParams();

    useEffect(() => {
        const querydb = getFirestore();
        const queryDoc = doc(querydb, "products", detalleId);
        getDoc(queryDoc).then(res => setData({id:res.id, ...res.data()}))

    },[detalleId])

    return (
        <ItemDetail data={data} />
    )
};

export default ItemDetailContainer; */