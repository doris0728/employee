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
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    //marginLeft:'42px',
    //marginTop:20,
    //height:'50px',
    width:'94vw'
  },
  card:{
      width:600,
      height:300,
      marginTop:30,
      marginLeft:290,
  },
  table:{
      border:1,
      borderColor:'red',
      BorderStyle:'solid',
      rules:'all',
      marginLeft:55,
      marginTop:35,
      width:490,
      height:230,
      backgroundColor:'#f0f0f0',
  },
  divider1:{
      marginTop:35,
      marginLeft:50,
      marginRight:50,
      height:1.5,
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
  divider2:{
      marginTop:7,
      marginLeft:50,
      marginRight:50,
      height:1.5,
  },
  name:{
      //marginTop:10,
  },
  texttitle:{
    fontSize:16,
    fontWeight: "bold",
    color:'#FFBF5F',
    fontFamily: "Microsoft JhengHei",
    letterSpacing:4,
    marginLeft:50,
  },
  detail:{
    marginLeft:25,
    fontSize:16,
    fontWeight: "bold",
    color:'#969696',
    fontFamily: "Microsoft JhengHei",
    letterSpacing:4,
  },
  formControl:{
      width:250,
      height:28,
      marginLeft:10,
  },
});

class NativeSelects extends React.Component {
  state = {
    age: '',
    name: '王映心',
    region:'古亭校區',
    date:'03/25',
    time:'12:00',
    labelWidth: 0,
  };

//   componentDidMount() {
//     this.setState({
//       labelWidth: ReactDOM.findDOMNode(this.InputLabelRef).offsetWidth,
//     });
//   }

  handleChange = name => event => {
    this.setState({ [name]: event.target.value });
  };

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
      <Card className={classes.card}>
      <table className={classes.table}>
          <tr align="center"><td colspan="2"><Typography class={classes.text1}>補課資料</Typography></td></tr>

          <tr><td align="left"><a className={classes.texttitle}>姓名</a>
          <a className={classes.detail}>{this.state.name}</a></td>
          <td align="left"><a className={classes.texttitle}>校區</a>
          <a className={classes.detail}>{this.state.region}</a></td></tr>

          <tr><td align="left"><a className={classes.texttitle}>日期</a>
          <a className={classes.detail}>{this.state.date}</a></td>
          <td align="left"><a className={classes.texttitle}>時間</a>
          <a className={classes.detail}>{this.state.time}</a></td></tr>

          <tr align=""><td colspan="2"><Typography class={classes.texttitle}>選擇課程
          <FormControl variant="outlined" className={classes.formControl}>
        
          <InputLabel 
            ref={ref => {
              this.InputLabelRef = ref;
            }}
            htmlFor="outlined-age-native-simple">
          </InputLabel>
          <Select
            native
            value={this.state.age}
            onChange={this.handleChange('age')}
            input={
              <OutlinedInput
                name="Age"
                labelWidth={this.state.labelWidth}
                id="outlined-age-native-simple"
              />
            }
          >
            {/* <option value="" /> */}
            <option value="1" style={{color:'#969696',fontFamily: "Microsoft JhengHei",letterSpacing:4,fontWeight: "bold",}}>一月</option>
            <option value="2" style={{color:'#969696',fontFamily: "Microsoft JhengHei",letterSpacing:4,fontWeight: "bold",}}>二月</option>
            <option value="3" style={{color:'#969696',fontFamily: "Microsoft JhengHei",letterSpacing:4,fontWeight: "bold",}}>三月</option>
          </Select>
        </FormControl> 
          </Typography></td></tr>

          <tr align="center"><td colspan="2"> <NavLink style={{textDecoration:'none'}} activeClassName='active' to='/reserve2'>
            <Button variant="contained"
            style={{fontFamily: "Microsoft JhengHei",etterSpacing:4,fontSize:13,fontWeight: "bold",height:30,
            backgroundColor:'#FFBF5F',color:'white'}}>
             預約</Button>
            </NavLink></td></tr>
      </table>
      {/* <Divider light className={classes.divider1}/>
      <Typography class={classes.text1}>補課資料</Typography>
      <Divider light className={classes.divider2}/>
      <Typography class={classes.name}>
      <a className={classes.texttitle}>姓名</a>
      <a className={classes.detail}>{this.state.name}</a>
      <a className={classes.texttitle}>校區</a>
      <a>{this.state.region}</a>
      </Typography> */}
      </Card>


      </div>
    );
  }
}

NativeSelects.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NativeSelects);
