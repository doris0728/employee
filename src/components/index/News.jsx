import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';


const styles = theme => ({
  root: {
    //width: '100%',
    //maxWidth: '360px',
    backgroundColor:'white',
    marginTop:'50px',
    marginLeft:'25px',
    marginRight:'25px',
    marginBottom:'25px',
  },
});

function ListDividers(props) {
  const { classes } = props;
  return (
      
    <List component="nav" className={classes.root}>
      <ListItem button divider>
        <ListItemText primary="驚! 阿澤交男友???" />
      </ListItem>
      <ListItem button divider>
        <ListItemText primary="FUCK!!! 我討厭這個世界" />
      </ListItem>
      <ListItem button divider>
        <ListItemText primary="我討厭寫專題，相信你也是" />
      </ListItem>
      <ListItem button divider>
        <ListItemText primary="介面設計為什麼那麼累" />
      </ListItem>
      <ListItem button divider>
        <ListItemText primary="熬夜到那麼晚就是為了做專題" />
      </ListItem>
      <ListItem button>
        <ListItemText primary="React到底是什麼鬼東西 去死啦" />
      </ListItem>
    </List>
  );
}

ListDividers.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ListDividers);
