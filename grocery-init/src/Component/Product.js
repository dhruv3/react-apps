var React = require("react");
var ReactDOM = require("react-dom");

class Product extends React.Component{
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
  }

  render() {
    return (
      <div className="product">
        <div className="product-image">
          <img src={this.props.content.image} />
        </div>
        <p className="product-name">{this.props.content.name}</p>
        <p className="product-price">${this.props.content.price}</p>
        <input type="number" min="1" max="100" ref={this.myRef}/>
        <button onClick={() => this.props.addToCartCB(this.props.content, parseInt(this.myRef.current.value))}>Add to cart</button>
      </div>
    )
  }
}

export default Product
