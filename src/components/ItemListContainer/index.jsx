import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "../ItemList";
import Title from "../Title";
import {
	collection,
	getDocs,
	getFirestore,
	query,
	where,
} from "firebase/firestore";

export const ItemListContainer = ({ texto }) => {
	const [data, setData] = useState([]);
	const { categoriaId } = useParams();

	/* useEffect(() => {
		const querydb = getFirestore();
		const queryCollection = collection(querydb, "products");
		if (categoriaId) {
			const queryFilter = query(
				queryCollection,
				where("Categoria", "==", categoriaId),
			);
			getDocs(queryFilter).then((res) =>
				setData(
					res.docs.map((product) => ({ id: product.id, ...product.data() })),
				),
			);
		} else {
			getDocs(queryCollection).then((res) =>
				setData(
					res.docs.map((product) => ({ id: product.id, ...product.data() })),
				),
			);
		}
	}, [categoriaId]); */

	useEffect(() => {
        const querydb = getFirestore();
        const queryCollection = collection(querydb,'products');

        if(categoriaId){
            const queryFilter = query(queryCollection, where('Categoria','==', categoriaId));
            getDocs(queryFilter)
                .then(res => setData(res.docs.map(product => ({id:product.id, ...product.data()}))));
        }else{
            getDocs(queryCollection)
                .then(res => setData(res.docs.map(product => ({id:product.id, ...product.data()}))));
        }
    },[categoriaId])

	// console.log(data);

	return (
		<>
			<Title greeting={texto} />
			<ItemList data={data} />
		</>
	);
};

export default ItemListContainer;