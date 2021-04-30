import React from "react";
import {
 
  Tab,
  Tabs,
  AppBar,

  makeStyles,
  Paper,
} from "@material-ui/core";
import PropTypes from "prop-types";
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
      {...other}
    >
      {value === index && children}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `scrollable-auto-tab-${index}`,
    "aria-controls": `scrollable-auto-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: "100%",
    marginTop: "3vh ",
    backgroundColor: theme.palette.background.paper,
  },
  tab: {
    borderRadius: "15px 15px 0px 0px",
  },
}));
function TaskTab() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="scrollable"
          scrollButtons="auto"
          aria-label="scrollable auto tabs example"
        >
          <Tab className="tab" label="FSD - React" {...a11yProps(0)} />
          <Tab className="tab" label="DevOps" {...a11yProps(1)} />
          <Tab label="Database" className="tab" {...a11yProps(2)} />

          <Tab className="tab" label="Data Science" {...a11yProps(4)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <Paper variant="outlined" square style={{ padding: "10px" }}>
          Skill 1 Create a tabular view with header and footer with total
        </Paper>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Paper variant="outlined" square style={{ padding: "10px" }}></Paper>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Paper variant="outlined" square style={{ padding: "10px" }}></Paper>
      </TabPanel>

      <TabPanel value={value} index={3}>
        <Paper variant="outlined" square style={{ padding: "10px" }}></Paper>
      </TabPanel>
    </div>
  );
}

export default TaskTab;

// <!DOCTYPE html>
// <html>
// <head>
// <meta name="viewport" content="width=device-width, initial-scale=1">
// <style>
// body {font-family: Arial;}

// /* Style the tab */
// .tab {
//   overflow: hidden;
// }

// /* Style the buttons inside the tab */
// .tab button {
//   background-color: red;
//   float: left;
//   border: 0.2px solid black;
//   outline: none;
//      border-radius: 15px 15px 0px 0px;
//   cursor: pointer;
//   width:150px;
//   padding: 14px 16px;
//   transition: 0.3s;
//   font-size: 17px;
// }

// /* Change background color of buttons on hover */
// .tab button:hover {
//   background-color: #ddd;
// }

// /* Create an active/current tablink class */
// .tab button.active {
//   background-color: #ccc;
// }

// /* Style the tab content */
// .tabcontent {

// width:'30px';
//   padding: 6px 12px;
//   border: 1px solid #ccc;
//   border-top: none;
// }

// /* Style the close button */
// .topright {
//   float: right;
//   cursor: pointer;
//   font-size: 28px;
// }

// .topright:hover {color: red;}
// </style>
// </head>
// <body>

// <h2>Tabs</h2>
// <p>Click on the x button in the top right corner to close the current tab:</p>

// <div class="tab">
//   <button class="tablinks" onclick="openCity(event, 'London')" id="defaultOpen">London</button>
//   <button class="tablinks" onclick="openCity(event, 'Paris')">Paris</button>
//   <button class="tablinks" onclick="openCity(event, 'Tokyo')">Tokyo</button>
// </div>

// <div id="London" class="tabcontent">
//   <h3>London</h3>
//   <p>London is the capital city of England.</p>
// </div>

// <div id="Paris" class="tabcontent">

//   <h3>Paris</h3>
//   <p>Paris is the capital of France.</p>
// </div>

// <div id="Tokyo" class="tabcontent">

//   <h3>Tokyo</h3>
//   <p>Tokyo is the capital of Japan.</p>
// </div>

// <script>
// function openCity(evt, cityName) {
//   var i, tabcontent, tablinks;
//   tabcontent = document.getElementsByClassName("tabcontent");
//   for (i = 0; i < tabcontent.length; i++) {
//     tabcontent[i].style.display = "none";
//   }
//   tablinks = document.getElementsByClassName("tablinks");
//   for (i = 0; i < tablinks.length; i++) {
//     tablinks[i].className = tablinks[i].className.replace(" active", "");
//   }
//   document.getElementById(cityName).style.display = "block";
//   evt.currentTarget.className += " active";
// }

// // Get the element with id="defaultOpen" and click on it
// document.getElementById("defaultOpen").click();
// </script>

// </body>
// </html>
