import React from 'react';
import { useCartContext } from "../../Context/CartContext.jsx";
import ItemCart from '../ItemCart';

const Cart = () => {
    const { cart, totalPrice } = useCartContext();

    if(cart.length === 0) {
        return (
            <>
                {
                    cart.map(product => <ItemCart key={product.id} product={product}/>)
                }
                

                <p>
                    total: {totalPrice()}
                </p>
                
            </>
        );
    }


    return (
        <div>Cart</div>
    )
}

export default Cart;