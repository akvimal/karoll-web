import React, { useEffect, useState } from "react";
import { Router, Route, Link, Redirect } from "react-router-dom";
import { authenticationService } from "../services/authentication.service";
import { userService } from "../services/user.service";
import { history } from "../helpers/history";
import { PrivateRoute } from "../components/PrivateRoute";
import { Role } from "../helpers/role";
import clsx from "clsx";
import {
  makeStyles,
  Button,
  Popper,
  Grow,
  Paper,
  ClickAwayListener,
  Hidden,
  MenuItem,
  Menu,
  List,
  Typography,
  Divider,
  IconButton,
  Badge,
  Container,
  Grid,
  MenuList,
  Drawer,
  Box,
  AppBar,
  Toolbar,
  CssBaseline,
} from "@material-ui/core";
import { Person, NotificationsIcon, AccountCircle } from "@material-ui/icons";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import MoreIcon from "@material-ui/icons/More";
import MainListItems from "./SideNav";

import { SecondaryListItems } from "./SideNav";
import Objectives from "./Solutions/Objectives";
import Skills from "./Solutions/Skills";
import JobRoles from "./Solutions/JobRoles";
import Certifications from "./Solutions/Certifications";
import Courses from "./Solutions/Courses";
import Settings from "./Solutions/Settings";
import Projects from "./Solutions/Projects";
import AdminPage from "./AdminPage";
import Content from "./Solutions/Content";
import Evaluation from "./Solutions/Evaluation";
import CreateSkill from "./Solutions/CreateSkill";
import CreateJobRoles from "./Solutions/CreateJobRoles";
import CreateProject from "./Solutions/CreateProject";
import CreateTask from "./Solutions/CreateTask";
function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },

  toolbar: {
    paddingRight: 24, // keep right padding when drawer closed
  },
  toolbarIcon: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: "0 8px",
    ...theme.mixins.toolbar,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  menuButtonHidden: {
    display: "none",
  },
  title: {
    flexGrow: 1,
  },
  drawerPaper: {
    position: "relative",
    whiteSpace: "nowrap",
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    overflowX: "hidden",
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(9),
    },
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: "100vh",
    overflow: "auto",
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(2),
    display: "flex",
    overflow: "auto",
    flexDirection: "column",
  },
  fixedHeight: {
    height: 240,
  },
  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex",
    },
  },
}));

function HomePage(props) {
  const [currentUser, setcurrentUser] = useState(
    authenticationService.currentUserValue
  );
  const [userFromApi, setuserFromApi] = useState(null);

  useEffect(() => {
    console.log("2 >> ", currentUser);
    userService.getByUsername(currentUser.username).then((res) => {
      setuserFromApi(res);
    });
  }, []);

  console.log(currentUser);

  const classes = useStyles();
  const [open, setOpen] = React.useState(true);
  const [openProfile, setOpenProfile] = React.useState(null);
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };
  const handleClickProfile = (event) => {
    if (openProfile && openProfile.contains(event.target)) {
      setOpenProfile(null);
    } else {
      setOpenProfile(event.currentTarget);
    }
  };
  const handleCloseProfile = () => {
    setOpenProfile(null);
  };
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>
        Role : {currentUser.roles[0]}
      </MenuItem>
      <MenuItem onClick={props.logout}>Logout</MenuItem>
    </Menu>
  );

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="absolute"
        className={clsx(classes.appBar, open && classes.appBarShift)}
      >
        <Toolbar className={classes.toolbar}>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            className={clsx(
              classes.menuButton,
              open && classes.menuButtonHidden
            )}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            component="h1"
            variant="h6"
            color="inherit"
            noWrap
            className={classes.title}
          >
            Karoll
          </Typography>
          {userFromApi && (
            <>
              Welcome {userFromApi.firstName}
              {userFromApi.lastName} !
            </>
          )}
          <div className={classes.sectionDesktop}>
            <IconButton
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
          </div>
          <div className={classes.sectionMobile}>
            <IconButton
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>

      <Drawer
        variant="permanent"
        classes={{
          paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
        }}
        open={open}
      >
        <div className={classes.toolbarIcon}>
          <Link style={{ marginRight: "70px" }}>Home</Link>
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon />
          </IconButton>
        </div>
        <Divider />
        <MainListItems isAdmin={props.isAdmin}></MainListItems>
        <Divider />
        <SecondaryListItems />
      </Drawer>
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Router history={history}>
          <Route path="/objectives" component={Objectives} />
          <Route path="/skills" component={Skills} />
          <PrivateRoute
            path="/admin"
            roles={[Role.Admin]}
            component={AdminPage}
          />
          <Route path="/createskill" component={CreateSkill} />
          <Route path="/content" component={Content} />
          <Route path="/evaluation" component={Evaluation} />
          <Route path="/jobroles" component={JobRoles} />
          <Route path="/createjobroles" component={CreateJobRoles} />

          <Route path="/certifications" component={Certifications} />
          <Route path="/projects" component={Projects} />
          <Route path="/createproject" component={CreateProject} />
          <Route path="/createtask" component={CreateTask} />

          <Route path="/courses" component={Courses} />
          <Route path="/settings" component={Settings} />

          {/* <Grid item xs={12} md={4} lg={3}>
                <Paper className={fixedHeightPaper}>

                </Paper>
              </Grid>
              <Grid item xs={12}>
                <Paper className={classes.paper}></Paper>
              </Grid> */}

          <Box pt={4}>
            <Copyright />
          </Box>
        </Router>
      </main>
      {renderMobileMenu}
      {renderMenu}
    </div>
  );
}
export default HomePage;
