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
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Airtable from 'airtable';

const styles = theme => ({
  //下面開始是select
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    //marginLeft:'42px',
    //marginTop:20,
    //height:'50px',
    width:840
  },
  table:{
    //marginTop:'3vh',
    align:'center',
    width:'100%',
    //marginTop:20
    //display:'flex'
  },
  formControl: {
    margin: 5,
    minWidth: 200,
    maxHeight:50,
    marginTop:10,
    marginLeft:15,
  },
  selectEmpty: {
   // marginTop: theme.spacing.unit * 2,
  },
  text:{
    color:'#5A3DAA',
    fontFamily: "Microsoft JhengHei",
    letterSpacing:4,
    fontWeight: "bold",
    fontSize:18,
    marginLeft:75,
    display:'inline-block',
    marginTop:25
  },
  divide:{
    marginTop:10,
    width:840
  },
  //card start
  card: {
    //maxWidth: 345,
    height: 75,
    width:'80%',
    marginTop:30,
  },
  cardtext:{
    color:'#5A3DAA',
    fontFamily: "Microsoft Jhenghei",
    fontSize: 25,
    fontWeight: 'bold',
    marginTop:4,
    letterSpacing:6,
    textAlign:'left'
    },
   div1:{
    //position:"absolute",
    //display: "inline",
    display: 'flex',
    marginLeft:50,
  },
  textdetail:{
    color: "#818181",
    fontFamily: "Microsoft Jhenghei",
    fontSize: 14,
    fontWeight: 'bold',
    marginTop:11,
    marginLeft:25
  },
  divclass:{
    //backgroundColor:'red',
    //width:420
    width:200
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
      <div style={{marginTop:120,marginLeft:100,width:840,backgroundColor:'white'}}>
      <div className={classes.root}>
      
        <div className={classes.table}>
        <a marginTop="20" className={classes.text}>選擇校區</a>
        <FormControl variant="outlined" className={classes.formControl}>
          <InputLabel 
            ref={ref => {
              this.InputLabelRef = ref;
            }}
            htmlFor="outlined-age-native-simple"
            style={{color:'#969696',fontFamily: "Microsoft JhengHei",letterSpacing:4,fontWeight: "bold",}}>
            
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
                style={{color:'#969696',fontFamily: "Microsoft JhengHei",letterSpacing:4,fontWeight: "bold",}}
              />
            }
          >
            <option value="0" style={{color:'#969696',fontFamily: "Microsoft JhengHei",letterSpacing:4,fontWeight: "bold",}}>全部</option>
            <option value="1" style={{color:'#969696',fontFamily: "Microsoft JhengHei",letterSpacing:4,fontWeight: "bold",}}>古亭校區</option>
            <option value="2" style={{color:'#969696',fontFamily: "Microsoft JhengHei",letterSpacing:4,fontWeight: "bold",}}>台北校區</option>
            <option value="3" style={{color:'#969696',fontFamily: "Microsoft JhengHei",letterSpacing:4,fontWeight: "bold",}}>板橋校區</option>
          </Select>
        </FormControl>

        <a className={classes.text}>選擇時段</a>
        <FormControl variant="outlined" className={classes.formControl}>
        
          <InputLabel 
            ref={ref => {
              this.InputLabelRef = ref;
            }}
            htmlFor="outlined-age-native-simple"
            style={{color:'#969696',fontFamily: "Microsoft JhengHei",letterSpacing:4,fontWeight: "bold",}}>
            
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
                style={{color:'#969696',fontFamily: "Microsoft JhengHei",letterSpacing:4,fontWeight: "bold",}}
              />
            }
          >
            <option value="11" style={{color:'#969696',fontFamily: "Microsoft JhengHei",letterSpacing:4,fontWeight: "bold",}}>全部</option>
            <option value="12" style={{color:'#969696',fontFamily: "Microsoft JhengHei",letterSpacing:4,fontWeight: "bold",}}>早上</option>
            <option value="13" style={{color:'#969696',fontFamily: "Microsoft JhengHei",letterSpacing:4,fontWeight: "bold",}}>下午</option>
            <option value="14" style={{color:'#969696',fontFamily: "Microsoft JhengHei",letterSpacing:4,fontWeight: "bold",}}>晚上</option>
          </Select>
        </FormControl>

        <Divider className={classes.divide}/>
        </div>
      </div>

      <div align="center">
    
    <Card className={classes.card}>
    {/* <NavLink style={{textDecoration:'none'}} activeClassName='active' to='/Tclass'> */}
    
    
    <div>
    
      <CardActionArea>
        <div className={classes.div1}> 
        <div className={classes.divclass}>
        
        <CardContent>
        
        <Typography className={classes.cardtext}>數學A班</Typography>
        </CardContent>
        </div>
        <div>
        <CardContent>
            <div>
            <Typography className={classes.textdetail}>
                每周三 21:30 ~ 23:00
            </Typography>
            </div>
        </CardContent>
        </div>
        <div>
        <CardContent>
            <div>
            <Typography className={classes.textdetail}>
                台北校區 11樓
            </Typography>
            </div>
        </CardContent>
        </div>
        
        </div>
      </CardActionArea>
      
      </div>
      {/* </NavLink> */} 
    </Card>
    {/* </NavLink> */}

    <Card className={classes.card}>
    <div>
      <CardActionArea>
        <div className={classes.div1}> 
        <div className={classes.divclass}>
        <CardContent>
            <Typography className={classes.cardtext}>數學B班</Typography>
        </CardContent>
        </div>
        <div>
        <CardContent>
            <div>
            <Typography className={classes.textdetail}>
                每周四 21:30 ~ 23:00
            </Typography>
            </div>
        </CardContent>
        </div>
        <div>
        <CardContent>
            <div>
            <Typography className={classes.textdetail}>
                古亭校區 3樓
            </Typography>
            </div>
        </CardContent>
        </div>
        
        </div>
      </CardActionArea>
      </div>
    </Card>

    <Card className={classes.card}>
    <div>
      <CardActionArea>
        <div className={classes.div1}> 
        <div className={classes.divclass}>
        <CardContent>
            <Typography className={classes.cardtext}>數學複習班</Typography>
        </CardContent>
        </div>
        <div>
        <CardContent>
            <div>
            <Typography className={classes.textdetail}>
                每周六 21:30 ~ 23:00
            </Typography>
            </div>
        </CardContent>
        </div>
        <div>
        <CardContent>
            <div>
            <Typography className={classes.textdetail}>
                板橋校區 11樓
            </Typography>
            </div>
        </CardContent>
        </div>
        
        </div>
      </CardActionArea>
      </div>
    </Card>
    </div>
    <div style={{height:30}}></div>
      </div>
    );
  }
}

NativeSelects.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NativeSelects);