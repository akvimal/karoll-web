import { Grid, Link } from '@material-ui/core';
import React, { useState } from 'react';
function LearnTopicList(){
  
    return(
        <div style={{marginTop:"3vh"}}>
            <Grid container spacing={2}
             style={{
                borderBottomStyle: "solid",
                borderBottomWidth: "1px",
              }}>
         <Grid item sm={5}>
          Topic 1
         </Grid>
         <Grid item sm={5}>
           Content by : Aravind
         </Grid>
         <Grid item sm={2} style={{paddingLeft:"15vh"}}>
         <Link style={{ textDecoration: "underline", color: "blue" }}> Reflink </Link>
         </Grid>
       </Grid><br/>
       <Grid container spacing={2}
       style={{
        borderBottomStyle: "solid",
        borderBottomWidth: "1px",
      }}>
         <Grid item sm={5}>
          Topic 2
         </Grid>
         <Grid item sm={5}>
           Content by : SME
         </Grid>
         <Grid item sm={2} style={{paddingLeft:"15vh"}}>
         <Link style={{ textDecoration: "underline", color: "blue" }}> Reflink </Link>
         </Grid>
       </Grid>

        </div>
    );
}
export default LearnTopicList;