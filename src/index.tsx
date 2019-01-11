import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

var phone = {
  pincode: 'khazi',
  number: 'afzal'
}
var Person = {
  name: {
    firstName: 'khazi',
    lastName: 'Afzal'
  },
  phone: {
    pincode: '91',
    number: '9844317471'
  }
};

ReactDOM.render(<App person={Person}/>, document.getElementById("root"));