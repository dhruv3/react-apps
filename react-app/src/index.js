import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {ClassApp} from './App';
import {RefsApp} from './Refs';
import {Wrapper} from './LifeCycleMethods';
import {Fetch} from './fetchAPI';

const Elem = () => (
  <div>
    <h1>Use of Life Cycle Methods</h1>
    <Wrapper/>
    <h1>Use React ref to Get a Reference to Specific Components</h1>
    <RefsApp/>
    <h1>State Component and Constructor</h1>
    <ClassApp/>
    <App/>
    <h1>Fetch API</h1>
    <Fetch/>
  </div>
)

ReactDOM.render(
  <div>
    <Elem/>
  </div>,
  document.getElementById('root')
);
