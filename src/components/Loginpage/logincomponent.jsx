import React from 'react';
import axios from 'axios';
import { AppBar, Drawer } from '@material-ui/core';
import Login from './login.jsx';

const styles = theme => ({
    root: {
        display: 'flex',
        background:'#FFF6E8',
    },
});
export default class ReactApp extends React.Component {
    
    render() {
        const { classes } = this.props;
        return (
                <div>
                    <Login/>
                </div>
            
            )
    }
}