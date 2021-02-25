import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Courses } from './containers/courses/Courses';

// import { configureFakeBackend } from './helpers/fake-backend';
// configureFakeBackend();

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
//  <Courses></Courses>,
  document.getElementById('root')
);
