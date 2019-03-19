import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ReactApp from './components/react-app.jsx';
import * as serviceWorker from './serviceWorker';
import Bar from './components/Bar.jsx'
import Try from './components/tabletry.jsx'

ReactDOM.render(<Bar />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();