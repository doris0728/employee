import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import orange from '@material-ui/core/colors/orange';
import purple from '@material-ui/core/colors/purple';
import Arrowright from '@material-ui/icons/ArrowRightAltRounded';
import CardHeader from '@material-ui/core/CardHeader';
import Button from '@material-ui/core/Button';
import { FormControl, FormHelperText, Divider, Typography } from '@material-ui/core';
import { isNullOrUndefined } from 'util';
import Head from './headmiddle.jsx';

const styles = {
  card: {
    //maxWidth: 345,
    //minWidth: '70vw',
    marginLeft: 60,
    //marginRight: 40,
    marginTop: 100,
    marginBottom: 100,
    width: "45vw",
    height: 600,
    overflowX:'auto',
    overflowY:'auto',
  },

  coursecard:{
    fontSize: 18,
    color: "#5E5E5E",
    fontWeight: "bold",
    fontFamily: "Microsoft JhengHei",
    marginLeft: 50,
    marginTop: 50,
  },
  
  div1:{
    display: 'flex',
    
  },

  cousecard:{
    width:'35vw',
    height: 95,
    margin: 'auto',
    marginTop: 40,
    overflowX:'auto',
    overflowY:'auto',
  },

  classtypecss:{
    fontSize: 30,
    color: "#FFBF5F",
    fontWeight: "bold",
    fontFamily: "Microsoft JHengHei",
    marginTop: 25,
    marginLeft: 55,
  },

  timecss:{
    fontSize: 14,
    color: "#808080",
    fontWeight: "regular",
    fontFamily: "Microsoft JHengHei",
    marginTop: 25,
    marginLeft: 60,
  },

  regioncss:{
    fontSize: 14,
    color: "#808080",
    fontWeight: "regular",
    fontFamily: "Microsoft JHengHei",
    marginTop: 0,
    marginLeft: 60,
  }
  
  
};

function ImgMediaCard(props) {
  const { classes } = props;
  return (
    <div>
    <Card className={classes.card} >

        <Typography className={classes.coursecard}>學生課程</Typography>
    
        <Card className={classes.cousecard}>
            <div className={classes.div1}>
                <div>
                    <Typography className={classes.classtypecss}>數 學 A 班</Typography>
                </div>
                <div>
                    <Typography className={classes.timecss}>每 周 三 21:00 - 22:00</Typography>
                    <Typography className={classes.regioncss}>台北校區 11樓</Typography>
                </div>
            </div>
           
        </Card>

        <Card className={classes.cousecard}>
            <div className={classes.div1}>
                <div>
                    <Typography className={classes.classtypecss}>數 學 A 班</Typography>
                </div>
                <div>
                    <Typography className={classes.timecss}>每 周 三 21:00 - 22:00</Typography>
                    <Typography className={classes.regioncss}>台北校區 11樓</Typography>
                </div>
            </div>
           
        </Card>
    </Card>
    </div>
    
  );
}

ImgMediaCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ImgMediaCard);