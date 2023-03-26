import React from "react";
import { FaTrash } from "react-icons/fa";
import FormatPrice from "../helpers/FormatPrice";
import CartAmountToggle from "./CartAmountToggle";
import { useCartContext } from "../context/cart_context";

const CartItem = ({ id, name, image, color, price, amount }) => {
    const {removeItem ,setDecrease, setIncrease} = useCartContext();

    // const setDecrease = () => {
        // amount > 1 ? setAmount(amount - 1) : setAmount(1);
      // };
      // const setIncrease = () => {
        // amount < stock ? setAmount(amount + 1) : setAmount(stock);
      // };
 
    return (
  
      <tr className="product">
        <td className="cart-image">
            <img src={image} alt={image} />
        </td>
        <td className="cart-details">
            <p>{name}</p>
            <p>Color <span className="color-style" style={{backgroundColor : color,color:color}}></span></p>
        </td>
        <td className="price">
            <p>
                <FormatPrice price={price}/>
            </p>
        </td>

        <td className="quantity">
        <CartAmountToggle 
        amount = {amount}
        setDecrease = {() => setDecrease(id)}
        setIncrease = {() => setIncrease(id)}
      />
      </td>
      <td className="subtotal">
        <p><FormatPrice  price={price * amount}/></p>
      </td>
      <td className="remove-btn">
        <FaTrash className="remove-icon" onClick={() => removeItem(id)}/>
      </td>
    </tr>
    
  );
};

export default CartItem;
