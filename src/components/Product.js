import React from 'react'
import { NavLink } from "react-router-dom"
import FormatPrice from '../helpers/FormatPrice';
import styled from 'styled-components';

const Product = (curElem) => {
    const {id,name, image, price, category} = curElem;
  return (
    <ProductCard>
    <NavLink to={`/singleproduct/${id}`}>
        
        <div className='card'>
            <figure>
                <img src={image} alt="" />
                <figcaption className='captiion'>{category}</figcaption>
            </figure>
            <div className='card-data'>
                <h2 className='card-title'>{name}</h2>
                <p className='price'>{<FormatPrice price={price}/>}</p>
            </div>
        </div>
        
    </NavLink>
    </ProductCard>
  )
}

const ProductCard = styled.div`
.card{
    max-width:300px;
    background:#fff;
    border-radius:10px;
    overflow:hidden;
    transition:0.5s all ease-in-out;
    border:1px solid #eeeeee;
    min-height:300px;

    @media screen and (max-width:1260px){
        max-width:100% !important;
        margin-bottom:50px;
    }

    &:hover{
        transition:0.5s all ease-in-out;
        box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    }

    img{max-width:100%;box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;border-radius:10px}

    figcaption{
        background:#6254f38f;
        display:inline-block;
        padding:5px 10px;
        border-radius:5px;
        margin:10px;
        color:#fff;
        text-transform:uppercase;
        font-weight:bold;
        letter-spacing:5px;

    }

    .card-data{
        padding:10px; 
        display:flex;
        align-items:center;
        justify-content:space-between;

        h2{
            font-size:16px;
            text-transform:capitalize;
        }

        .price{
            font-weight:bold;
            color:green;
        }
    }
}


@media screen and (max-width:1260px){

}

`;

export default Product