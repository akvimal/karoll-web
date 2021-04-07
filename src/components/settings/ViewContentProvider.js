import {
  Grid,
  Paper,
  Link,
  Typography,
  Chip,
  makeStyles,
} from "@material-ui/core";
import React, { useState } from "react";
const useStyles = makeStyles((theme) => ({
  chip: {
    margin: "5px",
  },
}));

function ViewContentProvider() {
  const classes = useStyles();
  const [Content, setContent] = useState([
    {
      name: "ABC Provider",
      email: "xyz@gmail.com",
      webUrl: "www.website.com",
      content: true,
      lab: true,
      evaluation: false,
      certification: true,
      techWriting: false,
    },
    {
      name: "Skillpot",
      email: "xyz@gmail.com",
      webUrl: "www.skilpot.com",
      content: false,
      lab: true,
      evaluation: false,
      certification: true,
      techWriting: false,
    },
  ]);
  const handleDelete = () => {
    console.info("You clicked the delete icon.");
  };
  return (
    <Paper elevation={0} style={{ margin: "10px" }}>
      {Content.map((c) => {
        return (
          <Grid>
            <Grid
              style={{
                borderBottomStyle: "dotted",
                borderBottomWidth: "2px",
                paddingBottom: "6px",
                borderBottomColor: "darkgray",

                marginTop: "3vh",
              }}
            >
              {c.name}
            </Grid>
            <Grid>
              <Paper elevation={0}>
                {c.email}
                <br />
                {c.webUrl}
                <br />
                {c.content ? (
                  <Chip
                    className={classes.chip}
                    label="Content"
                    onDelete={handleDelete}
                  />
                ) : (
                  " "
                )}
                {c.lab ? (
                  <Chip
                    className={classes.chip}
                    label="Lab"
                    onDelete={handleDelete}
                  />
                ) : (
                  " "
                )}
                {c.evaluation ? (
                  <Chip
                    className={classes.chip}
                    label="Evaluation"
                    onDelete={handleDelete}
                  />
                ) : (
                  " "
                )}
                {c.certification ? (
                  <Chip
                    className={classes.chip}
                    label="Certification"
                    onDelete={handleDelete}
                  />
                ) : (
                  " "
                )}
                {c.techWriting ? (
                  <Chip
                    className={classes.chip}
                    label="Tech Writing"
                    onDelete={handleDelete}
                  />
                ) : (
                  " "
                )}
              </Paper>
            </Grid>
          </Grid>
        );
      })}
    </Paper>
  );
}

export default ViewContentProvider;
