import React from 'react'
import styled from "styled-components"
import Product from './Product'

const GridView = ({ products }) => {
    console.log(products);
  return (
    <Wrapper className='grid-view'>
        
            {
                products.map((curElem) => {
                    return <Product key={curElem.id}  {...curElem}/>
                })
            }
        
    </Wrapper>
  )
      
}

const Wrapper = styled.div`
 display:flex;
 flex-wrap:wrap;
 gap:30px 30px;
`;
export default GridView