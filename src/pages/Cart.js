import React,{Component} from 'react';
import Cart from "../components/cart/cart";
import shop1 from '../assets/img/shop1.jpg'
import shop2 from '../assets/img/shop2.jpg'
import {connect} from 'react-redux'
import {clear,updateList} from "../store/actionCreators";

class Carts extends Component{
componentDidMount(){
    this.props.dispatch(clear('CLEAR_CART'))
    this.props.dispatch(
        updateList({type:'UPDATE_CART',collectionName:'cart',params:{_limit:6}})
    )
    }

    render(){
        let {cart}=this.props;
        console.log(cart)
        return (
            <div className="pt">
                <div className='cart_top'>
                    <img src={shop1} style={{width:'50%'}}/>
                    <img src={shop2} style={{width:'50%'}}/>
                    <h2>编辑推荐 > </h2>
                    <hr style={{backgroundColor: 'red',height:'1px'}} />
                </div>
                {
                    cart.map(item => (
                        <Cart
                            key={item._id}
                            data={item}
                            to={{pathname:'/detail',apiname:'cart'}}
                        >
                        </Cart>
                    ))
                }

            </div>
        )
    }
}
export default connect(
    state=>({cart:state.cart})
)(Carts)