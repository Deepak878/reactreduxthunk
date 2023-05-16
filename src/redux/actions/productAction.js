import fakeStoreApi from "../../apis/fakeStoreApi"
import { ActionTypes } from "../constants/action-types"

//these are action creators first step in react-redux
export const fetchProducts = () => async (dispatch)=>{
    const response = await fakeStoreApi.get("/products")

    dispatch({type:ActionTypes.FETCH_PRODUCTS,payload:response.data})
  }
export const fetchProduct = (id) => async (dispatch)=>{
    const response = await fakeStoreApi.get(`/products/${id}`)

    dispatch({type:ActionTypes.SELECTED_PRODUCTS,payload:response.data})
  }
  // console.log(response);
  // return {
  //   type: ActionTypes.SET_PRODUCTS,
  //   payload:response,
  // }

export const setProducts = (products) =>{
  return {
    type: ActionTypes.SET_PRODUCTS,
    payload:products,
  }
}

export const selectedProduct = (products) =>{
  return {
    type: ActionTypes.SELECTED_PRODUCTS,
    payload:products,
  }
}

export const removeSelectedProduct = () =>{
  return {
    type: ActionTypes.REMOVE_SELECTED_PRODUCTS,
  }
}

export const cartProducts = (productId) =>{
  console.log("yahoo product id aaoyo", productId);
  return {
    type: ActionTypes.CART_PRODUCTS,
    payload:productId,
  }
}
