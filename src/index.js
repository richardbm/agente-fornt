import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
require("react-select");

// Be sure to include styles at some point, probably during your bootstrapping
//import 'react-select/dist/react-select.css';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
