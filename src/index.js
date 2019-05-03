import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ReactApp from './components/react-app.jsx';
import * as serviceWorker from './serviceWorker';
import Bar from './components/Bar.jsx'
import Try from './components/tabletry.jsx'
import Reserve from './components/reserve/reserveComponent.jsx'
import Login from './components/Loginpage/login.jsx';
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import { withStyles, MuiThemeProvider, createMuiTheme,styles } from '@material-ui/core/styles';
import Routerjs from './Router';
ReactDOM.render(<Routerjs />, document.getElementById('root'));
// class Barrr extends React.Component {
//     render() {
//         return(
//             <Router>
//             <div>
//                 <Route path="/bar" component={Bar} />
//             </div>
//             </Router>
//         );
//     }
// }
// export default withStyles(styles, { withTheme: true })(Barrr);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();