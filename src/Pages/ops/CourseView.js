import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, withTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
// import Row from '@material-ui/core/Row';
import Typography from '@material-ui/core/Typography';
import { Button, Checkbox, FormControl, FormControlLabel, Grid, Link, Radio, RadioGroup, TextField } from "@material-ui/core";
import ListAttendance from '../Solutions/ListAttendance';
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div>
      {value === index && (
        
          <Typography>{children}</Typography>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function DemoTabs(props) {
  const { labelId, onChange, selectionFollowsFocus, value } = props;

  return (
    <Grid container spacing={3}>
    <AppBar position="static" style={{borderTopRightRadius:"2vh",borderTopLeftRadius:"2vh",
    backgroundColor:"white",marginTop:"5vh",marginLeft:"5vh", width:"75vh",
    }} >
      <Tabs
       style={{color:"black"}}
        onChange={onChange}
        value={value}
      >
        
        <Tab label="Participants" />

        <Tab label="Plan "  />
       
        <Tab label="Monitor"/>
      </Tabs>
    </AppBar></Grid>
  );
}



DemoTabs.propTypes = {
  labelId: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  selectionFollowsFocus: PropTypes.bool,
  value: PropTypes.number.isRequired,
};

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    backgroundColor:"white",
  },
});

export default function AccessibleTabs() {
  const classes = useStyles();

  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div >
       <Typography variant="h6" gutterBottom style={{marginTop:"3vh",marginLeft:"3vh"}}>
        Course 1 - Apr 01
      </Typography>
     <h6 style={{marginLeft:"3vh"}}> 04 Apr 2021</h6>
      <DemoTabs labelId="demo-a11y-tabs-manual-label"  onChange={handleChange} value={value} />
     
     
       
      <TabPanel value={value} index={0}>
      
      
     <Grid container spacing={3}
     style={{marginTop:"5vh",marginLeft:"3vh"}}>
       <Grid item sm={6}>
       <ListAttendance></ListAttendance>
       </Grid>
     </Grid>
      </TabPanel>
      
      <TabPanel value={value} index={1}>
        <Grid container spacing={3}
        style={{marginTop:"5vh",marginLeft:"3vh"}}>
<Grid item sm={2}>
Day 1:Intro
</Grid>
<Grid item sm={2}>
  Objectives A
</Grid>
<Grid item sm={2}>
<Link href="#">Open</Link>
</Grid>
        </Grid>

        <Grid container spacing={3}
        style={{marginTop:"5vh",marginLeft:"3vh"}}>
<Grid item sm={2}>
Day 2:Skill 1
</Grid>
<Grid item sm={2}>
Objectives B
</Grid>
<Grid item sm={2}>
  <Link href="#">Close</Link>   
</Grid>
        </Grid>

<Grid container spacing={3}
style={{marginTop:"5vh",marginLeft:"3vh"}}>
<Grid item sm={2}>
Day 3:Skill 2
</Grid>
<Grid item sm={2}>

Objective B 
</Grid>
<Grid item sm={2}>

<Link href="#">Close</Link>
      
</Grid>
        </Grid>
      </TabPanel>
     
      <TabPanel value={value} index={2}>
      <Grid container spacing={3}
      style={{marginTop:"5vh",marginLeft:"3vh"}}>
        <Grid item >
        <FormControl component="fieldset">
  <RadioGroup  aria-label="gender" name="gender1"  >
    <row>
    <FormControlLabel   value="female" control={<Radio />} label="Least Active" />
    <FormControlLabel style={{paddingLeft:"6vh"}} value="male" control={<Radio />} label="Least Score" /></row>
  </RadioGroup>
</FormControl>
        </Grid>
      </Grid>
      </TabPanel>
    </div>
  );
}
// git add .
// git checkout -b 'name'
// git add .
// git commit -m "msg"
// git push