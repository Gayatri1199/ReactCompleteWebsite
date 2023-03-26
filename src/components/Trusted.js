import React from 'react'
import styled from 'styled-components';

const Trusted = () => {
  return (
    <Wrapper className='brand-section'>
    <div className='container'>
        <h3>Trusted by 10000+ Companies</h3>
      <div className='brand-section-slider'>
          <div className='slide'>
              <img src='https://media.istockphoto.com/id/1182794985/vector/silicon-pacifier-icon-design-template-vector-isolated.jpg?s=612x612&w=0&k=20&c=Enfjo7Zsj5DYHb6W3Z5QtSdjzfg7Azsce5Nx2MP3BbE=' 
              alt="Logo"/>
          </div>
          <div className='slide'>
              <img src='https://media.istockphoto.com/id/1182794985/vector/silicon-pacifier-icon-design-template-vector-isolated.jpg?s=612x612&w=0&k=20&c=Enfjo7Zsj5DYHb6W3Z5QtSdjzfg7Azsce5Nx2MP3BbE=' 
              alt="Logo"/>
          </div>
          <div className='slide'>
              <img src='https://media.istockphoto.com/id/1182794985/vector/silicon-pacifier-icon-design-template-vector-isolated.jpg?s=612x612&w=0&k=20&c=Enfjo7Zsj5DYHb6W3Z5QtSdjzfg7Azsce5Nx2MP3BbE=' 
              alt="Logo"/>
          </div>
          <div className='slide'>
              <img src='https://media.istockphoto.com/id/1182794985/vector/silicon-pacifier-icon-design-template-vector-isolated.jpg?s=612x612&w=0&k=20&c=Enfjo7Zsj5DYHb6W3Z5QtSdjzfg7Azsce5Nx2MP3BbE=' 
              alt="Logo"/>
          </div>
          <div className='slide'>
              <img src='https://media.istockphoto.com/id/1182794985/vector/silicon-pacifier-icon-design-template-vector-isolated.jpg?s=612x612&w=0&k=20&c=Enfjo7Zsj5DYHb6W3Z5QtSdjzfg7Azsce5Nx2MP3BbE=' 
              alt="Logo"/>
          </div>
          <div className='slide'>
              <img src='https://media.istockphoto.com/id/1182794985/vector/silicon-pacifier-icon-design-template-vector-isolated.jpg?s=612x612&w=0&k=20&c=Enfjo7Zsj5DYHb6W3Z5QtSdjzfg7Azsce5Nx2MP3BbE=' 
              alt="Logo"/>
          </div>
      </div>
    </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`

padding: 9rem 0;
background-color: ${({ theme }) => theme.colors.bg};

.brand-section{padding : 12rem 0 0 0}

img{max-width:100%; box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;border-radius:10px;}
.brand-section-slider{display:flex;gap:100px;margin-top:60px;overflow:scroll}
.slide{min-width:100px;}

h3{
  text-align:center;
  text-transform: capitalize;
  color: ${( { theme } )=> theme.colors.text};
  font-size: 2rem;
  font-weight: bold;
}

`;
export default Trusted