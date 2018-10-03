import { Switch, Route, Link } from 'react-router-dom';
var React = require("react");
var ReactDOM = require("react-dom");
import {Player, PlayerAPI} from './Player.js';

const Roster = () => (
  <div>
    <h2>This is a roster page!</h2>
    <Switch>
      <Route exact path='/roster' component={FullRoster}/>
      <Route path='/roster/:number' component={Player}/>
    </Switch>
  </div>
)

const FullRoster = () => (
  <div>
    <ul>
      {
        PlayerAPI.all().map(p => (
          <li key={p.number}>
            <Link to={`/roster/${p.number}`}>{p.name}</Link>
          </li>
        ))
      }
    </ul>
  </div>
)

const Schedule = () => (
  <div>
    <ul>
      <li>6/5 @ Evergreens</li>
      <li>6/8 vs Kickers</li>
      <li>6/14 @ United</li>
    </ul>
  </div>
)

const Home = () => (
  <div>
    <h1>Welcome to the Tornadoes Website!</h1>
  </div>
)

const NestedRouter1 = () => (
  <div>
    <h1>Welcome to NestedRouter1!</h1>
  </div>
)

const NestedRouter2 = () => (
  <div>
    <h1>Welcome to NestedRouter2!</h1>
  </div>
)

const NestedRouter3 = () => (
  <div>
    <h1>Welcome to NestedRouter3!</h1>
  </div>
)

const NestedRouter = () => (
  <header>
    <h1>Nested Router Links</h1>
    <nav>
      <ul>
        <li><Link to='/nestedRouter/cars'>Cars</Link></li>
        <li><Link to='/nestedRouter/about'>About Nested Router</Link></li>
      </ul>
    </nav>
  </header>
)

const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/roster' component={Roster}/>
      <Route path='/schedule' component={Schedule}/>
      <Route component={NestedRouter} path="/nestedRouter">
          <Route exact path="/" component={NestedRouter1}/>
          <Route path="/cars" component={NestedRouter2}/>
          <Route path="/about" component={NestedRouter3}/>
      </Route>
    </Switch>
  </main>
)

export default Main
