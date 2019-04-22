import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import { BrowserRouter as NavLink } from "react-router-dom";
import TeachButton from '@material-ui/icons/ListOutlined'
import HomeworkButton from '@material-ui/icons/EditOutlined'

const styles = {
  card: {
    //maxWidth: 345,
    height: 75,
    //width:'80%',
    marginTop:30,
  },

//   card2: {
//     //maxWidth: 345,
//     height: 75,
//     marginTop: 30,
//   },
//   media: {
//     // ⚠️ object-fit is not supported by IE 11.
//     //objectFit: 'cover',
//   },
    text:{
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
    width:180
  },
  textrecord:{
    color: "#818181",
    fontFamily: "Microsoft Jhenghei",
    fontSize: 14,
    fontWeight: 'bold',
    marginTop:26,
    //marginLeft:25
  },
  button:{
      marginTop:10,
  }
};

function classCard(props) {
  const { classes } = props;
  return (
    <div align="center">
    <Card className={classes.card}>
    <div>
    
      <CardActionArea>
        <div className={classes.div1}> 
        <div className={classes.divclass}>
        
        <CardContent>
        
        <Typography className={classes.text}>數學A班</Typography>
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

        <div>
        <CardContent>
            <Typography className={classes.textrecord}>
                <HomeworkButton style={{marginLeft:60}}/>
                <a style={{marginLeft:5}}>考試紀錄</a>
                <TeachButton style={{marginLeft:20}}/>
                <a style={{marginLeft:5}}>教學紀錄</a>
            </Typography>
            
        </CardContent>
        </div>
        
        </div>
      </CardActionArea>
      </div>
    </Card>
   
    </div>
     
  );
}

classCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(classCard);