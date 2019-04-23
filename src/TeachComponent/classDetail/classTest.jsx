import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/icons/TrendingFlatRounded'

//import AttendComponent from '../attend/attendComponent';
import { BrowserRouter as NavLink } from "react-router-dom";
import { Typography } from 'antd';
import IconButton from '@material-ui/core/IconButton';


const styles = theme => ({
  paper: {
    width:570,
    marginTop:40,
    overflowX: 'auto',
    //marginLeft:100,
    //marginRight:'5vw',
    marginBottom:20,
  },
  root: {
    width:500,
    marginTop:15,
    overflowX: 'auto',
    marginLeft:36,
    //marginRight:'5vw',
    marginBottom:30,
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
  }
});

let id = 0;
function createData(date,range, averagescore) {
  id += 1;
  return { id, date, range, averagescore};
}



const rows = [
  createData('10月7日', 'CH1~CH2', '80'),
  createData('10月7日', 'CH1~CH2', '80'),
  createData('10月7日', 'CH1~CH2', '80'),
  createData('10月7日', 'CH1~CH2', '80'),
];

function SimpleTable(props) {
  const { classes } = props;

  return (
    <Paper className={classes.paper}>
    <div className={classes.title}>
    <Typography style={{color:'#969696',fontFamily: "Microsoft JhengHei",letterSpacing:4,fontSize:18,
    fontWeight:'bold',marginLeft:32,marginTop:15}}>考試平均</Typography>
    <NavLink style={{textDecoration:'none'}} activeClassName='active' to='/classScore'>
      <IconButton style={{marginLeft:390}}><Button/></IconButton></NavLink>
      </div>
    <Paper className={classes.root}>
    
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell align="center" style={{color:'#969696',fontFamily: "Microsoft JhengHei",
                      letterSpacing:4,fontSize:15,fontWeight: "bold"}}>日期</TableCell>
            <TableCell align="center" style={{color:'#969696',fontFamily: "Microsoft JhengHei",
                      letterSpacing:4,fontSize:15,fontWeight: "bold"}}>考試範圍</TableCell>
            <TableCell align="center" style={{color:'#969696',fontFamily: "Microsoft JhengHei",
                      letterSpacing:4,fontSize:15,fontWeight: "bold"}}>考試平均</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <TableRow key={row.id}>
              <TableCell align="center" style={{color:'#969696',fontFamily: "Microsoft JhengHei",
                      letterSpacing:3,fontSize:15}}>{row.date}</TableCell>
              <TableCell align="center" style={{color:'#969696',fontFamily: "Microsoft JhengHei",
                      letterSpacing:1,fontSize:15}}>{row.range}</TableCell>
              <TableCell align="center" style={{color:'#5A3DAA',fontFamily: "Microsoft JhengHei",
                      letterSpacing:3,fontSize:15,fontWeight: "bold"}}>{row.averagescore}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
    </Paper>
  );
}

SimpleTable.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleTable);
