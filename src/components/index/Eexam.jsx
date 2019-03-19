import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

const styles = StyleSheet.create({
    container: {
      borderRadius: 4,
      borderWidth: 0.5,
      borderColor: '#d6d7da',
    },
    title: {
      fontSize: 19,
      fontWeight: 'bold',
    },
    activeTitle: {
      color: 'red',
    },
  });

  function PaperSheet(props) {
    const { classes } = props;
  
    return (
      <div>
  <View style={styles.container}>
  <Text style={[styles.title, this.props.isActive && styles.activeTitle]} />
</View>
</div>
    );
  }

PaperSheet.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
  export default withStyles(styles)(PaperSheet);