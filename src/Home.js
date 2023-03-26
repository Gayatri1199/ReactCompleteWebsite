import React from 'react';
import styled from "styled-components";
import HeroSection from './components/HeroSection';
import Trusted from './components/Trusted';
import Services from './components/Services';
import Footer from './components/Footer';
import FeatureProduct from './components/FeatureProduct';

const Home = () => {

  const data = {
    name:"Thapa Store"
  }

  return (
    <Wrapper>
    <HeroSection  myData={data}/>
    <FeatureProduct />
    <Services />
    <Trusted />
    </Wrapper>
  )
};

const Wrapper = styled.section`
    background-color: ${({theme}) => theme.colors.bg};
    font-family:'Poppins',sans-serif;
`;


export default Home