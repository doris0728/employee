import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Button from '@material-ui/core/Button';
import ErrorIcon from '@material-ui/icons/Error';
import CloseIcon from '@material-ui/icons/Close';
import red from '@material-ui/core/colors/red';
import deeppurple from '@material-ui/core/colors/deepPurple';
import IconButton from '@material-ui/core/IconButton';
import Snackbar from '@material-ui/core/Snackbar';
import SnackbarContent from '@material-ui/core/SnackbarContent';
import { withStyles } from '@material-ui/core/styles';
import Divder from '@material-ui/core/Divider';
import Divider from '@material-ui/core/Divider';

const variantIcon = {
    gradealert: ErrorIcon,
    classalert: ErrorIcon,
};

const styles1 = theme => ({
    gradealert: {
        backgroundColor: red[500],
      },  
    classalert: {
        backgroundColor: deeppurple[500],
    },
    icon: {
        fontSize: 20,
    },
    iconVariant: {
        opacity: 0.9,
        marginRight: theme.spacing.unit,
    },
    message: {
        display: 'flex',
        alignItems: 'center',
    },
});

function MySnackbarContent(props) {
  const { classes, className, message, onClose, variant, ...other } = props;
  const Icon = variantIcon[variant];

  return (
    <SnackbarContent
      className={classNames(classes[variant], className)}
      aria-describedby="client-snackbar"
      message={
        <span id="client-snackbar" className={classes.message}>
          <Icon className={classNames(classes.icon, classes.iconVariant)} />
          {message}
        </span>
      }
      action={[
        <IconButton
          key="close"
          aria-label="Close"
          color="inherit"
          className={classes.close}
          onClick={onClose}
        >
          <CloseIcon className={classes.icon} />
        </IconButton>,
      ]}
      {...other}
    />
  );
}

MySnackbarContent.propTypes = {
  classes: PropTypes.object.isRequired,
  className: PropTypes.string,
  message: PropTypes.node,
  onClose: PropTypes.func,
  variant: PropTypes.oneOf(['gradealert', 'classalert']).isRequired,
};

const MySnackbarContentWrapper = withStyles(styles1)(MySnackbarContent);

const styles2 = theme => ({
  margin: {
    margin: theme.spacing.unit,
    fontFamily: 'Microsoft JhengHei',
    fontSize: 16,
  },
  divider:{
      marginTop:80,
      marginBottom: 0,
  }
});

class CustomizedSnackbars extends React.Component {
  state = {
    open: false,
  };

  handleClick = () => {
    this.setState({ open: true });
  };

  handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    this.setState({ open: false });
  };

  render() {
    const { classes } = this.props;

    return (
      <div>
        <div>
        <Snackbar
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
          }}
          open={this.state.open}
          autoHideDuration={6000}
          onClose={this.handleClose}
        >
          {/* <MySnackbarContentWrapper
            onClose={this.handleClose}
            variant="success"
            message="This is a success message!"
          /> */}
        </Snackbar>
        <MySnackbarContentWrapper
          variant="gradealert"
          className={classes.margin}
          message=" 成 績 預 警 : 物 理 A 班"
        />
        <MySnackbarContentWrapper
          variant="classalert"
          className={classes.margin}
          message=" 缺 課 預 警 : 物 理 A 班"
        />
        </div>
        <Divider className={classes.divider}/>
        <div>
            
        </div>
      </div>
    );
  }
}

CustomizedSnackbars.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles2)(CustomizedSnackbars);