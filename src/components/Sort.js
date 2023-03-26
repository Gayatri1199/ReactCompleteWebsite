import React from 'react'
import styled from 'styled-components'
import { BsFillGridFill, BsList } from "react-icons/bs"
import { useFilterContext } from '../context/filter_context'

const Sort = () => {
  const{filter_products,grid_view, setGridView, setListView, sorting} = useFilterContext();

  return (
    <Wrapper className='sort-section'>
      <div className='sorting-section'>
      <div className='btns'>
          <button className={grid_view ? "active sort-btn" : "sort-btn"}
          onClick={setGridView}
          >
            <BsFillGridFill className="icon" />
          </button>
          <button className={grid_view ? "sort-btn" : " active sort-btn"}
          onClick={setListView}
          >
            <BsList className="icon" />
          </button>
      </div>
      <div className='procucts-number'>
            <p>{`${filter_products.length} Products Available`}</p>
      </div>
      </div>
      <div className='filter-section'>
          <form action='#'>
            <label htmlFor="sort"></label>
            <select name="sort" id="sort" onClick={sorting}> 
            <option value="a-z">Price (A - Z)</option>
              <option value="lowest">Price (Lowest)</option>
              <option value="highest">Price (Highest)</option>
              <option value="a-z">Price (A - Z)</option>
              <option value="z-a">Price (Z- A)</option>
            </select>
          </form>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
display:flex;
justify-content:space-between; 

select{
  border: 1px solid rgba(98,84,243,0.5);
  width: 100%;
  padding: 10px;
  border-radius: 5px;
  margin: 10px 0px;
}

.sort-btn{
  width: 40px;
    height: 40px;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    border:2px solid #6254f3;
    color: #6254f3;
    background: #fff;
    margin-right: 10px;
    transition:0.5s all ease-in-out;

    &.active{
      color: #fff;
    background: #6254f3;
      border:none;
      transition:0.5s all ease-in-out;
    }
}

`;

export default Sort