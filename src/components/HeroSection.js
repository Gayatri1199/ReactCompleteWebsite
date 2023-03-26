import { NavLink } from "react-router-dom";
import React from 'react'
import styled from 'styled-components';
import { Button } from "../styles/Button";


const HeroSection = ({ myData }) => {
  const { name } = myData;
  return (
    <Wrapper>
    <div className='container'>
        <div className=' grid grid-two-column'>
            <div className='hero-section-data'>
                <p className='intro-data'>Welcome to</p>
                <h1>{name}</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur quibusdam ea commodi. Voluptatem, eum delectus? Delectus expedita illo veritatis cumque quos tenetur, quisquam, ipsum et, architecto dolorum omnis minus quaerat.</p>  
                
                <Button>Shop Now</Button>
                
            </div>
            <div className="hero-section-image">
              <figure>
                <img src = "images/hero.jpg" alt="" className="img-style"/>
              </figure>

            </div>
        </div>
    </div>
    </Wrapper>
  )
};

const Wrapper = styled.section`
padding-top:50px;
@media screen and (max-width:1260px){
  padding:30px 15px 0;

}
font-family:'Poppins';
img{max-width:100%;box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;border-radius:10px;transition:0.5s all ease-in-out;}
.hero-section-image{position:relative;z-index:2;}
.hero-section-image:after{content: "";width: 300px;height: 250px;display: block;background: #6254f38f;position: absolute;top: -30px;right: -30px;z-index: -1;border-radius:10px;transition:0.5s all ease-in-out;}
.hero-section-image img:hover{border-radius:0px;transition:0.5s all ease-in-out;}
.hero-section-image:hover::after{border-radius:0px;transition:0.5s all ease-in-out;}
Button{margin-top:20px}

@media screen and (max-width:1260px){
  .grid{display:block}
  .hero-section-data{margin-bottom:50px}
}
`;
export default HeroSection