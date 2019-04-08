import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { isNullOrUndefined } from 'util';
import Goodmorninglogo from './images/goodmorning.png';
import Ferris from './images/ferris.png';
import LoginSelect from './loginselect.jsx';
import { ResponsiveImage, ResponsiveImageSize } from 'react-responsive-image';

const styles = {
  background: {
    display:'flex',
    background:'#FFF6E8',
    width:'auto',
    height:'auto',
    
    //minHeight:100,
  },
  logocss: {
    display: 'block',
    margin: 'auto',
    marginTop: 60,
    marginLeft:90,
    marginBottom: 30,
    //paddingLeft: 250,
    
  },
  amusecss: {
    display: 'block',
    margin: 'auto',
    width:'auto',
    height:'auto',
    marginTop: 20,
  },
  
  div1:{
    display: 'inline-block',
    margin: 'auto',
    //alignItem: 'center',
    //marginLeft: 200,
    //marginRight: 200,
  }
};

function Login(props) {
  const { classes } = props;
  return (
    <div className={classes.background}>
    <div className={classes.div1}>
      <div>
      <Typography className={classes.logocss}>
            <img src ={Goodmorninglogo} height ="101.25" width ="155.25"/>
      </Typography>
      </div>
      <div>
      <LoginSelect/>
      </div>
      <div>
      <Typography className={classes.amusecss}>
            <img src ={Ferris} height="103.5" width="317.4"/>
      </Typography>
      </div>
      </div>
    </div>
  );
}

Login.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Login);