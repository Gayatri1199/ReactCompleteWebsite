import React from 'react'
import styled from "styled-components";

const Contact = () => {
  
  return (

    <Wrapper>
    <h2>Feel Free to Contact Us</h2>
    <div class="container">
      <div class="contact-us">
      <div class="map">
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3558.998410728744!2d75.77351861504403!3d26.87179158314529!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db44c92a72cf9%3A0x9c7c1205ede842b4!2sJaipur%20Electronic%20Market!5e0!3m2!1sen!2sin!4v1675879702235!5m2!1sen!2sin" width="600" height="450" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" title="map"></iframe>

      </div>
      <div class="form">
        <form action="https://formspree.io/f/mzbqerok" method="POST">
            <input type="text" placeholder='Username' name="username" required autoComplete='off'   />
            <input type="email" placeholder='Email' name="email" required autoComplete='off'  />
            <textarea name="message" cols="30" rows="10" required autoComplete='off' placeholder='Enter your message'></textarea>
            <input type="submit" value="Send"/>
        </form>
      </div>
      </div>
    
    </div>
  </Wrapper>
  )

};

const Wrapper = styled.section`
    padding: 5rem 0 5rem 0;
    text-align: center;

    .contact-us{
      display:flex;
      margin-top:50px;
      gap:100px;
    }

    .form{
      width:100%;
      form{
        input,
        textarea{
          width:100%;
          display:block;
          margin-bottom:20px;
        }
      }
    }

    
  `;


export default Contact;
