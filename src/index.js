import React from 'react';
 import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import App from './App';
import reducer from './redux/reducer';
import thunk from 'redux-thunk'


let myStore=createStore(reducer,applyMiddleware(thunk));
ReactDOM.render( <Provider store={myStore}><App/></Provider> , document.getElementById("root"))




// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';
// import reducer from './redux/reducer';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
