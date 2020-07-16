import React ,{Component} from 'react';
import {connect} from 'react-redux';
import { addToCart } from '../actions/action-types/cartActions';



const mapStateToProps =(state)=>{
    return{
        items: state.items
    }
}

const mapDispatchToProps= (dispatch)=>{
    
    return{
        addToCart: (id)=>{dispatch(addToCart(id))}
        //adding the addToCart property to the item id provided
    }
}




class Home extends Component {

    handleClick = (id)=>{
        this.props.addToCart(id);
        alert('Item added to cart !!')
    }
    
    render() {
        let itemList = this.props.items.map(item=>{
            return(
                <div key={item.id} className="recipe">
                <h2>{item.title}</h2>
                
                <img src={item.img} alt={item.title}></img>
                <h3>Price {item.price}</h3>
                 <h3>Brand {item.company}</h3>

                <button onClick={()=>{this.handleClick(item.id)}}>add to cart</button> 
                  </div>
                
            )
        })
        return(
                <div className="recipes">
                    {itemList}
                    <footer className="footer">
                        <div className="container-fluid ">
                            <h4>All Rights Reserved. @ Dolon </h4>
                        </div>
      
    </footer>


                </div>
        )
    }
}

 

        
           
export default connect (mapStateToProps,mapDispatchToProps)(Home)