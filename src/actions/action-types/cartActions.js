import { ADD_TO_CART,REMOVE_ITEM, SUB_QUANTITY,ADD_QUANTITY,REMOVE_CART} from "./cart-actions";
export const addToCart= (id)=>{
    return{
        type: ADD_TO_CART,
         id }
         //returns the id with a dded property of type
    }
    //add to cart is a type of action received in the reducer
export const RemoveItem= (id)=>{
    return{
            type: REMOVE_ITEM,
             id }
             //returns the id with a dded property of type
        }
 export const subQuantity= (id)=>{
    return{
                type: SUB_QUANTITY,
                 id }
                 //returns the id with a dded property of type
            }
 export const addQuantity= (id)=>{
     return{
                    type: ADD_QUANTITY,
                     id }
                     //returns the id with a dded property of type
                }
 export const RemoveCart= ()=>{
         return{
                   type: REMOVE_CART
                       }
                          //returns the id with a dded property of type
                  }