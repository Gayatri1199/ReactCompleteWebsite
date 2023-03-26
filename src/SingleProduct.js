import styled from "styled-components";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useProductContext } from "./context/productcontext";
import PageNavigation from "./components/PageNavigation";
import MyImage from "./components/MyImage";
import FormatPrice from "./helpers/FormatPrice";
import { TbReplace, TbTruckDelivery } from "react-icons/tb"
import { MdSecurity } from "react-icons/md"
import Star from "./components/Star";
import AddToCart from "./components/AddToCart";

const API = "https://api.pujakaitem.com/api/products";
const SingleProduct = () => {
  const { getSingleProduct, isSingleLoading, singleProduct } =
    useProductContext();
  console.log(singleProduct);
  const { id } = useParams();
  // console.log(id);

const {
  id: alias,
  name,
  company,
  price, 
  description,
  category,
  stock,
  stars,
  reviews,
  image
} = singleProduct;



  useEffect(() => {
    getSingleProduct(`${API}?id=${id}`);
  }, []);

  if(isSingleLoading){
    return <div className="page_loading"> Loading....</div>
  }

  return (
    <Wrapper>
      <div className="container">
          <div className="product-data">
              <div className="image-section">
                <div className="product-images">
                <MyImage imgs={image} />
                </div>                  
              </div>
              <div className="product-details">
                  <PageNavigation title={name} />
                  <h2>{name}</h2>
                  <Star stars={stars} reviews={ reviews }/>
                  <p class="product-price">
                    MRP : <del>
                      <FormatPrice price={price + 250000} />
                    </del>
                  </p>
                  <p className="product-data-price">
                    <span>Deal of the Day</span> : <FormatPrice price={price} />
                  </p>
                  <p className="description">{description}</p>
                  <div className="points">
                    <div className="point">
                        <div className="icon">
                          <TbTruckDelivery />
                        </div>
                        <p>Fast Delivery</p>
                    </div>
                    <div className="point">
                        <div className="icon">
                          <TbReplace />
                        </div>
                        <p>Replace</p>
                    </div>
                    <div className="point">
                        <div className="icon">
                          <TbTruckDelivery />
                        </div>
                        <p>Fast Delivery</p>
                    </div>
                    <div className="point">
                        <div className="icon">
                          <MdSecurity />
                        </div>
                        <p>Security</p>
                    </div>
                  </div>
                  <div className="product_data_info">
                    <p>Available : 
                      <span>{ stock > 0 ? "In Stock" : "Not Available" }</span></p>
                  </div>
                  <p>
                    ID : <span>{id}</span>
                  </p>
                  <p>
                    Brand : <span>{company}</span>
                  </p>
                  <hr />
                  {stock > 0 && <AddToCart product = {singleProduct} />}
              </div>
          </div>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  .container {
    padding: 9rem 0;
  }
  .product-data {
    display: flex;
    gap: 2rem;

    @media screen and (max-width:1260px){
      display:block;
      padding:15px;
    }
  }

  .image-section{
    position:sticky;
    top:50px;
    align-self: baseline;

    @media screen and (max-width:1260px){
      position:relative;
      top:auto;
    }
  }
  .product-details{
    h2{
      font-size: 22px;
      font-weight: 600;
      margin: 10px 0px;
    }
  }

  .product-price{
    font-size: 25px;
    font-weight: 400;
    margin: 10px 0px;
  }

  .product-data-price{
    span{
      color: #551a8b;
    font-weight: bold;
    }
  }

  .description{
    font-size:12px;
    line-height:20px;
  }
  .points{
    display:flex;
    margin:10px 0px;
    gap:32px;
  
  p{
    font-size:12px;
  }
  
  }

  .point{text-align:center;}
  .icon{font-size:20px;}

  .product_data_info{
    p{font-size:12px;}
  }

  p{font-size:12px;}


`;

export default SingleProduct;
