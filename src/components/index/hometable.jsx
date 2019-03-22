import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const styles = theme => ({
  root: {
    width: '90%',
    height: '70%',
    marginLeft: 40,
    //marginBottom: 100,
    //marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
    overflowY: 'auto',
  },
  table: {
    minWidth: 500,
  },
});

let id = 0;
function createData(Class, Date, Score, Ranking) {
  id += 1;
  return { id, Class, Date, Score, Ranking };
}

const rows = [
  createData('Math B', '10/2', 87, 24),
  createData('Chinese A', '10/2', 87, 37),
  createData('English C', '10/2', 87, 24),
  createData('Math B', '10/2', 87, 87),
];

function SimpleTable(props) {
  const { classes } = props;

  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell>Class</TableCell>
            <TableCell align="right">Date</TableCell>
            <TableCell align="right">Score</TableCell>
            <TableCell align="right">Ranking</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <TableRow key={row.id}>
              <TableCell component="th" scope="row">
                {row.Class}
              </TableCell>
              <TableCell align="right">{row.Date}</TableCell>
              <TableCell align="right">{row.Score}</TableCell>
              <TableCell align="right">{row.Ranking}</TableCell>
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