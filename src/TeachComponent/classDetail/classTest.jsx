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

//import AttendComponent from '../attend/attendComponent';
import { BrowserRouter as NavLink } from "react-router-dom";


const styles = theme => ({
  root: {
    width:550,
    marginTop:50,
    overflowX: 'auto',
    //marginLeft:100,
    //marginRight:'5vw',
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
                      letterSpacing:4,fontSize:15}}>{row.date}</TableCell>
              <TableCell align="center" style={{color:'#969696',fontFamily: "Microsoft JhengHei",
                      letterSpacing:4,fontSize:15}}>{row.range}</TableCell>
              <TableCell align="center" style={{color:'#5A3DAA',fontFamily: "Microsoft JhengHei",
                      letterSpacing:4,fontSize:15,fontWeight: "bold"}}>{row.averagescore}</TableCell>
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
