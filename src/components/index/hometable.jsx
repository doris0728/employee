import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Airtable from 'airtable';

const TABLE_NAME = 'Homework';
const base = new Airtable({ apiKey: 'keyA7EKdngjou4Dgy' }).base('appcXtOTPnE4QWIIt');
const table = base(TABLE_NAME);

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
function createData(Class, Homework, Date) {
  id += 1;
  return { id, Class, Homework, Date };
}

// const rows = [
//   createData('Math B', '繳交數學本 p.66~p.70' , '10/2'),
//   createData('Chinese A', '繳交數學本 p.66~p.70', '10/2'),
//   createData('English C', '繳交數學本 p.66~p.70', '10/2'),
//   createData('Math B', '繳交數學本 p.66~p.70', '10/2'),
// ];

// function SimpleTable(props) {
//   const { classes } = props;

//   return (
//     <Paper className={classes.root}>
//       <Table className={classes.table}>
//         <TableHead>
//           <TableRow>
//             <TableCell>Class</TableCell>
//             <TableCell >Homework</TableCell>
//             <TableCell>Date</TableCell>
//           </TableRow>
//         </TableHead>
//         <TableBody>
//           {rows.map(row => (
//             <TableRow key={row.id}>
//               <TableCell component="th" scope="row">{row.Class}</TableCell>
//               <TableCell>{row.Homework}</TableCell>
//               <TableCell>{row.Date}</TableCell>
//             </TableRow>
//           ))}
//         </TableBody>
//       </Table>
//     </Paper>
//   );
// }

class SimpleTable extends React.Component {
  state = {
    //studentData: [],
    rows:[],
  };
  componentDidMount() {
    table.select({
    //filterByFormula: 'AND(student_id = 405401369)',
    view: "Grid view",
    //maxRecords: 3,
    }).eachPage((records, fetchNextPage) => {

      //const student_id = records.map((record, index) => record.fields['student_id']);
      const class_id = records.map((record, index) => record.fields['class_id']);
      const hw_name = records.map((record, index) => record.fields['hw_name']);
      const hw_date = records.map((record, index) => record.fields['hw_date']);
      // // This function (`page`) will get called for each page of records.

      var temp=[];
      for(var index = 0; index < 3; index++) {
        temp.push(createData(class_id[index], hw_name[index], hw_date[index]));
      }
      console.log(temp);
      this.setState({ rows : temp });
      fetchNextPage(); 
    }
    );

  }
  render(props){
    const { classes } = this.props;
    const { rows } = this.state;  
    return (
      <Paper className={classes.root}>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell>Class</TableCell>
              <TableCell >Homework</TableCell>
              <TableCell>Date</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map(row => (
              <TableRow key={row.id}>
                <TableCell component="th" scope="row">{row.Class}</TableCell>
                <TableCell>{row.Homework}</TableCell>
                <TableCell>{row.Date}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
    );
  }
}

SimpleTable.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleTable);