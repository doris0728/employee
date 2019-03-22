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
const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    //marginLeft:'42px',
    //marginTop:20,
    //height:'50px',
    width:'94vw'
  },
  table:{
    //marginTop:'3vh',
    align:'center',
    width:'100%',
  },
  formControl: {
    margin: 5,
    minWidth: 200,
    maxHeight:50,
    marginTop:20,
    marginLeft:35,
  },
  selectEmpty: {
   // marginTop: theme.spacing.unit * 2,
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
    paddingLeft:'75%'
  }
});

class NativeSelects extends React.Component {
  state = {
    age: '',
    name: '王映心',
    labelWidth: 0,
  };

  componentDidMount() {
    this.setState({
      labelWidth: ReactDOM.findDOMNode(this.InputLabelRef).offsetWidth,
    });
  }

  handleChange = name => event => {
    this.setState({ [name]: event.target.value });
  };

  render() {
    const { classes } = this.props;

    return (
      
      <div className={classes.root}>
      
        <div className={classes.table}>
            <Typography class={classes.text} nowrap={true}>
              <a style={{color:'#FFBF5F',marginLeft:35}}>{this.state.name}</a><a>的成績</a>
              <a class={classes.textRight}>107學年</a>
            </Typography>
       
        
        <Divider variant="middle"/>
        <FormControl variant="outlined" className={classes.formControl}>
        
          <InputLabel 
            ref={ref => {
              this.InputLabelRef = ref;
            }}
            htmlFor="outlined-age-native-simple"
            style={{color:'#969696',fontFamily: "Microsoft JhengHei",letterSpacing:4,fontWeight: "bold",}}
          >
            選擇班級/科目
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
            <option value="" />
            <option value="" style={{color:'#969696',fontFamily: "Microsoft JhengHei",letterSpacing:4,fontWeight: "bold",}}>國文A班</option>
            <option value="" style={{color:'#969696',fontFamily: "Microsoft JhengHei",letterSpacing:4,fontWeight: "bold",}}>數學B班</option>
            <option value="" style={{color:'#969696',fontFamily: "Microsoft JhengHei",letterSpacing:4,fontWeight: "bold",}}>理化A班</option>
          </Select>
        </FormControl>
        </div>
      </div>
    );
  }
}

NativeSelects.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NativeSelects);
