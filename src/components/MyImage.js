import React from "react";
import { useState } from "react";
import styled from "styled-components";

const MyImage = ({ imgs = [{ url: "" }] }) => {
  const [mainImage, setMainImage] = useState(imgs[0]);
  return (
    <Wrapper>
      <div className="image">
        {imgs.map((curElem, index) => {
          return (
            <figure>
              <img
                src={curElem.url}
                alt={curElem.filename}
                className="product-image"
                key={index}
                onClick={() => setMainImage(curElem)}
              />
            </figure>
          );
        })}
      </div>
      <div className="main-screen">
        <img src={mainImage.url} alt={mainImage.filename} />
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`

  display:flex;

  @media screen and (max-width:1260px){
    margin-bottom:50px;
  }
  .main-screen{
    min-width: 500px;
    margin: 0px 50px;
    overflow: hidden;

    img{
      object-fit:cover;
      height:100%;
      width:100%;
    }
  }

  figure{margin-bottom:16px;}

  img{max-width:100%;}
  .product-image {
    max-width: 100px;
  }
`;

export default MyImage;
