import React from 'react'
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const PageNavigation = ({title}) => {
  return (
    <Wrapper>
        <NavLink to="/">Home</NavLink> / <span>{title}</span>
    </Wrapper>
  )
}

const Wrapper = styled.section`
a,span{font-size:14px;
color:#999;}
cursor:pointer;

span{display:inline-block;font-weight:bold;text-decoration:underline}

`;


export default PageNavigation