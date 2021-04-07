import React from "react";
import { Grid, Link } from "@material-ui/core";
function ListAttachments(props) {
  return (
    <div style={{ marginTop: "2vh" }}>
      {props.data.map((d) => {
        return (
          <Grid
            container
            style={{
              borderBottomStyle: "dotted",
              borderBottomWidth: "2px",
              paddingBottom: "6px",
              borderBottomColor: "darkgray",

              marginTop: "2vh",
            }}
          >
            <Grid item xs={10}>
              {d.file}{" "}
            </Grid>
            <Grid item xs>
              <Link style={{ textDecoration: "underline", color: "blue" }}>
                {" "}
                x
              </Link>
            </Grid>
          </Grid>
        );
      })}
    </div>
  );
}

export default ListAttachments;
