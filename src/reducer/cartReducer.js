const cartReducer = (state, action) => {

  if(action.type === "ADD_TO_CART"){
    let{id,color,amount,product} = action.payload;


//Tackle the existing product
    let existingProduct = state.cart.find((curItem) => 
        curItem.id == id + color  
    )
    console.log("THis is the value of existingProduct", existingProduct);


    if(existingProduct){

      let updatedProduct = state.cart.map((curElem) => {
        if(curElem.id == id + color){
          let newAmount = curElem.amount + amount;

          if(newAmount >= curElem.max){
            newAmount = curElem.max;
          }

          return{
            ...curElem,
            amount:newAmount
          };
        } else {
          return curElem;
        }        
      });
      return{
        ...state,
        cart:updatedProduct,
      }

    }else{
      let cartProduct;
       cartProduct={
        id:id + color,
        name:product.name,
        color,
        amount,
       image:product.image[0].url,
       price: product.price,
       max:product.stock,

    }

    return{
      ...state,
      cart:[...state.cart, cartProduct],
    }

  }

    console.log("These is from Cart REducer",product)
  }

  //to set the increment and decrement
  if(action.type === "SET_DECREMENT"){
    let updatedProduct = state.cart.map((curElem) => {
        if(curElem.id === action.payload){
          let decAmount = curElem.amount - 1;
          if(decAmount <= 1){
            decAmount = 1;
          }
          return{
            ...curElem,
            amount:decAmount,
          }
        } else {
          return curElem;
        }
    });
    return { ...state, cart: updatedProduct };
  }

  if(action.type === "SET_INCREMENT"){
    let updatedProduct = state.cart.map((curElem) => {
        if(curElem.id === action.payload){
          let incAmount = curElem.amount + 1;
          if(incAmount >= curElem.max){
            incAmount = curElem.max;
          }
          return{
            ...curElem,
            amount:incAmount,
          }
        } else {
          return curElem;
        }
    });
    return { ...state, cart: updatedProduct };
  }
  
  if(action.type === "REMOVE_ITEM"){
    let updatedCart = state.cart.filter(
      (curElem) => curElem.id !== action.payload
      );
    return{
      ...state,
      cart:updatedCart,
    }
  }

  //to clear the cart

  if(action.type==="CLEAR_CART"){
    return{
      ...state,
      cart:[],
    }
  }

  if(action.type==="CART_TOTAL_ITEM"){
    let updatedItemVal = state.cart.reduce((initialVal, curElem) => {
      let {amount} = curElem;
      initialVal = initialVal + amount;
      return initialVal;
    }, 0);

    return{
      ...state,
      total_item: updatedItemVal,
    }
}

  if(action.type==="CART_TOTAL_PRICE"){
    // let {total_price} =
    let total_price = state.cart.reduce((initialVal, curElem)=>{
        let {price, amount} = curElem;

        initialVal = initialVal + price*amount;
        return initialVal;
    },0);
    return{
      ...state,
      total_price,
    }
  }


  return state;
}





export default cartReducer