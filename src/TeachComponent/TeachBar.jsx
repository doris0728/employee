import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles, MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
// import InboxIcon from '@material-ui/icons/MoveToInbox';
// import MailIcon from '@material-ui/icons/Mail';
import GlobeIcon from '@material-ui/icons/LanguageRounded';
import LatestnewsIcon from '@material-ui/icons/SmsRounded';
import ScoreIcon from '@material-ui/icons/CreateRounded';
import AssignIcon from '@material-ui/icons/AssignmentRounded';
import EventIcon from '@material-ui/icons/EventRounded';
import FaceIcon from '@material-ui/icons/FaceRounded';
import ExitIcon from '@material-ui/icons/ExitToAppRounded';
//import Head from './TeachHead.jsx';
import Logowhite from './image/goodmorningwhite.png';
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import myclassComponent from './myclass/myclassAll'
import ClassDetail from './classDetail/classDetailComponent'
import ClassScore from './classScore/scoreComponent'
import TestAnalysis from './testAnalysis/testanalysisComponent'
import TeachRecord from './teachRecord/recordComponent'
import ChangePasswdIcon from '@material-ui/icons/LockRounded'
import Airtable from 'airtable';

const theme = createMuiTheme({
  typography: {
    // Tell Material-UI what the font-size on the html element is.
    fontFamily: 'Microsoft JhengHei',
  },
});


const drawerWidth = 240;
const styles = theme => ({
  root: {
    display: 'flex',
    //fontfamily:"Microsoft JhengHei",
  },
  appBar: {
    background:'#5A3DAA',
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  
  menuButton: {
    marginLeft: 12,
    marginRight: 36,
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
      
    }),
  },
  drawerClose: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: theme.spacing.unit * 7 + 1,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing.unit * 9 + 1,
    },
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3,
  },

  component:{
    marginLeft:'1px',
    marginRight:'1px',
  }
  
});



class MiniDrawer extends React.Component {
  state = {
    open: true, 
    teacherName:'',
    teacherEmail:'',
  };

  handleDrawerOpen = () => {
    this.setState({ open: true });
  };

  handleDrawerClose = () => {
    this.setState({ open: false });
  };

  constuctor() {
    this.indexbutton = this.indexbutton.bind(this);
  }

  componentDidMount(){
    //for teacher name
    fetch('https://api.airtable.com/v0/appcXtOTPnE4QWIIt/Teacher?api_key=keyA7EKdngjou4Dgy')
    .then((resp) => resp.json())
    .then(data => {
      this.setState({ teacherData: data.records });
      const teacher_name = this.state.teacherData.map(item => Object.values(item)[1].teacher_name);
      
      var temp = teacher_name[1];
      console.log("SelectClass Hello");
      console.log(teacher_name);
      
      this.setState({ teacherName : temp });
    }).catch(err => {
      // Error 🙁
    });

    //for teacher email
    fetch('https://api.airtable.com/v0/appcXtOTPnE4QWIIt/Teacher?api_key=keyA7EKdngjou4Dgy')
    .then((resp) => resp.json())
    .then(data => {
      this.setState({ teacherData: data.records });
      const teacher_email = this.state.teacherData.map(item => Object.values(item)[1].teacher_email);
      
      var temp = teacher_email[1];
      console.log("SelectClass Hello");
      console.log(teacher_email);
      
      this.setState({ teacherEmail : temp });
    }).catch(err => {
      // Error 🙁
    });

  }

  

  render() {
    const { classes, theme } = this.props;
  
    return (
      <Router>
      <div className={classes.root}>
        <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <AppBar
          //position="fixed"
          className={classNames(classes.appBar, {
            [classes.appBarShift]: this.state.open,
          })}
        >
          <Toolbar disableGutters={!this.state.open}>
            <IconButton
              color="inherit"
              aria-label="Open drawer"
              onClick={this.handleDrawerOpen}
              className={classNames(classes.menuButton, {
                [classes.hide]: this.state.open,
              })}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" color="inherit" noWrap className={classes.font}>
            <img src ={Logowhite} height ="45" width ="69"/>
            </Typography>
            
          </Toolbar>
        </AppBar>

        

        <Drawer
          variant="permanent"
          className={classNames(classes.drawer, {
            [classes.drawerOpen]: this.state.open,
            [classes.drawerClose]: !this.state.open,
          })}
          classes={{
            paper: classNames({
              [classes.drawerOpen]: this.state.open,
              [classes.drawerClose]: !this.state.open,
            }),
          }}
          open={this.state.open}
        >
          <div className={classes.toolbar}>

          <div>
          <Typography style={{fontSize:15,fontWeight: "bold",fontFamily: "Microsoft JhengHei",letterSpacing:2,}}>
          {this.state.teacherName}
          </Typography>
          <Typography style={{fontSize:12,fontWeight: "bold",fontFamily: "Microsoft JhengHei",letterSpacing:1,}}>
          {this.state.teacherEmail}
          </Typography>
          </div>
          
            <IconButton onClick={this.handleDrawerClose}>
              {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
            </IconButton>
            
          </div>
          
          <Divider />
          {/* <List>
            {['首頁', '最新消息', '成績查詢', '出勤紀錄', '補課申請', '我的葉面'].map((text, index) => (
              <ListItem button key={text}>
                <ListItemIcon>{index ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List> */}

        <br></br>
        
        <NavLink activeClassName="active" to="/teach" style={{textDecoration:'none',color:'#818181'}}>
          <ListItem button>
              <ListItemIcon>
                  <GlobeIcon />
              </ListItemIcon>
            <ListItemText><a style={{fontSize:16,fontWeight: "bold",fontFamily: "Microsoft JhengHei",
            letterSpacing:4,color:'#6C6C6C'}}>我的班級</a></ListItemText>
          </ListItem>
        </NavLink>

        <ListItem button>
          <ListItemIcon  >
            <LatestnewsIcon />
          </ListItemIcon>
          <ListItemText><a style={{fontSize:16,fontWeight: "bold",fontFamily: "Microsoft JhengHei",
            letterSpacing:4,color:'#6C6C6C'}}>最新消息</a></ListItemText>
        </ListItem>

        <NavLink activeClassName='active' to='/Tclass'>
        <ListItem button>
          <ListItemIcon>
            <ScoreIcon />
          </ListItemIcon>
          <ListItemText inset primary="班級頁面" />
        </ListItem>
        </NavLink>

        <NavLink activeClassName='active' to='/classscore'>
        <ListItem button>
          <ListItemIcon>
            <AssignIcon />
          </ListItemIcon>
          <ListItemText inset primary="班級成績" />
        </ListItem>
        </NavLink>

        <NavLink activeClassName="active" to="/teachrecord">
        <ListItem button>
          <ListItemIcon>
            <EventIcon />
          </ListItemIcon>
          <ListItemText inset primary="教學進度" />
        </ListItem>
        </NavLink>
        
        <NavLink activeClassName="active" to="/analysis">
        <ListItem button>
          <ListItemIcon>
            <EventIcon />
          </ListItemIcon>
          <ListItemText inset primary="考試分析" />
        </ListItem>
        </NavLink>

        <br></br>

          <Divider />
          {/* <List>
            {['All mail', 'Trash', 'Spam'].map((text, index) => (
              <ListItem button key={text}>
                <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List> */}

        <br></br>
        <ListItem button>
          <ListItemIcon>
          <FaceIcon />
          </ListItemIcon>
          <ListItemText><a style={{fontSize:16,fontWeight: "bold",fontFamily: "Microsoft JhengHei",
            letterSpacing:4,color:'#6C6C6C'}}>更改帳號</a></ListItemText>
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <ChangePasswdIcon />
          </ListItemIcon>
          <ListItemText><a style={{fontSize:16,fontWeight: "bold",fontFamily: "Microsoft JhengHei",
            letterSpacing:4,color:'#6C6C6C'}}>更改密碼</a></ListItemText>
        </ListItem>
          <ListItem button>
          <ListItemIcon>
            <ExitIcon />
          </ListItemIcon>
          <ListItemText><a style={{fontSize:16,fontWeight: "bold",fontFamily: "Microsoft JhengHei",
            letterSpacing:4,color:'#6C6C6C'}}>登出</a></ListItemText>
        </ListItem>
        </Drawer>

        {/* 插入components */}
        <div>
          <Route exact path="/teach" component={myclassComponent}/>
          <Route path="/classdetail" component={ClassDetail}/>
          <Route path="/classScore" component={ClassScore}/>
          <Route path="/analysis" component={TestAnalysis}/>
          <Route path="/teachrecord" component={TeachRecord}/>
        </div>
        </MuiThemeProvider>
      </div>

        
      </Router>
    );
  }
}
MiniDrawer.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(MiniDrawer);