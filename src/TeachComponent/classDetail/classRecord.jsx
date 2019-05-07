import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import {Divider} from '@material-ui/core'
//import AttendComponent from '../attend/attendComponent';
import { BrowserRouter as NavLink } from "react-router-dom";
import { Typography } from 'antd';


const styles = theme => ({
  paper: {
    width:270,
    height:333,
    marginTop:40,
    overflowX: 'auto',
    //marginLeft:100,
    //marginRight:'5vw',
    marginBottom:20,
  },
  root: {
    width:200,
    marginTop:25,
    height:230,
    overflowX: 'auto',
    marginLeft:35,
    //marginRight:'5vw',
    //marginBottom:30,
  },
  table: {
    minWidth:300,
  },
  button:{
    textDecoration:'none',
    // boxShadow:'none',
    // textShadow:'none',
    // border:'none',
    // outline:'none',

  }
});


function SimpleTable(props) {
  const { classes } = props;

  return (
    <Paper className={classes.paper}>
    <Typography style={{color:'#969696',fontFamily: "Microsoft JhengHei",letterSpacing:4,fontSize:18,
    fontWeight:'bold',marginLeft:32,marginTop:15}}>上週教學進度</Typography>
    <Paper className={classes.root}>
    <div>
    <Typography style={{color:'#5A3DAA',fontFamily: "Microsoft JhengHei",letterSpacing:4,fontSize:21,
    fontWeight:'bold',marginTop:15,textAlign:'center',marginTop:55,marginBottom:55}}>數學講義(一)</Typography>
    </div>
    <Divider variant="middle"/>
    <Typography style={{color:'#5A3DAA',fontFamily: "Microsoft JhengHei",letterSpacing:4,fontSize:18,
    fontWeight:'bold',marginTop:15,textAlign:'center',marginTop:25}}>p.50~80</Typography>
    </Paper>
    </Paper>
  );
}

SimpleTable.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleTable);
