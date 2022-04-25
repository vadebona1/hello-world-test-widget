import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Select all instances of the widget
const WidgetDivs = document.querySelectorAll('#hello-world-widget');

WidgetDivs.forEach(div => {
  ReactDOM.render(
    <React.StrictMode>
      <App domElement={div} />
    </React.StrictMode>,
    div
  );
});

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
