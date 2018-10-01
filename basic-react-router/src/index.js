var React = require("react");
var ReactDOM = require("react-dom");
import { BrowserRouter } from 'react-router-dom';
import Main  from './Main.js';
import Header  from './Header.js';
require('./index.css');

const App = () => (
  <div>
    <Header/>
    <Main />
  </div>
)

ReactDOM.render((
  <BrowserRouter>
    <App />
  </BrowserRouter>
), document.getElementById('root'))
