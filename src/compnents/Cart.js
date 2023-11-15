import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
    const cartItems = useSelector((store) => store.cart.items);
    const dispatch = useDispatch();
    const handleClear = () => {
        dispatch(clearCart());
    };
    return (
        <div className="m-4 p-4 text-center">
            <h1 className="text-2xl font-bold">Cart</h1>
            <button onClick={handleClear} className=" m-2 p-2 cursor-pointer bg-black text-white rounded-lg">Clear cart</button>
            {cartItems.length == 0 && <h1>Your cart is emplty, please add items to the cart!!</h1>}
            <div className="w-6/12 m-auto"><ItemList items={cartItems} /></div>
        </div>

    );
};

export default Cart;