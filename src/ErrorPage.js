import React from 'react'
import styled from 'styled-components';
import { Button } from './styles/Button';

const ErrorPage = () => {
  return (
    <Wrapper>
        <div className='Error-Page'>
            <h1>404 Page</h1>
            <div className='content'>
                <p><span>UH OH! </span> You're lost</p>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur consequuntur sequi reprehenderit, vel dignissimos ex aspernatur.</p>
                <Button>Go BAck to Home</Button>
            </div>
        </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
    .Error-Page{
      text-align:center;
      margin-top:100px;

      Button{
        margin-top:30px;
      }
    }

`;


export default ErrorPage