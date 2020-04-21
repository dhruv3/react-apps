# Getting Started With React Hooks
[Source](https://www.valentinog.com/blog/hooks/)
* React is a library for building user interfaces and one of its perks is that the library itself imposes a strict data flow to the developer. 
* React hooks it's possible to express the flow internal state change -> UI reaction without using an ES6 class.

## useState
```js
import React, { useState } from "react";
```
* `useState` signals => 
  * Intent to hold some kind of state inside your React component
  * React component shouldn't be an ES6 class 
```js
const [buttonText, setButtonText] = useState("Click me, please")
```
* The argument passed to useState is the actual starting state.
* useState returns for you two bindings:
  * the actual value for the state
  * the state updater function for said state
## useEffect
* Using `fetch` in `componentDidMount`.
* `render prop` pattern(born for providing a nicer alternative to mixins and HOCs) has its shortcomings.
* Hooks provide a better ergonomics for encapsulating and reusing logic in React.
* "useEffect serves the same purpose as componentDidMount, componentDidUpdate, and componentWillUnmount in React classes, but unified into a single API"
```js
import React, { useState, useEffect } from "react";

export default function DataLoader() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/links/")
      .then(response => response.json())
      .then(data => setData(data));
  }, []);

  return (
    <div>
      <ul>
        {data.map(el => (
          <li key={el.id}>{el.title}</li>
        ))}
      </ul>
    </div>
  );
}
```
* Observe 3 things:
 * Use `setData` (an arbitrary function extracted from useState)
 * The component becomes a function and fetch gets called inside useEffect
 * you would need to pass an array as a second argument to useEffect in order to prevent infinite loop(React compares current data with prev data and moves fwd only if a change happened. Read this: https://reactjs.org/docs/hooks-effect.html#tip-optimizing-performance-by-skipping-effects)

## Custom React hook
```js
// useFetch.js
import { useState, useEffect } from "react";

export default function useFetch(url) {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(url)
      .then(response => response.json())
      .then(data => setData(data));
  }, []);

  return data;
}
```
* nice, standardized, and clean way for encapsulating and sharing logic.
