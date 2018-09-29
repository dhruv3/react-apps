var React = require("react");
var ReactDOM = require("react-dom");
import Product from '../Component/Product.js'

class Products extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      products: []
    };
  }

  getProducts() {
    const url = "https://res.cloudinary.com/dhruv-3/raw/upload/v1538075081/untapt/data.json";
    let self = this;
    fetch(url)
      .then(response => response.json())
        .then(function(fromResolve){
          self.setState({
            products: fromResolve
          })
        });
  }

  componentWillMount() {
    this.getProducts();
  }

  render() {
    return (
      <div className="products-container">
        <div className="sub-header">Products</div>
        <div className="product-list">
          {this.state.products.map(elem => <Product key={elem.id} content={elem} addToCartCB={this.props.addToCartCB}/>)}
        </div>
      </div>
    )
  }
}

export default Products
