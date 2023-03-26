import React from 'react'
import { FaStar , FaStarHalfAlt } from "react-icons/fa" 
import { AiOutlineStar } from "react-icons/ai";
import styled from 'styled-components';

const Star = ({ stars, reviews}) => {
    const ratingStar = Array.from({length:5}, (elem,index) => {
        let number = index + 0.5;
        return(
            <span key={index}>
                {stars >= index + 1
                ? ( <FaStar className='Icon'/> )
                : stars >= number
                ? ( <FaStarHalfAlt className='Icon'/> )
                : ( <AiOutlineStar className='Icon' />)}
            </span>
        );

    });

  return (
    <Wrapper>
        <div className='icon-style'>
            {ratingStar}
            <p>{reviews} Customer Reviews</p>
        </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
span,.Icon{
    font-size:20px;
    color:#ffb100;
}

p{font-size:12px;}`; 

export default Star