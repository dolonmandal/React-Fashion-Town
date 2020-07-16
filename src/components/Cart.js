import React ,{Component} from 'react';
import {connect} from 'react-redux';

import { RemoveItem, addQuantity, subQuantity,RemoveCart } from '../actions/action-types/cartActions'

class Cart extends Component {
    handleClick = ()=>{
        this.props.RemoveCart();
        alert('Thankyou for shopping with us !! Money will not be deduced.')
    }
    handleClickEmpty = ()=>{
        this.props.RemoveCart();
        alert('Please add something to cart :) !!')
    }


    handleRemoveItem =(id)=>{
        this.props.RemoveItem(id);
    }
    handleAddQuantity=(id)=>{
        this.props.addQuantity(id)
        ;
    }
    handleSubQuantity=(id)=>{
        this.props.subQuantity(id);
    }
    
    render() { 
        let total=this.props.total;
        
        let addedItems = this.props.items ?
            (  
                this.props.items.map(item=>{
                    return(
                       
                        <div className="cart-item" key={item.id}>
                                    
                                        <img src={item.img} alt={item.img} />
                                    
                                
                                    <div className="item-desc">
                                        <h2 className="title">{item.title}</h2>
                                        <p>{item.info}</p>
                                        <p><b>Price: Rs {item.price}</b></p> 
                                        <p>
                                        </p>
                                        <div className="add-remove">
                                            <button className="counter" onClick={()=>{this.handleAddQuantity(item.id)}} >+</button>
                                            <b className="qty"> {item.quantity}</b> 

                                            <button className="counter" onClick={()=>{this.handleSubQuantity(item.id)}} >-</button>

                                        
                                        </div>
                                        <button onClick={()=>{this.handleRemoveItem(item.id)}} className="remove">Remove</button>
                                    </div>
                                    
                               </div>                        
                    )
                })
            ):

             (
                <h1 className="head">No Items In Cart.</h1>
             )
       return(

                <div className="cart">
                    <div className="header">
                            
                            <div className="cart-total">Cart Total: {total}</div>
                        <button onClick={()=>{this.handleClick()}} className="checkout">BUY NOW</button>
                        <button onClick={()=>{this.handleClickEmpty()}} className="checkout">EMPTY ALL</button>


                 </div>
                    
                        {addedItems}
                        
                    
                </div>  
            
       )
    }
}

const mapStateToProps = (state) =>{
    return{
        items: state.addedItems,
        total: state.total
    }
}
const mapDispatchToProps= (dispatch)=>{
    
    return{
        
        addQuantity: (id)=>{dispatch(addQuantity(id))},
        subQuantity: (id)=>{dispatch(subQuantity(id))},
        RemoveItem: (id)=>{dispatch(RemoveItem(id))},
        RemoveCart: ()=>{dispatch(RemoveCart())}


        //adding the addToCart property to the item id provided
    }
}
 
export default connect(mapStateToProps,mapDispatchToProps) (Cart);