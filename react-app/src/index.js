import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {ClassApp} from './App';
import {RefsApp} from './Refs';

const Elem = () => (
  <div>
    <h1>Use React ref to Get a Reference to Specific Components</h1>
    <RefsApp/>
    <h1>State Component and Constructor</h1>
    <ClassApp/>
    <App/>
  </div>
)

ReactDOM.render(
  <div>
    <Elem/>
  </div>,
  document.getElementById('root')
);
