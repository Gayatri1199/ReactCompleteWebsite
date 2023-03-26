import React from "react";
import styled from "styled-components";
import { Button } from "../styles/Button";

const Footer = () => {
  return (
    <Wrapper>
      <div className="contact-short">
        <div className="container">
          <div className="contact-short-inner">
            <div className="content">
              <p>Ready to get Started?</p>
              <p>Talk to us today</p>
            </div>
            <div>
              <Button>Get Started</Button>
            </div>
          </div>
        </div>
        </div>
        <div className="footer-section">
          <div className="container">
            <div className="footer-section-inner">
            <div className="details">
              <h4>Gayatri Purohit</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Veritatis saepe dolores modi, minus necessitatibus suscipit!
              </p>
            </div>
            <div className="subscription">
              <h4>Subscribe to get important updates</h4>
              <div className="form">
                <form action="" method="">
                  <input type="email" placeholder="Your Email" />
                  <input type="submit" value="Subscribe" />
                </form>
              </div>
            </div>
        
              <div className="follow-us">
              <h4>Follow Us</h4>
              </div>
              <div className="contact">
                <h4>Call Us</h4>
                <span>+91 9876543210</span>
              </div>
            
          </div>
        </div>
      </div>
      
    </Wrapper>
  );
};

const Wrapper = styled.section`
  position:absolute;
  width:100%;
  margin-top:100px;
  
  .contact-short-inner {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: #f6f8fa;
    padding: 30px 50px;
    border-radius: 10px;
  }

  .footer-section{
    background:#000;
    position:relative;
    z-index:-2;
    margin-top:-50px;
    padding-top:60px;
  }
  .footer-section-inner{
    color:#fff;
    display:flex;
    gap:25px;
    flex-wrap:wrap;
    h4{
        font-size:16px;
        margin-bottom:20px;
    }

    p{
        color:#fff;
    }

    span{
        font-size:14px;
    }

   .details,
   .subscription,
   .follow-us,
   .contact{
    width:25%;
    padding: 50px 20px 20px 20px;

    @media screen and (max-width:1260px){
      width:45%;
    }
    @media screen and (max-width:600px){
      width:100%;
    }
   }

  }
`;

export default Footer;
