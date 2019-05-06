import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
//import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import Toolbar from '@material-ui/core/Toolbar';
import Paper from '@material-ui/core/Paper';
//import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import DeleteIcon from '@material-ui/icons/Delete';
import FilterListIcon from '@material-ui/icons/FilterList';
import { lighten } from '@material-ui/core/styles/colorManipulator';
import Divider from '@material-ui/core/Divider';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import Button from '@material-ui/core/Button';
import {Card,Typography} from '@material-ui/core'; 

const styles = theme => ({
  root: {
    width:780,
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
    marginLeft:120,
    marginRight:70,
    marginBottom:20,
  },
  table: {
    //width: 1020,
    minWidth:400,
  },
  tableWrapper: {
    overflowX: 'auto',
  },
  //Title的
  SelectRoot: {
    display: 'flex',
    flexWrap: 'wrap',
    //marginLeft:34,
    //marginTop:20,
    //height:'50px',
    width:1020,
    marginLeft:10
  },
  SelectTable:{
    //marginTop:'3vh',
    align:'center',
    width:'100%',
  },
  text:{
    //marginLeft:35,
    width:'100%',
    marginBottom:15,
    fontSize:20,
    fontWeight: "bold",
    color:'#969696',
    fontFamily: "Microsoft JhengHei",
    letterSpacing:4,
  },
  textRight:{
    fontSize:13,
    paddingLeft:'65%',
    color:'#FFBF5F',
  },
  card:{
    backgroundColor: 'white',
    //border: '0.8px #FFBF5F solid',
    borderRadius: '2px',
    width: '96%',
    marginTop: theme.spacing.unit * 3,
    margin: '0 auto',
    //cardElevation:'0'
  }
});


//const { classes } = this.props; //這是setlect的
class EnhancedTable extends React.Component {
  state = {
    //下面是select跟title的
    age: '',
    classname: '數學A卷',
  };


  render() {
    const { classes } = this.props;

    return (
    <div style={{marginTop:100}}>

    {/* 下面是select跟title */}
    <div className={classes.SelectRoot}>
      
      <div className={classes.SelectTable}>
          <Typography class={classes.text} nowrap={true}>
            <a style={{color:'#FFBF5F',marginLeft:35}}>{this.state.classname}</a><a>考試分析</a>
            <a class={classes.textRight}>107學年</a>
          </Typography>
      <Divider variant="middle"/>

      <Card className={classes.card}>
      <Typography>aaaaa</Typography>
      <Typography>aaaaa</Typography>
      <Typography>aaaaa</Typography>
      <Typography>aaaaa</Typography>
      <Typography>aaaaa</Typography>
      </Card>

      </div>
    </div>
    {/* select跟title結束 */}

    </div>
    );
  }
}

EnhancedTable.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(EnhancedTable);
