import styled from "styled-components";
import { useCartContext } from "./context/cart_context";
import CartItem from "./components/CartItem";
import { NavLink } from "react-router-dom";
import { Button } from './styles/Button';
import FormatPrice from "./helpers/FormatPrice";

const  Cart = () => {
  const {cart, clearCart, total_price, shipping_fee} = useCartContext();
  console.log("This is from Cart.js",cart);
  if(cart.length === 0){
    return <div>
      <h3>No Item in the Cart now!!!</h3>
    </div>
  }
  return <Wrapper>
    <div className="container">
      <div className="cart-heading">
      <table>
  <tr>
    <th>Item</th>
    <th>Name</th>
    <th>Price</th>
    <th>Quantity</th>
    <th>Subtotal</th>
    <th>Remove</th>
  </tr>

  
    {
      cart.map((curElem) =>{
        return <CartItem key={curElem.id} {...curElem}/>
      })
    }
  
   
</table>

<div className="cart-buttons">
    <NavLink to="/products">
      <Button>Continue Shopping</Button>
    </NavLink>
    <Button onClick={clearCart}>Clear Cart</Button>
</div>
      </div>
    </div>

    <div className="container">
      <div className="total-container">
      Subtotal <p><FormatPrice  price={total_price}/></p>
      Shipping Fee <p><FormatPrice  price={shipping_fee}/></p>
      Order Total <p><FormatPrice price={shipping_fee + total_price}/></p>
    </div>
    </div>

  </Wrapper>;
};

const Wrapper = styled.section`
  padding: 9rem 0;
  .cart-heading{overflow:auto;}

  td{
    @media screen and (max-width:600px){
      min-width:120px;
    }
  }

 table{width:100%;text-align:center;}
 .cart-image img{max-width:100px;overflow:hidden;max-height:100px;}
 .cart-details span{display:inline-block;width:7px;height:7px;margin-top:5px;}
.amount-toggle{display:flex;justify-content:center;align-item:center;

  .amount-style{font-size:16px;margin:0 10px}
}

.cart-buttons{margin-top:50px;
  button{
    margin-right:25px;
  }
}
.remove-icon{font-size:20px;color:#E53935;}
.total-container{background: #e8e8e9;
  background: #e8e8e9;
    width: 210px;
    padding: 20px;
    font-size: 18px;
    border-radius: 10px;
    margin-top: 20px;
}

}
`;

export default Cart;
