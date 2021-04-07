import React , { useState }from "react";
import {

  Link,Paper,
  Grid,Modal,makeStyles,
  TextareaAutosize,
  TextField,
  Typography,
  Button,
} from "@material-ui/core";
import ListLookupSkill from "./ListLookupSkill"
const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    width: 500,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    top: `30vh`,
    left: `38%`,
    transform: `translate(-15%, -38%)`,
  },
}))
function CreateJobRoles() {
  

  const [jobroles, setjobroles] = useState([
    {
      title: "Skill A",
      stack:  "Stack 1 , Stack 2",
      
    },
    {
      title: "Skill B",
      stack:  "Stack 1 , Stack 2",
    },
    
  ]);

  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const body = (
    <Paper elevation={3} className={classes.paper}>
      <Typography variant="h6" gutterBottom>
        Job Role Lookup
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={10}>
        <Grid container spacing={2} >
        <Grid item xs={5}>
          <TextField
            size="small"
            id="outlined-select-currency"
            select
            label="Skill"
            fullWidth={true}
            label="Stack"
            variant="outlined"
          >
            <option aria-label="None" value="" />
            <option value={1}>Java</option>
            <option value={2}>HTML</option>
            <option value={3}>CSS</option>
          </TextField>

        </Grid>
        <Grid item xs={5}>
          <TextField
            size="small"
            id="outlined-select-currency"
            select
            label="Skill"
            fullWidth={true}
            label="Skill"
            variant="outlined"
          >
            <option aria-label="None" value="" />
            <option value={1}>Java</option>
            <option value={2}>HTML</option>
            <option value={3}>CSS</option>
          </TextField>

        </Grid>

        <Grid item xs={2}>
        <Grid item xs={3}>
          <Button variant="contained" color="primary">
            Search
          </Button>
        </Grid>
      </Grid>
      </Grid>
      <ListLookupSkill></ListLookupSkill>
      </Grid></Grid>

    </Paper>

  );

  
  return (
    <div style={{ padding: "20px" }}>
      <Typography variant="h6" gutterBottom>
        Create Job Role
      </Typography>

      <Grid container spacing={3}>
        
          <Grid container spacing={4}>
            <Grid item sm={8}>
              <TextField
                label="Topic"
                id="outlined-size-small"
                fullWidth={true}
                // defaultValue="Topics"
                variant="outlined"
                size="small"
              />
            </Grid>
            <Grid item sm={4}>
              <TextField
                size="small"
                fullWidth={true}
                id="outlined-select-currency"
                select
                label="stack"
                variant="outlined"
              >
                <option aria-label="None" value="" />
                <option value={10}>Ten</option>
                <option value={20}>Twenty</option>
                <option value={30}>Thirty</option>
              </TextField>
            </Grid>
          </Grid>
          <TextareaAutosize
            rowsMin={2}
            style={{
              width: "100%",
              height: "20%",
              marginTop: "2vh",
              borderColor: "darkgray",
              borderRadius: "4px",
              marginBottom: "1vh",
            }}
          ></TextareaAutosize>
<Grid container spacing={3}>
          <Grid item sm={8} >
            <TextField
              size="small"
              fullWidth={true}
              id="outlined-select-currency"
              select
              label="Pre requesites"
              variant="outlined"
            >
              <option aria-label="None" value="" />
              <option value={10}>Ten</option>
              <option value={20}>Twenty</option>
              <option value={30}>Thirty</option>
            </TextField>
          </Grid>
          </Grid>
          <br />
          <Grid container spacing={4} style={{marginTop:"1vh"}}>
            <Grid item sm={4}>
              <TextField
                size="small"
                fullWidth={true}
                id="outlined-select-currency"
                select
                label="Proficiency Level"
                variant="outlined"
              >
                <option aria-label="None" value="" />
                <option value={10}>Ten</option>
                <option value={20}>Twenty</option>
                <option value={30}>Thirty</option>
              </TextField>
            </Grid>

            <Grid item sm={4}>
              <TextField
                size="small"
                fullWidth={true}
                id="outlined-select-currency"
                select
                label="title"
                variant="outlined" >
                <option aria-label="None" value="" />
                <option value={10}>Ten</option>
                <option value={20}>Twenty</option>
                <option value={30}>Thirty</option>
              </TextField> </Grid>
            <Grid item sm={4}>
              <Button variant="contained" color="primary">
                Submit
              </Button>
              </Grid>
          </Grid>

          <Grid
            container spacing={5}style={{ marginTop:"8px" }}>
            <Grid item sm={8}>
              Java Deveoper | Beginner
                </Grid>
            <Grid item sm={4}>
              <Link
                style={{
                  textDecoration: "underline",
                  color: "blue",
                  marginLeft: "30px",
                }}
              >
                x
                </Link>
            </Grid>
            <Grid container spacing={3} style={{ marginLeft:"8px" }} >
              <Grid item sm={8} style={{ fontWeight: "bolder", fontSize: "large" }}>
                Skills
                </Grid>
              <Grid item sm={4}>
                <Button variant="contained" color="primary">
                  Lookup Skill
                 </Button>
              </Grid>
              {/* <Link to="createskillcertification">
            <Button variant="contained" color="primary">
              Create skill certification{" "}
            </Button>
          </Link> */}
            </Grid>
           
            <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
          >
            {body}
          </Modal>

            <Grid container >
      {jobroles.map((s, i) => {
        return (
          
            <Grid container spacing={3}
            style={{
              borderBottomStyle: "dotted",
              borderBottomWidth: "2px",
              paddingBottom: "6px",
              borderBottomColor: "darkgray",
              color: "black",
              marginTop: "2vh",
              marginLeft:"8px",
            }}>
              <Grid item xs={3}>
                {s.title}
              </Grid>
              <Grid item xs style={{ color: "darkgrey" }}>
                {s.stack}
              </Grid>
              <Grid item sm={4}>
              <Link
                style={{
                  textDecoration: "underline",
                  color: "blue",
                  marginLeft: "30px",
                }}
              >
                x
                </Link>
                </Grid>
                
                <br/>
            </Grid>
             
             
 );
})}
</Grid>
<Button variant="contained" color="primary" style={{marginTop:"30px",marginLeft:"50vh"}}>
             Submit
            </Button>
         </Grid>
        </Grid>

        
      <br />
    </div>
  );
}


export default CreateJobRoles;