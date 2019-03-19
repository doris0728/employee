import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
//import { Divider } from 'antd';


const styles = theme => ({
  score: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit,
    paddingBottom: theme.spacing.unit * 2,
    paddingLeft:theme.spacing.unit,
    height:70,
    marginLeft:25,
    marginRight:25,
    marginTop:15,
    borderColor:'#F59F17',
    borderWidth:'0.5px',
    borderStyle:'solid'
  },
});

function PaperSheet(props) {
  const { classes } = props;

  return (
    <div>
      <Paper className={classes.score} elevation={1}>
        <Typography variant="body2">
            <font color="#7b7b7b">補課提醒</font>
        </Typography>
        <Typography variant="h6" component="p" align="center">
            <font color="#7b7b7b">11/20 12:00 古亭校區 國文</font>
        </Typography>
      </Paper>
    </div>
    
  );
}

PaperSheet.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PaperSheet);
