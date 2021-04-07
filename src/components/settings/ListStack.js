import React, { useState } from "react";
import {
  Typography,
  Paper,
  Button,
  Grid,
  Link,
  TextField,
} from "@material-ui/core";
function ListStack() {
  const [Stack, setStack] = useState([
    { stack: "Java", type: "Platform" },
    { stack: "AWS", type: "Cloud" },
  ]);
  return (
    <div>
      {Stack.map((s) => {
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
            <Grid item xs>
              {s.stack} - {s.type}
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

export default ListStack;
