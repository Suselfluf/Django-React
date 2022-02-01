import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import HeadLine from './components/HeadLine'

ReactDOM.render(
  <React.StrictMode>
    <HeadLine></HeadLine>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );
// reportWebVitals();


// import React from "react";
// import reactDom from "react-dom";
// import './index.css';
// import {Route, BrowserRouter as Router, Switch} from 'react-router-dom'
// import App from "./App";
// import bodyLine from './components/bodyLine'
// import headLine from './components/headLine'
// import legsLine from './components/legsLine'
// import shoesLine from './components/shoesLine'

// const wrapper = (
//   <headLine></headLine>
// )

// reactDom.render(wrapper, document.getElementById('root'))