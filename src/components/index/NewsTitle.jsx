import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';


import NewsPhoto from './image/Group 78.png'
//import { Image } from 'react-native';
const styles = theme => ({
  img:{
      //marginLeft:'auto',
      //marginRight:'auto',
      marginTop:'30px',
      //width:'50px',
      //height:'100%',
      //maxwidth:'100%',
      //minwidth:'100%',
      //alignItems:'center',
      //marginLeft:'25px',
      //marginRight:'25px',
      //margin:'0 auto',
      flexDirection:'row',
      alignItems:'center',
      justifyContent:'flex-end',
  },
});
function ListDividers(props) {
  const { classes } = props;
  return (
    <div className={classes.img}><img src={NewsPhoto}/></div>
    
    
  );
}

ListDividers.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ListDividers);
