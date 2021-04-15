import React, { useState } from "react";
import {
  List,
  ListItem,
  ListItemText,

  ListSubheader,

  makeStyles,
  Checkbox,
  Button,
} from "@material-ui/core";
import ListItemIcon from "@material-ui/core/ListItemIcon";



function ListAttendance() {
  
  const [data, setdata] = useState([
    { Name: " Raj" },
    { Name: " Aravind" },
    { Name: " Prakash" },
  ]);
  const [checked, setChecked] = React.useState([0]);

  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };
  return (
    <div>
      <List  subheader={<li />}>
        {data.map((d, i) => {
          return (
            <>

              {" "}

              <ListItem
                key={i}
                role={undefined}
                dense
                button
                style={{
                  borderBottomStyle: "solid",
                  borderBottomWidth: "1px",
                  width:"55vh",
                }}
                onClick={handleToggle(d)}
              >
               
                <ListItemText id={i} primary={`${d.Name} `} style={{marginLeft:"-1vh"}} />
              </ListItem>
            </>
          );
        })}
      </List>
    </div>
  );
}

export default ListAttendance;
