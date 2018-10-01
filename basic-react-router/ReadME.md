# Basic React Router

This apps is created following [this tutorial](https://medium.com/@pshrmn/a-simple-react-router-v4-tutorial-7f23ff27adf).

## Notes from tutorial

This package will `react-router` and provide browser specific environment.
```bash
npm install --save react-router-dom
```

There are two types of routers:
* `<BrowserRouter>`: Used when you have a server that will handle dynamic requests(knows how to respond to any possible URI).
* `<HashRouter>`: Used for static websites (where the server can only respond to requests for files that it knows about).

### History
Each router creates a `history` object, which it uses to keep track of the current location and re-render the website whenever that changes.

Other components provided by React Router rely on having that history object available through React’s context, so they must be rendered as descendants of a router component.

### Rendering a `<Router>`
Router components only expect to receive a single child element.

```javascript
import { BrowserRouter } from 'react-router-dom'
ReactDOM.render((
  <BrowserRouter>
    <App />
  </BrowserRouter>
), document.getElementById('root'))
```
The `<Route>` component is the main building block of React Router. Anywhere that you want to only render content based on the location’s pathname, you should use a `<Route>` element.

`<Route>` has `path` prop, which is a string that describes the pathname that the route matches — for example, `<Route path='/roster'/>` should match a pathname that begins with `/roster`.

When the path does not match, the route will not render anything.

**Note**: When it comes to matching routes, React Router only cares about the pathname of a location. That means that given the URL:

`
http://www.example.com/my-projects/one?extra=false
`

the only part that React Router attempts to match is `/my-projects/one`.
