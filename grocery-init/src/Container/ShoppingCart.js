var React = require("react");
var ReactDOM = require("react-dom");

class ShoppingCart extends React.Component{
  constructor(props) {
    super(props);
    this.cartItems = null;
  }

  render() {
    this.cartItems = this.props.displayCart.map(product => {
      return (
        <li className="item" key={product.name}>
            <p className="name">{product.name}</p>
            <div className="total">
              <p className="calc">{product.quantity} * {product.price}</p>
            </div>
            <p className="amt">${product.subTotal}</p>
            <a className="remove" onClick={() => this.props.removeItem(product.id)}>X</a>
        </li>
      );
    });
    const isEmpty = this.props.total == 0 ? true : false;
    return (
      <div className="shopping-cart-container">
        <div className="sub-header">Shopping Cart</div>
        {this.cartItems}
        {isEmpty ? (<div className="emptyBasket">Empty Basket</div>) : (<div className="cartTotal">Total = ${this.props.total}</div>)}
      </div>
    )
  }
}

export default ShoppingCart
