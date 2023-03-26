import React, { useState } from "react";
import styled from "styled-components";
import { FaCheck } from "react-icons/fa";
import CartAmountToggle from "./CartAmountToggle";
import { NavLink } from "react-router-dom";
import {Button} from "../styles/Button"
import { useCartContext } from "../context/cart_context";

const AddToCart = ({ product }) => {
    const {addToCart} = useCartContext();
    const { id, colors, stock } = product;
    const[color, setColor] = useState(colors[0]);
    const [amount, setAmount] = useState(1);

    const setDecrease = () => {
      amount > 1 ? setAmount(amount - 1) : setAmount(1);
    };
    const setIncrease = () => {
      amount < stock ? setAmount(amount + 1) : setAmount(stock);
    };
  
  return (
    <Wrapper>
      <div>
        <p>Colors:</p>
        <div className="buttons">
        {colors.map((curColor, index) => {
          return (
            <button key={index} style={{ backgroundColor: curColor }} className={color === curColor ? "btnStyle active" : "btnStyle"} onClick={() =>setColor(curColor)}>
              {color === curColor ? <FaCheck /> : ""}
            </button>
          );
        })}
        </div>
      </div>

      <CartAmountToggle 
        amount = {amount}
        setDecrease = {setDecrease}
        setIncrease = {setIncrease}
      />

      <NavLink to="/cart" onClick={() => addToCart(id,color,amount, product)}>
          <Button classNamebtn>Add to Cart</Button>
      </NavLink>
    </Wrapper>
  );
};

const Wrapper = styled.section`
.buttons{    display: flex;
  margin: 10px 0px;}
.btnStyle{
  height:20px;
  width:20px;
  margin-right:5px;
  border:none;
  border-radius:5px;
  color:#fff;
  font-size:8px;
}
.amount-toggle{
  display:flex;
  font-size:18px;
  align-items:center;
  margin:20px 0px;
  .amount-style{margin:0px 10px;font-size:18px;}

}
`;

export default AddToCart;
