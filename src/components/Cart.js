import React, { PureComponent } from "react";
import "../styles.css";
import CartItem from './CartItem';
import store from './redux/store';

class Cart extends PureComponent {
  state = {
    cartGoods: []
  }

  componentDidMount() {
    store.subscribe(() => {
      let state = store.getState();
      console.log(state.card)
      this.setState({cartGoods:state.card}, console.log(state))
    })
    
  }
  getTotal() {
    const { cartGoods } = this.state;
    return cartGoods.reduce((acc, item) => acc + item.price, 0);
  }
  render() {
    return (
      <div className="cart">
        <h2 className="cart__title" >Shopping Cart</h2>
        { this.state.cartGoods.length ?
          <ul className="cart__list">
            {this.state.cartGoods.map((item, index) => (
              <li className="cart__list-item" key={index}>
                <CartItem {...item} />
              </li>
            ))}
          </ul>
        :
          <p className="cart__note">Nothing in the cart now</p>
        }

        <p className="cart__total">Total: {this.getTotal()}.00$</p>
      </div>
    );
  }
}

export default Cart;