var React = require("react");
var ReactDOM = require("react-dom");
require('./index.css');
import ShoppingCart from './Container/ShoppingCart.js'
import Products from './Container/Products.js'

class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      storeName: "Sethi Grocery Store",
      cart: [],
      total: 0
    };
    this.addToCartCB = this.addToCartCB.bind(this);
    this.removeItemCB = this.removeItemCB.bind(this);
  }

  removeItemCB(elemId){
    const newCart = this.state.cart;
    const index = this.checkIfElemPresent(elemId);
    let newTotal = this.state.total;
    if(index > -1){
      newTotal -= newCart[index].subTotal;
      newCart.splice(index, 1);
    }
    this.setState({
      cart: newCart,
      total: newTotal
    });
  }

  checkIfElemPresent(id){
    return this.state.cart.findIndex(elem => elem.id == id);
  }

  addToCartCB(content, quantity){
    const idx = this.checkIfElemPresent(content.id);
    const newCart = this.state.cart;
    if(idx != -1){
      newCart[idx].quantity += quantity;
      newCart[idx].subTotal += quantity * content.price;
    }
    else{
      newCart.push({id: content.id, name: content.name, price: content.price, quantity: quantity, subTotal: (quantity * content.price)})
    }
    const newTotal = this.state.total + quantity * content.price;
    this.setState({
      cart: newCart,
      total: newTotal
    });
  }

  render() {
    return (
      <div className="container">
        <div className="page-header">{this.state.storeName}</div>
        <div className="page-content">
          <Products addToCartCB={this.addToCartCB}/>
          <ShoppingCart displayCart={this.state.cart} total={this.state.total} removeItem={this.removeItemCB}/>
        </div>
      </div>
    )
  }
}

ReactDOM.render(
  <App/>, document.getElementById("app")
)
