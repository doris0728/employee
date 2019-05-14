import React from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import { withStyles } from '@material-ui/core/styles';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
// import Divider from '@material-ui/core/Divider';
//import Typography from '@material-ui/core/Typography';
//import Divider from '@material-ui/core/Divider';
import { Typography } from 'antd';
import Divider from '@material-ui/core/Divider';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import Reserve3 from '../reserveList/reserveListComponent'
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import Airtable from 'airtable';

const TABLE_NAME = 'ReserveStudent';
const base = new Airtable({ apiKey: 'keyA7EKdngjou4Dgy' }).base('appcXtOTPnE4QWIIt');
const table = base(TABLE_NAME);

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    //marginLeft:'42px',
    marginTop:120,
    width:'93vw'
  },
  card:{
      width:550,
      height:270,
      marginTop:30,
      marginLeft:315,
      marginBottom:30,
  },
  table:{
      border:1,
      borderColor:'red',
      BorderStyle:'solid',
      rules:'all',
      marginLeft:50,
      marginTop:20,
      width:450,
      height:230,
      backgroundColor:'#f0f0f0',
  },
  text1:{
      //marginLeft:150,
      //marginTop:7,
      fontSize:18,
      fontWeight: "bold",
      color:'#66009D',
      fontFamily: "Microsoft JhengHei",
      letterSpacing:4,
  },
  texttitle:{
    fontSize:16,
    fontWeight: "bold",
    color:'#FFBF5F',
    fontFamily: "Microsoft JhengHei",
    letterSpacing:2,
    //marginLeft:25,
  },
  detail:{
    marginLeft:22,
    fontSize:16,
    fontWeight: "bold",
    color:'#969696',
    fontFamily: "Microsoft JhengHei",
    letterSpacing:2,
  },
  //title
  reservetitle:{
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
    paddingLeft:'79%',
    color:'#FFBF5F',
  }
});

class NativeSelects extends React.Component {
  state = {
    age: '',
    name: '王映心',
    region:'',
    date:'',
    time:'',
    class:'',
    labelWidth: 0,
  };

  //airtable
  componentDidMount() {

    const fileterSentence = 'AND(student_id = 405401279)'
    console.log(fileterSentence);
    table.select({
        filterByFormula: fileterSentence,
        view: "Grid view",
        maxRecords: 1
    }).eachPage((records, fetchNextPage) => {
        this.setState({ records });

        const reserve_date = this.state.records.map((record, index) => record.fields['reserve_date']);
        const reserve_address = this.state.records.map((record, index) => record.fields['reserve_address']);
        const reserve_time = this.state.records.map((record, index) => record.fields['reserve_time']);
        const reserve_class = this.state.records.map((record, index) => record.fields['reserve_class'])
        this.setState({
            date : reserve_date, region : reserve_address, time : reserve_time, class : reserve_class
        });
        fetchNextPage();
    }
    );
}

  handleChange = name => event => {
    this.setState({ [name]: event.target.value });
  };

  render() {
    const { classes } = this.props;
    console.log(this.state.region);
    return (
      <div className={classes.root}>

        <div className={classes.reservetitle}>
            <Typography class={classes.text} nowrap={true}>
              <a style={{marginLeft:35}}>補課紀錄</a>
              <a class={classes.textRight}>107學年</a>
            </Typography>
       
        
        <Divider variant="middle"/>
        </div>

      <Card className={classes.card}>
      <table className={classes.table}>
          <tr align="center"><td colspan="2"><Typography class={classes.text1}>補課資料</Typography></td></tr>

          <tr><td align="left"><a className={classes.texttitle} style={{marginLeft:35}}>姓名</a>
          <a className={classes.detail}>{this.state.name}</a></td>
          <td align="left"><a className={classes.texttitle}>校區</a>
          <a className={classes.detail}>{this.state.region}</a></td></tr>

          <tr><td align="left"><a className={classes.texttitle} style={{marginLeft:35}}>日期</a>
          <a className={classes.detail}>{this.state.date}</a></td>
          <td align="left"><a className={classes.texttitle}>時間</a>
          <a className={classes.detail}>{this.state.time}</a></td></tr>

          <tr align=""><td colspan="2"><a className={classes.texttitle} style={{marginLeft:35}}>預約課程</a>
          <a className={classes.detail}>{this.state.class}</a></td></tr>

      </table>
      </Card>

      <Card className={classes.card}>
      <table className={classes.table}>
          <tr align="center"><td colspan="2"><Typography class={classes.text1}>補課資料</Typography></td></tr>

          <tr><td align="left"><a className={classes.texttitle} style={{marginLeft:35}}>姓名</a>
          <a className={classes.detail}>{this.state.name}</a></td>
          <td align="left"><a className={classes.texttitle}>校區</a>
          <a className={classes.detail}>{this.state.region}</a></td></tr>

          <tr><td align="left"><a className={classes.texttitle} style={{marginLeft:35}}>日期</a>
          <a className={classes.detail}>{this.state.date}</a></td>
          <td align="left"><a className={classes.texttitle}>時間</a>
          <a className={classes.detail}>{this.state.time}</a></td></tr>

          <tr align=""><td colspan="2"><a className={classes.texttitle} style={{marginLeft:35}}>預約課程</a>
          <a className={classes.detail}>{this.state.class}</a></td></tr>

      </table>
      </Card>


      </div>
    );
  }
}

NativeSelects.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NativeSelects);
