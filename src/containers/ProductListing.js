import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductComponent from "./ProductComponent";

 import { fetchProducts } from "../redux/actions/productAction";
const ProductListing = () => {
  const products = useSelector((state) => state);
  console.log(products);
   const dispatch = useDispatch();
  
  useEffect(()=>{
    dispatch(fetchProducts());

  },[])
  console.log("Products", products);
  return (
    <div className="flex flex-wrap justify-center ">
      <ProductComponent></ProductComponent>
    </div>
  );
};

export default ProductListing;
