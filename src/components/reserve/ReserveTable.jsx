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

import AttendComponent from '../attend/attendComponent';
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";


const styles = theme => ({
  root: {
    width:'80vw',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
    marginLeft:'5vw',
    marginRight:'5vw',
    marginBottom:20,
  },
  table: {
    minWidth:400,
  },
  button:{
    textDecoration:'none',
    // boxShadow:'none',
    // textShadow:'none',
    // border:'none',
    // outline:'none',

  }
});

let id = 0;
function createData(date, region, time, reserve) {
  id += 1;
  return { id, date, region, time, reserve};
}



const rows = [
  createData('10月7日', '台北校區', '10:00', 
  <NavLink style={{textDecoration:'none'}} activeClassName='active' to='/reserve2'>
  <Button variant="contained"
  style={{fontFamily: "Microsoft JhengHei",etterSpacing:4,fontSize:13,fontWeight: "bold",height:30,
  backgroundColor:'#FFBF5F',color:'white'}}>
  預約</Button>
  </NavLink>
  ),
  createData('10月7日', '板橋校區', '10:00', 
  <NavLink style={{textDecoration:'none'}} activeClassName='active' to='/reserve2'>
  <Button variant="contained"
  style={{fontFamily: "Microsoft JhengHei",etterSpacing:4,fontSize:13,fontWeight: "bold",height:30,
  backgroundColor:'#FFBF5F',color:'white'}}>
  預約</Button>
  </NavLink>),
  createData('10月7日', '古亭校區', '11:00', 
  <NavLink style={{textDecoration:'none'}} activeClassName='active' to='/reserve2'>
  <Button variant="contained"
  style={{fontFamily: "Microsoft JhengHei",etterSpacing:4,fontSize:13,fontWeight: "bold",height:30,
  backgroundColor:'#FFBF5F',color:'white'}}>
  預約</Button>
  </NavLink>),
  createData('10月7日', '台北校區', '12:00', 
  <NavLink style={{textDecoration:'none'}} activeClassName='active' to='/reserve2'>
  <Button variant="contained"
  style={{fontFamily: "Microsoft JhengHei",etterSpacing:4,fontSize:13,fontWeight: "bold",height:30,
  backgroundColor:'#FFBF5F',color:'white'}}>
  預約</Button>
  </NavLink>),
  createData('10月7日', '板橋校區', '14:00', 
  <NavLink style={{textDecoration:'none'}} activeClassName='active' to='/reserve2'>
  <Button variant="contained"
  style={{fontFamily: "Microsoft JhengHei",etterSpacing:4,fontSize:13,fontWeight: "bold",height:30,
  backgroundColor:'#FFBF5F',color:'white'}}>
  預約</Button>
  </NavLink>),
];

function SimpleTable(props) {
  const { classes } = props;

  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell align="center" style={{color:'#969696',fontFamily: "Microsoft JhengHei",
                      letterSpacing:4,fontSize:15,fontWeight: "bold"}}>日期</TableCell>
            <TableCell align="center" style={{color:'#969696',fontFamily: "Microsoft JhengHei",
                      letterSpacing:4,fontSize:15,fontWeight: "bold"}}>校區</TableCell>
            <TableCell align="center" style={{color:'#969696',fontFamily: "Microsoft JhengHei",
                      letterSpacing:4,fontSize:15,fontWeight: "bold"}}>補課時間</TableCell>
            <TableCell align="center" style={{color:'#969696',fontFamily: "Microsoft JhengHei",
                      letterSpacing:4,fontSize:15,fontWeight: "bold"}}>預約</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <TableRow key={row.id}>
              <TableCell align="center" style={{color:'#969696',fontFamily: "Microsoft JhengHei",
                      letterSpacing:4,fontSize:15}}>{row.date}</TableCell>
              <TableCell align="center" style={{color:'#969696',fontFamily: "Microsoft JhengHei",
                      letterSpacing:4,fontSize:15}}>{row.region}</TableCell>
              <TableCell align="center" style={{color:'#969696',fontFamily: "Microsoft JhengHei",
                      letterSpacing:4,fontSize:15}}>{row.time}</TableCell>
              <TableCell align="center" style={{color:'#969696',fontFamily: "Microsoft JhengHei",
                      letterSpacing:4,fontSize:15}}>{row.reserve}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
}

SimpleTable.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleTable);