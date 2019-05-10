import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
//import Button from '@material-ui/core/Button';
import {Divider} from '@material-ui/core'
//import AttendComponent from '../attend/attendComponent';
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import { Typography } from 'antd';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/icons/TrendingFlatRounded'

const styles = theme => ({
  paper: {
    width:270,
    height:343,
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

  },
  title:{
    display:'flex'
  },
  recordText:{
    color:'#5A3DAA',
    fontFamily: "Microsoft JhengHei",
    letterSpacing:4,
    fontWeight:'bold',
    textAlign:'center',
  }
});


function SimpleTable(props) {
  const { classes } = props;

  return (
    <Paper className={classes.paper}>
    <div className={classes.title}>
    <Typography style={{color:'#969696',fontFamily: "Microsoft JhengHei",letterSpacing:4,fontSize:18,
    fontWeight:'bold',marginLeft:32,marginTop:15}}>上週教學進度</Typography>
      <NavLink style={{textDecoration:'none',color:'#818181'}} activeClassName='active' to='/teach/teachrecord'>
      <IconButton style={{marginLeft:55}}><Button/></IconButton>
      </NavLink>
    </div>
    <Paper className={classes.root}>
    <div>
    <Typography className={classes.recordText} style={{fontSize:21,marginTop:15,marginTop:55,marginBottom:55}}>
        數學講義(一)</Typography>
    </div>
    <Divider variant="middle"/>
    <Typography className={classes.recordText} style={{fontSize:18,marginTop:40,marginTop:25}}>
        p.50~80</Typography>
    </Paper>
    </Paper>
  );
}

SimpleTable.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleTable);
