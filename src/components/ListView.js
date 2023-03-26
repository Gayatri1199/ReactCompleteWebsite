import React from 'react'
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import FormatPrice from '../helpers/FormatPrice';
import { Button } from "../styles/Button"

const ListView = ({ products }) => {
  return (
    <Wrapper className='list-view'>
      {
        products.map((curElem) => {
            const {id, name, image, price, description } = curElem;
            return (
              <div className='card' key={curElem.id}>
                 <figure>
                  <img src={image} alt={name} />
                  </figure> 
                  <div className='details'>
                      <h3>{name}</h3>
                      <div className='price'><FormatPrice price={price}/></div>
                      <div className='description'>
                          {description.slice(0,90)}...
                      </div>
                      <NavLink to="{`/singleproduct/${id}`}">
                           <Button>
                               Read More
                            </Button> 
                      </NavLink>
                  </div>
              </div>
            )
        })
      }
    </Wrapper>
  )
}

const Wrapper = styled.section`
.card{
  display:flex;
  gap:25px;
  padding:20px;
  margin-bottom:25px;
  border:1px solid #eee;
  border-radius:10px;
  align-items:center;
}

.details{
  h3{
    font-size: 30px;
    font-weight: 600;
    text-transform:capitalize;

    @media screen and (max-width:1260px){
      font-size:26px;
    }
  }

  .price{
    font-size: 20px;
    margin: 5px 0px;
    font-weight: 600;
  }

  .description{
    font-size:18px;

    @media screen and (max-width:1260px){
      display:none;
    }
  }

  button{margin-top:20px;}
}
figure{
  max-width:400px;
  overflow:hidden;

  @media screen and (max-width:1260px){
    max-width:330px;
  }

  img{
    max-width:100%;
  }
}
`;

export default ListView