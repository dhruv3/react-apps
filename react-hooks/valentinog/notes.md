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
* render prop pattern(born for providing a nicer alternative to mixins and HOCs) has its shortcomings.
* Hooks provide a better ergonomics for encapsulating and reusing logic in React.
