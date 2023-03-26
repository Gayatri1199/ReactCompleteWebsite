import React from 'react'
import styled from 'styled-components';
import { useFilterContext } from '../context/filter_context';
import {FaCheck} from "react-icons/fa"
import FormatPrice from "../helpers/FormatPrice"
import { Button } from '../styles/Button';

const FilterSection = () => {
  const {filters:{text, category, color, price, maxPrice, minPrice}, updateFilterValue, all_products, clearFilters} = useFilterContext();

  //TO GET THE UNIQUE DATA OF EACG FIELDS
  const getUniqueData = (data, property) =>{
    let newVal = data.map((curElem) =>{
      return curElem[property];
    });  
    
    if(property === "colors") {
      newVal = newVal.flat();
    }

    return(newVal = ["all", ...new Set(newVal)]);
  };
  
  //WE NEED UNIQUE DATA
  const categoryOnlyData = getUniqueData(all_products, "category");
  const companyOnlyData = getUniqueData(all_products, "company"); 
  const colorsData = getUniqueData(all_products, "colors");
  console.log("Data for colors",colorsData);
  
  return (
    <Wrapper>
      <div className='filter-search'>
        <form onSubmit={(e) => e.preventDefault()}>
          <input type="text" name="text" value={text} onChange={updateFilterValue} placeholder="Search"/>
        </form>
        </div>
        <div className='filter-category'>
          <h3>Category</h3>
          <div className='category'>
            {
              categoryOnlyData.map((curElem, index) => {
                 return <button key={index} type="button" name="category" value={curElem} onClick={updateFilterValue}>
                  {curElem}
                 </button> 
              })
            }
          </div>
        </div>

        <div className='company-category'>
            <form action='#'>
              <select 
              name="company"
              id='company'
              className='filter-company-select'
              onClick={updateFilterValue}>
                {
                  companyOnlyData.map((curElem, index)=>{
                    return(
                      <option key={index} value={curElem} name="company">{curElem}</option>
                    )
                  })
                }
              </select>
            </form>
        </div>

        <div className="filter-colors colors">
             <h3>Colors</h3>
             <div className="filters-color-style">
                {
                  colorsData.map((curColor, index) => {
                    if(curColor === "all"){
                      return(
                        <button type="button" className='all-btn' onClick={updateFilterValue} key={index} value={curColor} name="color"> 
                          All
                        </button>
                      )
                    }
                    return(
                      <button type="button" className={color === curColor ? "btnStyle active" : "btnStyle"} style={{backgroundColor : curColor}} onClick={updateFilterValue} key={index} value={curColor} name="color"> 
                        {color === curColor ? <FaCheck className="checkstyle" /> : null}
                      </button>
                    )
                  })
                }
              </div>     
        </div>

        <div className='filter-price'>
             <h3>Price</h3>
            <p>
              <FormatPrice price={price} />
            </p>
            <input name="price" type="range" min={minPrice} max={maxPrice} value={price} onChange={updateFilterValue}/>
        </div>

        <div className='filter-clear'>
            <Button onClick={clearFilters}>
              Clear All
              </Button>      
        </div>
    </Wrapper>    
  )
}

const Wrapper = styled.section`
padding-right:20px;
position: sticky;
top: 20px;

.filter-category h3{font-size:16px}
  .category{
    button{width: 100%;
      margin-bottom: 10px;
      text-align: left;
      padding: 0px 10px 0px 15px;
      text-transform: uppercase;
      font-size: 12px;
      font-weight: bold;
      background: none;
      border: none;
      position: relative;
      transition:0.5s all ease-in-out;
        cursor:pointer;
      
      &:after{
        content: "";
        width: 5px;
        display: block;
        height: 5px;
        background: #6254f3;
        position: absolute;
        left: 0;
        top: 10px;
        transform: rotate(45deg);
        transition:0.5s all ease-in-out;
        

        
      }
      :hover::after{
        transform: rotate(0deg);
        transition:0.5s all ease-in-out;
      }
    
    }

    
  }

  .company-category{
    select{
      border: 1px solid rgba(98,84,243,0.5);
      width: 100%;
      padding: 10px;
      border-radius: 5px;
      margin: 10px 0px;
    }
  }

  .filters-color-style{
    display: flex;
    gap: 5px;
    margin:10px 0px;
    button{
      width: 20px;
    height: 20px;
    font-size: 12px;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius:5px;
    }
  }

.filter-price{
  p{
    background: #a49cf5;
    display: inline-block;
    padding: 5px 10px;
    border-radius: 5px;
    color: #fff;
    font-weight: bold;
    margin: 10px 0px;
  }
}
  
`;
export default FilterSection