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

const styles = {
  card: {
    //maxWidth: 345,
    height: 75,
  },

  card2: {
    //maxWidth: 345,
    height: 75,
    marginTop: 30,
  },
  media: {
    // ⚠️ object-fit is not supported by IE 11.
    objectFit: 'cover',
  },
  typocss: {
      fontFamily: "Segoe UI",
      fontSize: 15,
      color: "#818181",
      fontWeight: 'bold',
  },
  typocss2: {
    fontFamily: "Segoe UI",
    color: "#818181",
    fontWeight: 'regular',
    fontSize: 12,
    marginTop: -10,
    marginLeft: 4,
   },
   typocss3: {
    fontFamily: "Microsoft Jhenghei",
    fontSize: 20,
    color: "#FFBF5F",
    fontWeight: 'bold',
    marginTop:8,
},
   div1:{
    position:"absolute",
    display: "inline",
    display: 'flex',
  },
  div2:{
      marginLeft:100,
  }
//    divider:{
//     borderLeft: 6,
//     height: 500,
//    },
};

function ClickCard(props) {
  const { classes } = props;
  return (
    // Card1
    <div>
    <Card className={classes.card}>
   <div>
      <CardActionArea>
        <div className={classes.div1}> 
        <div>
        <CardContent>
            <Typography className={classes.typocss}>
                11/20
            </Typography>
            <br></br>
            <Typography className={classes.typocss2}>
                12:20
            </Typography>
        </CardContent>
        </div>
        <div>
        <CardContent>
            <div className={classes.div1}>
            <Typography className={classes.typocss3}>古亭校區</Typography>
            </div>
            <div className={classes.div2}>
            <Typography className={classes.typocss3}>國文C班</Typography>
            </div>
        </CardContent>
        </div>
        </div>
      </CardActionArea>
      </div>
    </Card>


    {/* Card2 */}
    <Card className={classes.card2}>
   <div>
      <CardActionArea>
        <div className={classes.div1}> 
        <div>
        <CardContent>
            <Typography className={classes.typocss}>
                11/20
            </Typography>
            <br></br>
            <Typography className={classes.typocss2}>
                12:20
            </Typography>
        </CardContent>
        </div>
        <div>
        <CardContent>
            <div className={classes.div1}>
            <Typography className={classes.typocss3}>古亭校區</Typography>
            </div>
            <div className={classes.div2}>
            <Typography className={classes.typocss3}>國文C班</Typography>
            </div>
        </CardContent>
        </div>
        </div>
      </CardActionArea>
      </div>
    </Card>
    
    </div>
    
    
    
  );
}

ClickCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ClickCard);