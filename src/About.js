import React from 'react'
import HeroSection from './components/HeroSection';
import { AppContext, useProductContext } from './context/productcontext';
import Trusted from './components/Trusted';
import Services from './components/Services';

const About = () => {

const {myName} = useProductContext(AppContext)


  const data = {
    name:"Thapa Eccomerce"
  };

  return (
    <>
    {myName}
    <HeroSection  myData={data}/>
    <Services />
    <Trusted />
     </>
  )
}

export default About