import React, { useState, useEffect } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";

import Grid from "@material-ui/core/Grid";

import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

import { useForm, Controller } from "react-hook-form";
import axios from "axios";

import { useNavigate } from "react-router-dom";

import { useParams } from "react-router-dom";

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

function EditRoot() {
  const classes = useStyles();
  const navigate = useNavigate();

  const { handleSubmit, control } = useForm();

  const { _id } = useParams();
  const [rootData, setRootData] = useState(null);

  // const onSubmit = (data) => {
  //   console.log(data);
  // };

  useEffect(() => {
    async function fetchBusData() {
      try {
        const response = await axios.get(
          `http://localhost:3000/buses/busroot/${_id}`
        );
        const data = response.data;
        setRootData(data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchBusData();
  }, [_id]);

  const onSubmit = async (formData) => {
    try {
      console.log(formData);
      const response = await axios.put(
        `http://localhost:3000/buses/busroot/${_id}`,
        formData
      );
      console.log(response);
      if (response.status === 200) {
        // Redirect to bus list page or show success message
         alert("Bus root updated successfully.");
        navigate("/dashboard/root"); // Redirect to bus list page
      }
    } catch (error) {
      console.log(error);
    }
  };

  // _id: {
  //   type: String,
  // },
  // origin: {
  //   type: String,
  // },
  // destination: {
  //   type: String,
  // },
  // busNumber: {
  //   type: String,
  // },
  // startTime: {
  //   type: String,
  // },
  // arriveTime: {
  //   type: String,
  // },
  // price: {
  //   type: String,
  // },
  // otherDetails: {
  //   type: String,
  // },
  // date: {
  //   type: String,
  // },

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Root Registration
        </Typography>
        {rootData ? (
          <form
            onSubmit={handleSubmit(onSubmit)}
            className={classes.form}
            noValidate
          >
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <Controller
                  name="routeNumber"
                  control={control}
                  defaultValue={rootData.routeNumber}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      label="Route Number"
                      variant="outlined"
                      fullWidth
                    />
                  )}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <Controller
                  name="busNumber"
                  control={control}
                  defaultValue={rootData.busNumber}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      label="Bus Number"
                      variant="outlined"
                      fullWidth
                    />
                  )}
                />
              </Grid>
              <Grid item xs={12}>
                <Controller
                  name="origin"
                  control={control}
                  defaultValue={rootData.origin}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      label="Origin "
                      variant="outlined"
                      fullWidth
                    />
                  )}
                />
              </Grid>
              <Grid item xs={12}>
                <Controller
                  name="destination"
                  control={control}
                  defaultValue={rootData.destination}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      label="Destination"
                      variant="outlined"
                      fullWidth
                    />
                  )}
                />
              </Grid>
              <Grid item xs={12}>
                <Controller
                  name="price"
                  control={control}
                  defaultValue={rootData.price}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      label="Ticket Price"
                      variant="outlined"
                      fullWidth
                    />
                  )}
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <Controller
                  name="startTime"
                  control={control}
                  defaultValue={rootData.startTime}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      label="start Time"
                      variant="outlined"
                      fullWidth
                    />
                  )}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <Controller
                  name="arriveTime"
                  control={control}
                  defaultValue={rootData.arriveTime}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      label="Arrive Time"
                      variant="outlined"
                      fullWidth
                    />
                  )}
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <Controller
                  name="date"
                  control={control}
                  defaultValue={rootData.date}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      label="Date"
                      variant="outlined"
                      fullWidth
                    />
                  )}
                />
              </Grid>

              <Grid item xs={12}>
                <Controller
                  name="otherDetails"
                  control={control}
                  defaultValue={rootData.otherDetails}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      label="Other Details"
                      variant="outlined"
                      fullWidth
                    />
                  )}
                />
              </Grid>
            </Grid>

            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Save Changes
            </Button>
          </form>
        ) : (
          <p>Loading bus data...</p>
        )}
      </div>
    </Container>
  );
}

export default EditRoot;
