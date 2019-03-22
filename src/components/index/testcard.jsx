import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
// import FormControl from '@material-ui/core/FormControl';
// import FormControlLabel from '@material-ui/core/FormControlLabel';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import orange from '@material-ui/core/colors/orange';
import purple from '@material-ui/core/colors/purple';
import Arrowright from '@material-ui/icons/ArrowRightAltRounded';
import CardHeader from '@material-ui/core/CardHeader';
import IconButton from '@material-ui/core/IconButton';
import { FormControl, FormHelperText, Divider } from '@material-ui/core';
import { isNullOrUndefined } from 'util';

const styles = {
  card: {
    //maxWidth: 345,
    //minWidth: '70vw',
    marginLeft: 40,
    //marginRight: 100,
    marginTop: 100,
    width: "55vw",
    height: 400,
    overflowX:'scroll',
    
  },
  smallcard1: {
    //maxWidth: 345,
    //minWidth: 200,
    marginTop: 0,
    marginLeft: 30,
    marginRight: 0,
    width: "15vw",
    height: 250,
  },
  smallcard2: {
    //maxWidth: 345,
    //minWidth: 200,
    marginTop: 0,
    marginLeft: 30,
    marginRight: 0,
    width: "15vw",
    height: 250,
  },
  smallcard3: {
    //maxWidth: 345,
    //minWidth: 200,
    marginTop: 0,
    marginLeft: 30,
    marginRight: 30,
    width: "15vw",
    height: 250,
  },
  media: {
    // ⚠️ object-fit is not supported by IE 11.
    objectFit: 'cover',
  },
  logocss: {
    marginLeft: 250,
    marginRight: 250,
  },
  margin: {
    //margin: theme.spacing.unit,
    alignItems: 'center',
    marginLeft: 400,
  },
  cssLabel: {
    '&$cssFocused': {
      color: orange[300],
    },
  },
  cssFocused: {},
  cssOutlinedInput: {
    '&$cssFocused $notchedOutline': {
      borderColor: orange[300],
    },
  },
  notchedOutline: {},
  typetestcss:{
    fontSize: 18,
    color: "#969696",
    fontWeight: "bold",
    fontFamily: "Microsoft JhengHei",
    marginLeft: 20,
    marginTop: 10,
  },
  buttonmore:{
    marginLeft: 600,
    marginRight: 10,
    color: "#B9B9B9",
  },
  div1:{
    display: 'flex',
  },
  datetypecss:{
    fontSize: 18,
    color: "#969696",
    fontWeight: "regular",
    fontFamily: "Microsoft JHengHei",
    marginTop: 10,
  },
  scoretypecss:{
    fontSize: 50,
    color: "#FFBF5F",
    fontWeight: "bold",
    fontFamily: "Microsoft JHengHei",
    marginTop: 10,
  },
  classtypecss:{
    fontSize: 25,
    color: "#969696",
    fontWeight: "regular",
    fontFamily: "Microsoft JHengHei",
    marginTop: 10,
  },
};

function ImgMediaCard(props) {
  const { classes } = props;
  return (
    <div>
    <Card className={classes.card} >
    {/* big card */}
     
      <CardHeader
          action={
            <IconButton>
              <Arrowright/>
            </IconButton>
          }
          className={classes.typetestcss}
          title="Test Score"
        />
   
    <div className={classes.div1}>
    <div >
    <Card className={classes.smallcard1}>
    {/* small card1 */}
        <CardContent>
         <Typography align="center" className={classes.datetypecss}>10 / 9</Typography>
         <Typography align="center" className={classes.scoretypecss}>87分</Typography>
        </CardContent>
        <Divider variant="middle"/>
        <CardContent>
          <Typography align="center" className={classes.classtypecss}>數 學 B 班</Typography>
        </CardContent>
      {/* <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions> */}
    </Card>
    </div>
    <div>
      <Card className={classes.smallcard2}>
    {/* small card2 */}

      <CardContent>
        <Typography align="center" className={classes.datetypecss}>10 / 9</Typography>
        <Typography align="center" className={classes.scoretypecss}>87分</Typography>
      </CardContent>
        <Divider variant="middle"/>
      <CardContent>
        <Typography align="center" className={classes.classtypecss}>數 學 B 班</Typography>
      </CardContent>
    </Card>
    </div>

    <div>
      <Card className={classes.smallcard3}>
    {/* small card3 */}
      <CardContent>
        <Typography align="center" className={classes.datetypecss}>10 / 9</Typography>
        <Typography align="center" className={classes.scoretypecss}>87分</Typography>
      </CardContent>
        <Divider variant="middle"/>
      <CardContent>
        <Typography align="center" className={classes.classtypecss}>數 學 B 班</Typography>
      </CardContent>
    </Card>
    </div>
    </div>
    </Card>
    </div>
    
  );
}

ImgMediaCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ImgMediaCard);