
import img1 from '../../images/img1.jpg';
import img2 from '../../images/img2.jpg';
import img3 from '../../images/img3.jpg';
import img4 from '../../images/img4.jpg';
import img5 from '../../images/img5.jpg';
import img6 from '../../images/img6.jpg';
import img7 from '../../images/img7.jpg';
import img8 from '../../images/img8.jpg';
import img9 from '../../images/img9.jpg';
//import img10 from '../../images/img10.jpg';
import img11 from '../../images/img11.jpg';
import img12 from '../../images/img12.jpg';
import img13 from '../../images/img13.jpg';
import img14 from '../../images/img14.jpg';
import img15 from '../../images/img15.jpg';
import {ADD_TO_CART, REMOVE_ITEM, SUB_QUANTITY,ADD_QUANTITY,REMOVE_CART} from '../../actions/action-types/cart-actions'



const initState = {
    items:[
        {
            id: 1,
            title: "Comfy Tops",
            img: img1,
            price: 2999,
            company: 'Biba',
            info:
              "Available in all sizes across all locations.",
              quantity:0
          },
          {
            id: 2,
            title: "Hardy Hoodie",
            img: img2,
            price: 3999,
            company: 'Biba',
            info:
              "Available in all sizes across all locations.",
              quantity:0
          },
          {
            id: 3,
            title: "Modern set",
            img: img3,
            price: 4999,
            company: 'Biba',
            info:
              "Available in all sizes across all locations.",
              quantity:0
          }
          ,
          {
            id: 4,
            title: "Mr. Cool Wear",
            img: img4,
            price: 4999,
            company: 'Biba',
            info:
              "Available in all sizes across all locations.",
              quantity:0
          }
          ,
          {
            id: 5,
            title: "Black Beauty",
            img: img5,
            price: 5999,
            company: 'Biba',
            info:
              "Available in all sizes across all locations.",
              quantity:0
          }
          ,
          {
            id: 6,
            title: "Yellow Beast",
            img: img6,
            price: 6999,
            company: 'Biba',
            info:
              "Available in all sizes across all locations.",
              quantity:0
          }
          ,
          {
            id: 7,
            title: "Artistic Wear",
            img: img7,
            price: 4999,
            company: 'Biba',
            info:
              "Available in all sizes across all locations.",
              quantity:0
          }
          ,
          {
            id: 8,
            title: "Casual Wear",
            img: img8,
            price: 3999,
            company: 'Biba',
            info:
              "Available in all sizes across all locations."
          }
          ,
          {
            id: 9,
            title: "Show Stopper",
            img: img9,
            price: 5999,
            company: 'Biba',
            info:
              "Available in all sizes across all locations.",
              quantity:0
          }
          ,
          {
            id: 10,
            title: "Cool Winters",
            img: img11,
            price: 6999,
            company: 'Biba',
            info:
              "Available in all sizes across all locations.",
              quantity:0
          }
          ,
          {
            id: 11,
            title: "Cool Winters",
            img: img11,
            price: 6999,
            company: 'Biba',
            info:
              "Available in all sizes across all locations.",
              quantity:0
          }
          ,
          {
            id: 12,
            title: "Snow White",
            img: img12,
            price: 2999,
            company: 'Biba',
            info:
              "Available in all sizes across all locations.",
              quantity:0
          }
          ,
          {
            id: 13,
            title: "Yellow Glow",
            img: img13,
            price: 2999,
            company: 'Biba',
            info:
              "Available in all sizes across all locations.",
              quantity:0
          },
          {
            id: 14,
            title: "Party Look",
            img: img14,
            price: 3999,
            company: 'Biba',
            info:
              "Available in all sizes across all locations.",
              quantity:0
          }
          ,
          {
            id: 15,
            title: "The Classy",
            img: img15,
            price: 4999,
            company: 'Biba',
            info:
              "Available in all sizes across all locations.",
              quantity:0
          }


    ],
    addedItems:[],
    total:0
}
const cartReducer = (state=initState,action)=>{
    if(action.type === ADD_TO_CART){
      let addedItem=state.items.find(item=>item.id===action.id);
      let existed_item= state.addedItems.find(item=>action.id===item.id);

      if(existed_item){
        addedItem.quantity +=1;
        return{
          ...state,
          total: state.total+addedItem.price
        }
      }else{
        addedItem.quantity=1;

        let newTotal=state.total + addedItem.price;
        return{
          ...state,
          addedItems: [...state.addedItems,addedItem],
          total:newTotal
        }
      }
    }
    if(action.type===REMOVE_ITEM){
      let itemToRemove= state.items.find(item=>action.id===item.id);
      let newItems= state.items.filter(item=>item.id!==action.id)
      let newTotal=state.total-(itemToRemove.price * itemToRemove.quantity)

      return{
        ...state,
        total:newTotal, //total changed
        addedItems:newItems //array changed
      }
    }

    if(action.type===ADD_QUANTITY){
      let addedItem=state.items.find(item=>item.id===action.id);
      addedItem.quantity +=1;
      let newTotal=state.total+addedItem.price;
      return{
        ...state,
        total:newTotal, //total changed
        
      }
    }
    if(action.type===SUB_QUANTITY){
      let subItem=state.items.find(item=>action.id===item.id);
      if(subItem.quantity === 1){
        let new_items = state.addedItems.filter(item=>item.id !== action.id)
        let newTotal = state.total - subItem.price
        return{
            ...state,
            addedItems: new_items,
            total: newTotal
        }
    }
    else{
      
      subItem.quantity-=1;
      let newTotal=state.total-subItem.price;
      return{
        ...state,
        total:newTotal, //total changed
        
      }
    }
  }
  if(action.type===REMOVE_CART){
    let newItems=[];
    return{
      ...state,
      addedItems:newItems,
      total:0
    }
  }
    else{
      return state
    }
}
export default cartReducer;