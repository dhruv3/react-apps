# [Intro Hooks](https://reactjs.org/docs/hooks-intro.html)

* Hooks let you use state and other React features without writing a class.
## Motivation for Hooks
* React needs a better primitive for sharing stateful logic.
* Hooks let you split one component into smaller functions based on what pieces are related (such as setting up a subscription or fetching data), rather than forcing a split based on lifecycle methods.
* Hooks let you use more of React’s features without classes.

# [Hooks at a Glance](https://reactjs.org/docs/hooks-overview.html)
## State Hook
```js
function ExampleWithManyStates() {
  // Declare multiple state variables!
  const [age, setAge] = useState(42);
  const [fruit, setFruit] = useState('banana');
  const [todos, setTodos] = useState([{ text: 'Learn Hooks' }]);
  // ...
}
```
* `useState` returns a pair: the current state value and a function that lets you update it. 
* The only argument to `useState` is the initial state.
* Hooks are functions that let you “hook into” React state and lifecycle features from function components. 
* Hooks don’t work inside classes — they let you use React without classes. 

## Effect Hook
* `useEffect`, adds the ability to perform side effects from a function component.
```js
import React, { useState, useEffect } from 'react';

function Example() {
  const [count, setCount] = useState(0);

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    // Update the document title using the browser API
    document.title = `You clicked ${count} times`;
  });

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}
```
* When you call useEffect, you’re telling React to run your “effect” function after flushing changes to the DOM. 
* By default, React runs the effects after every render — including the first render. 

## Rules of Hooks
1. Only call Hooks at the top level. Don’t call Hooks inside loops, conditions, or nested functions.
2. Only call Hooks from React function components.

