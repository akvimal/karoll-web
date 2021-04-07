// import React from "react";
// import { Router, Route, Link } from "react-router-dom";
// import { Formik, Field, Form, ErrorMessage } from "formik";
// import * as Yup from "yup";

// import { authenticationService } from "../services/authentication.service";

// export default class VerifyPage extends React.Component {
//   state = {
//     error: null,
//   };

//   constructor(props) {
//     super(props);

//   render() {
//     return (
//       <div>
//         <h2>Verify</h2>

//         <Formik
//           initialValues={{
//             username: "",
//             token: "",
//           }}
//           validationSchema={Yup.object().shape({
//             username: Yup.string().required("Username is required"),
//             token: Yup.string().required("Token is required"),
//           })}
//           onSubmit={({ username, token }, { setStatus, setSubmitting }) => {
//             setStatus();
//             authenticationService.verify(username, token).then(
//               (result) => {
//                 if (!result.success) {
//                   this.setState({ error: result.message });
//                   setSubmitting(false);
//                   setStatus(result.message);
//                 } else {
//                   // const { from } = this.props.location.state || { from: { pathname: "/" } };
//                   this.props.history.push("/login");
//                 }
//               },
//               (error) => {
//                 setSubmitting(false);
//                 setStatus(error);
//               }
//             );
//           }}
//           render={({ errors, status, touched, isSubmitting }) => (
//             <Form>
//               <div className="form-group">
//                 <label htmlFor="username">Username</label>
//                 <Field
//                   name="username"
//                   type="text"
//                   className={
//                     "form-control" +
//                     (errors.username && touched.username ? " is-invalid" : "")
//                   }
//                 />
//                 <ErrorMessage
//                   name="username"
//                   component="div"
//                   className="invalid-feedback"
//                 />
//               </div>
//               <div className="form-group">
//                 <label htmlFor="token">Token</label>
//                 <Field
//                   name="token"
//                   type="text"
//                   className={
//                     "form-control" +
//                     (errors.token && touched.token ? " is-invalid" : "")
//                   }
//                 />
//                 <ErrorMessage
//                   name="token"
//                   component="div"
//                   className="invalid-feedback"
//                 />
//               </div>
//               <div className="form-group">
//                 <button
//                   type="submit"
//                   className="btn btn-primary"
//                   disabled={isSubmitting}
//                 >
//                   Submit
//                 </button>
//                 {isSubmitting && (
//                   <img src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==" />
//                 )}
//               </div>

//               {status && <div className={"alert alert-danger"}>{status}</div>}
//             </Form>
//           )}
//         />
//       </div>
//     );
//   }
// }\
import React, { useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import { Router, Route, Link, Redirect } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

import { authenticationService } from "../services/authentication.service";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <label color="inherit">Your Website</label> {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function VerifyPage(props) {
  const [error, seterror] = useState("");

  const classes = useStyles();

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Verify
        </Typography>
        <Formik
          initialValues={{
            username: "",
            token: "",
          }}
          validationSchema={Yup.object().shape({
            username: Yup.string().required("Username is required"),
            token: Yup.string().required("Token is required"),
          })}
          onSubmit={({ username, token }, { setStatus, setSubmitting }) => {
            setStatus();
            authenticationService.verify(username, token).then(
              (result) => {
                console.log(result);
                if (!result.success) {
                  console.log(result.success);
                  seterror(result.message);
                  setSubmitting(false);
                  setStatus(result.message);
                  props.history.push("/login");
                } else {
                  props.history.push("/login");
                }
              },
              (error) => {
                setSubmitting(false);
                setStatus(error);
              }
            );
          }}
          render={({ errors, status, touched, isSubmitting }) => (
            <Form className={classes.form} noValidate>
              <div className="form-group">
                <label htmlFor="username">Username</label>{" "}
                <Field
                  name="username"
                  type="text"
                  className={
                    "form-control" +
                    (errors.username && touched.username ? " is-invalid" : "")
                  }
                />
                <ErrorMessage
                  name="username"
                  component="div"
                  className="invalid-feedback"
                />
              </div>
              <div className="form-group">
                <label htmlFor="token">Token</label>{" "}
                <Field
                  name="token"
                  type="text"
                  className={
                    "form-control" +
                    (errors.token && touched.token ? " is-invalid" : "")
                  }
                />
                <ErrorMessage
                  name="token"
                  component="div"
                  className="invalid-feedback"
                />
              </div>
              <Button
                type="submit"
                fullWidth
                color="primary"
                variant="contained"
                className={classes.submit}
                disabled={isSubmitting}
              >
                Submit
              </Button>
              {isSubmitting && (
                <img src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==" />
              )}
              <Grid container>
                <Grid item xs>
                  <Link to="/signup" variant="body2">
                    Sign Up
                  </Link>
                </Grid>
                <Grid item>
                  <Link to="/login" variant="body2">
                    Sign in
                  </Link>
                </Grid>
              </Grid>

              {status && <div className={"alert alert-danger"}>{status}</div>}
            </Form>
          )}
        />
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
}
