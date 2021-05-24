import React, { PureComponent } from "react";
import "../styles.css";
import {connect} from 'react-redux'
import {deleteToCard} from './redux/actionCreator'


class CartItem extends PureComponent {
  render() {
    const { title, price, id } = this.props;
    return (
      
      <div className="cart-item">        
        <p className="cart-item__title">{title}</p>
        <p className="cart-item__price">{price}.00$</p>
        {console.log(id)}
        <button onClick = {() => this.props.del(id)}>delete</button>
      </div>
    );
  }
}

let delGood = (dispath) => {
  return {
    del: (id) => {dispath(deleteToCard(id))}
  }
}
export default connect(() =>{return {}}, delGood)(CartItem);