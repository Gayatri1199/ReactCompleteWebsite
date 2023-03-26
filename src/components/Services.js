import React from 'react'
import styled from 'styled-components';
import { TbTruckDelivery } from "react-icons/tb"
import { MdSecurity } from "react-icons/md"
import { GiReceiveMoney } from "react-icons/gi"
import { RiSecurePaymentLine } from "react-icons/ri"

const Services = () => {
  return (
    <Wrapper>
    <div className='container'>
        <div className='grid grid-three-column'>
            <div className="services-1">
             
                <div className='icon-block'><TbTruckDelivery  className="icon"/></div>
                <h3>Super Fast and Free Delivery</h3>
             
            </div>

            <div className='services-2'>
                <div className='services-colum-2'>
                  
                    <div className='icon-block'><MdSecurity className="icon" /></div>
                    <h3>Non-Contact Shipping</h3>
                  
                </div>
                <div className='services-colum-2'>
                <div className='icon-block'><GiReceiveMoney className="icon" /></div>
                   <h3>Money Back Guarante</h3> 
                </div>
            </div>

            <div className="services-3">
             
            <div className='icon-block'><RiSecurePaymentLine  className="icon"/></div>
                <h3>Super Secure Payment Systems</h3>
             
            </div>
        </div>
    </div>
    </Wrapper>
  )
}


const Wrapper = styled.section`
    padding:9rem 0;
  @media screen and (max-width:1260px){
    .grid{display:block}
  }




    .icon-block{height: 80px;
      width: 80px;
      display: flex;
      background: #fff;
      align-items: center;
      justify-content: center;
      border-radius: 100px;
      margin-bottom: 20px;
      transition:0.5s all ease-in-out;
    }
    
    .icon{font-size:50px;}

    .services-1,
    .services-colum-2,
    .services-3{
      background-color:rgb(98 84 243 / 39%);
      border-radius:5px;
      display:flex;
      align-items:center;
      justify-content:center;
      flex-direction:column;
      margin-bottom:20px;
      padding:20px;

      :hover{
        .icon-block{
          border-radius:0px;
          transition:0.5s all ease-in-out;
        }
      }
    }

`;

export default Services