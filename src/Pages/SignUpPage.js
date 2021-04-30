// import React from "react";
// import { Formik, Field, Form, ErrorMessage } from "formik";
// import * as Yup from "yup";

// import { authenticationService } from "../services/authentication.service";

// export default class SignUpPage extends React.Component {
//   constructor(props) {
//     super(props);

//   }

//   render() {
//     return (
//       <div>
//         {/* <div className="alert alert-info">
//                     <strong>Normal User</strong> - U: user P: user<br />
//                     <strong>Administrator</strong> - U: admin P: admin
//                 </div> */}
//         <h2>Sign Up</h2>
//         <Formik
//           initialValues={{
//             firstName: "",
//             lastName: "",
//             username: "",
//             terms: "",
//             password: "",
//           }}
//           validationSchema={Yup.object().shape({
//             firstName: Yup.string().required("First Name is required"),
//             lastName: Yup.string().required("Last Name is required"),
//             username: Yup.string().required("Username is required"),
//             password: Yup.string().required("Password is required"),
//             terms: Yup.string().required("Terms & Conditions is required"),
//           })}
//           onSubmit={(
//             { firstName, lastName, username, password, terms },
//             { setStatus, setSubmitting }
//           ) => {
//             setStatus();
//             authenticationService
//               .signup(firstName, lastName, username, password, terms)
//               .then(
//                 (result) => {
//                   //const { from } = this.props.location.state || { from: { pathname: "/" } };
//                   this.props.history.push("/verify");
//                 },
//                 (error) => {
//                   setSubmitting(false);
//                   setStatus(error);
//                 }
//               );
//           }}
//           render={({ errors, status, touched, isSubmitting }) => (
//             <Form>
//               <div className="form-group">
//                 <label htmlFor="firstName">First Name</label>
//                 <Field
//                   name="firstName"
//                   type="text"
//                   className={
//                     "form-control" +
//                     (errors.firstName && touched.firstName ? " is-invalid" : "")
//                   }
//                 />
//                 <ErrorMessage
//                   name="firstName"
//                   component="div"
//                   className="invalid-feedback"
//                 />
//               </div>
//               <div className="form-group">
//                 <label htmlFor="lastName">Last Name</label>
//                 <Field
//                   name="lastName"
//                   type="text"
//                   className={
//                     "form-control" +
//                     (errors.lastName && touched.lastName ? " is-invalid" : "")
//                   }
//                 />
//                 <ErrorMessage
//                   name="lastName"
//                   component="div"
//                   className="invalid-feedback"
//                 />
//               </div>
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
//                 <label htmlFor="password">Password</label>
//                 <Field
//                   name="password"
//                   type="password"
//                   className={
//                     "form-control" +
//                     (errors.password && touched.password ? " is-invalid" : "")
//                   }
//                 />
//                 <ErrorMessage
//                   name="password"
//                   component="div"
//                   className="invalid-feedback"
//                 />
//               </div>
//               <div className="form-group">
//                 <Field
//                   name="terms"
//                   type="checkbox"
//                   className={
//                     "form-check-input " +
//                     (errors.terms && touched.terms ? " is-invalid" : "")
//                   }
//                 />
//                 <label htmlFor="terms" className="form-check-label">
//                   Terms &amp; Conditions
//                 </label>
//                 <ErrorMessage
//                   name="terms"
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
// }
import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

import { authenticationService } from "../services/authentication.service";

import {  Link } from "react-router-dom";
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
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignUpPage(props) {
  const classes = useStyles();

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <Formik
          initialValues={{
            firstName: "",
            lastName: "",
            username: "",
            terms: "",
            password: "",
          }}
          validationSchema={Yup.object().shape({
            firstName: Yup.string().required("First Name is required"),
            lastName: Yup.string().required("Last Name is required"),
            username: Yup.string().required("Username is required"),
            password: Yup.string().required("Password is required"),
            terms: Yup.string().required("Terms & Conditions is required"),
          })}
          onSubmit={(
            { firstName, lastName, username, password, terms },
            { setStatus, setSubmitting }
          ) => {
            setStatus();
            authenticationService
              .signup(firstName, lastName, username, password, terms)
              .then(
                (result) => {
                  //const { from } = this.props.location.state || { from: { pathname: "/" } };
                  props.history.push("/verify");
                },
                (error) => {
                  setSubmitting(false);
                  setStatus(error);
                }
              );
          }}
          render={({ errors, status, touched, isSubmitting }) => (
            <Form className={classes.form} noValidate>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <label htmlFor="firstName">First Name</label>
                  <Field
                    name="firstName"
                    type="text"
                    className={
                      "form-control" +
                      (errors.firstName && touched.firstName
                        ? " is-invalid"
                        : "")
                    }
                  />
                  <ErrorMessage
                    name="firstName"
                    component="div"
                    className="invalid-feedback"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <label htmlFor="lastName">Last Name</label>
                  <Field
                    name="lastName"
                    type="text"
                    className={
                      "form-control" +
                      (errors.lastName && touched.lastName ? " is-invalid" : "")
                    }
                  />
                  <ErrorMessage
                    name="lastName"
                    component="div"
                    className="invalid-feedback"
                  />
                </Grid>
                <Grid item xs={12}>
                  <label htmlFor="username">Username</label>
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
                </Grid>
                <Grid item xs={12}>
                  <label htmlFor="password">Password</label>
                  <Field
                    name="password"
                    type="password"
                    className={
                      "form-control" +
                      (errors.password && touched.password ? " is-invalid" : "")
                    }
                  />
                  <ErrorMessage
                    name="password"
                    component="div"
                    className="invalid-feedback"
                  />
                </Grid>
                <Grid item xs={12}>
                  <Field
                    name="terms"
                    type="checkbox"
                    className={
                      "form-check-input " +
                      (errors.terms && touched.terms ? " is-invalid" : "")
                    }
                  />
                  <label htmlFor="terms" className="form-check-label">
                    Terms &amp; Conditions
                  </label>
                  <ErrorMessage
                    name="terms"
                    component="div"
                    className="invalid-feedback"
                  />
                </Grid>
              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
                disabled={isSubmitting}
              >
                Sign Up
              </Button>
              {isSubmitting && (
                <img src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==" />
              )}

              <Grid container justify="flex-end">
                <Grid item>
                  <Link to="/login" variant="body2">
                    Already have an account? Sign in
                  </Link>
                </Grid>
              </Grid>
              {status && <div className={"alert alert-danger"}>{status}</div>}
            </Form>
          )}
        />
      </div>
      <Box mt={5}>
        <Copyright />
      </Box>
    </Container>
  );
}
