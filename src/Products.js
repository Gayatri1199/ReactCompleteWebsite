import React from "react";
import styled from "styled-components";
import FilterSection from "./components/FilterSection";
import Sort from "./components/Sort";
import ProductList from "./components/ProductList";
import { useFilterContext } from "./context/filter_context";

const Products = () => {
  return <Wrapper className="container">
    <div className="product-page">
        <div className="filter">
            <FilterSection />
        </div>
        <div className="products">
           <div className="filter-bar">
              <div className="filter-bar">
                  <Sort />
              </div>
              <div className="main-products">
                  <ProductList />
              </div>
           </div>
        </div>
    </div>
  </Wrapper>;
};

const Wrapper = styled.section`
  .conatiner{
    max-width:1440px;
    width:100%;
  }

  .product-page{
    display:flex;
    margin-top:50px;

    .filter{
      max-width:200px;
      width:100%;
    }

   .products{
      max-width:calc(100% - 200px);
      width:100%;
    }
    .main-products{
      width:100%;
    }
  }


`;

export default Products;
