import React, { useState } from "react";
import { Typography, Grid, TextField, TextareaAutosize, Paper, Chip, makeStyles } from "@material-ui/core";
import ListObjectives from "../../components/ListObjectives";

const useStyles = makeStyles((theme) => ({
  chip: {
    //margin: "5px",
    marginLeft:'1vw'
  },
}));

function CreateSkill() {
  const classes = useStyles();
  const [Data, setData] = useState([{stack:'Java'},{stack:'HTML'},{stack:'CSS'}]);
  const handleDelete = () => {
    console.info("You clicked the delete icon.");
  };
  return (
    <div style={{ padding: "20px" }}>
      <Typography variant="h6" gutterBottom>
        Create Skill
      </Typography>
      <Grid container spacing={2}>
         <Grid item xs={8}>
           <TextField
            size="small"
            id="outlined-select-currency"
           
            fullWidth={true}
            label="Title"
            // value={currency}
            // onChange={handleChange}
            // helperText="Please select stack type"
            variant="outlined"
          >
            </TextField>
            </Grid>
            <Grid item xs={4}>
           <TextField
            size="small"
            id="outlined-select-currency"
            select
            label="Proviciency Level"
            fullWidth={true}
            // value={currency}
            // onChange={handleChange}
            // helperText="Please select your currency"
            variant="outlined"
          >
            <option aria-label="None" value="" />
            <option value={1}>Beginner</option>
            <option value={2}>Intermediate</option>
            <option value={3}>Advanced</option>
          </TextField>
        </Grid>
        
        </Grid>
        <TextareaAutosize
          rowsMin={3}
          placeholder="Description"
          style={{
            width: "100%",
            height: "50%",
            marginTop: "2vh",
            borderColor: "darkgray",
            borderRadius: "4px",
            marginBottom: "1vh",
          }}
        >  
        </TextareaAutosize>
        <Grid container>
        <Grid item xs={2}>
           <TextField
            size="small"
            id="outlined-select-currency"
            select
            label="Stack"
            fullWidth={true}
            // value={currency}
            // onChange={handleChange}
            // helperText="Please select your currency"
            variant="outlined"
          >
            <option aria-label="None" value="" />
            <option value={1}>Java</option>
            <option value={2}>PHP</option>
            <option value={3}>ReactJs</option>
          </TextField>
        </Grid>
{Data.map((d)=>{
  return <Chip className={classes.chip} label={d.stack} onDelete={handleDelete} />

})}
        </Grid>
        <ListObjectives></ListObjectives>
    </div>
  );
}

export default CreateSkill;

