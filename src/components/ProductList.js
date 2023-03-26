import React from 'react'
import { useFilterContext } from '../context/filter_context';
import GridView from './GridView';
import ListView from './ListView';

const ProductList = () => {
  const { filter_products , grid_view} = useFilterContext();
  console.log(grid_view);
  console.log("This is FP",filter_products);

  if(grid_view === true){
    return <GridView  products={filter_products}/>
  }
  if(grid_view === false){
    return <ListView products={filter_products}/>
  }
}

export default ProductList