import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import Button from '@material-ui/core/Button';
import {Card,Typography} from '@material-ui/core'; 
import GlobeIcon from '@material-ui/icons/LanguageRounded';
import ManIcon from '@material-ui/icons/HowToRegRounded'
import Chart from "react-google-charts";

//analysischart data
const analysisdata = [
  ["", "", { role: "style" }],
  ["A", 8.94, "#5A3DAA"], // RGB value
  ["B", 10.49, "#FFC880"], // English color name
  ["C", 19.3, "#FFC880"],
  ["D", 21.45, "#FFC880"] // CSS-style declaration
];

//chart style
const analysisoption = {
  width:300,
  legend: {position: 'none'}
};

const data=[
  ['','及格', '不及格','缺考'],
  [ '',41, 30,10],
];
const option={
  colors: ['#5A3DAA', '#FFBF5F','#ECECEC'],
  chartArea: { width: '95%' },
  isStacked: true,
  height:120,
  width:950,
  hAxis: {
    baselineColor: 'none',
    ticks: []
  },
  vAxis: {
    baselineColor: 'none',
    ticks: []
  },
  legend: {
    position: 'none'
  },
};

const styles = theme => ({
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
  },
  divflex:{
    display:'flex'
  },
  analysis:{
    display:'flex',
    flexWrap: 'wrap',
    width:1010,
    marginBottom:20
  },
  analysisCard:{
    width:305,
    marginLeft:30,
    marginTop:25
  },
  analysistext:{
    fontSize:16,
    fontWeight: "bold",
    color:'#969696',
    fontFamily: "Microsoft JhengHei",
    letterSpacing:1,
    marginLeft:10,
    marginTop:5
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
      <div className={classes.divflex}>
        <div><ManIcon style={{height:'100%',width:70,marginLeft:20,color:'purple'}}/></div>
        <Chart chartType="BarChart" data={data} options={option}/>
        <div>  
        </div>

      </div>
      </Card>

      </div>
    </div>
    {/* select跟title結束 */}

    {/* 答題分析開始 */}
    <div className={classes.analysis}>
    <Card className={classes.analysisCard}>
      <Typography className={classes.analysistext}>1</Typography>
      <Chart chartType="ColumnChart" data={analysisdata} options={analysisoption}/>
    </Card>

    <Card className={classes.analysisCard}>
      <Typography className={classes.analysistext}>2</Typography>
      <Chart chartType="ColumnChart" data={analysisdata} options={analysisoption}/>
    </Card>
    <Card className={classes.analysisCard}>
      <Typography className={classes.analysistext}>3</Typography>
      <Chart chartType="ColumnChart" data={analysisdata} options={analysisoption}/>
    </Card>
    <Card className={classes.analysisCard}>
      <Typography className={classes.analysistext}>4</Typography>
    </Card>
    </div>

    </div>
    );
  }
}

EnhancedTable.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(EnhancedTable);