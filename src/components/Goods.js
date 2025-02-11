import React, { PureComponent } from "react";
import "../styles.css";
import GoodsItem from './GoodsItem';
import {connect} from 'react-redux'

class Goods extends PureComponent {
   
  render() {
    return (
      <div className="goods">
        <h2 className="goods__title">Video Games</h2>        
        {this.props.goods.map((item, index) => (
          <ul className="goods__list" key={index}>
            <li className="goods__list-item">
              <GoodsItem {...item} />
            </li>
          </ul>
        ))}
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    goods:state.goods,
  }
}

export default connect(mapStateToProps)(Goods);