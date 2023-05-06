import React, { useState, useEffect } from "react";

import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
// import FormControlLabel from "@material-ui/core/FormControlLabel";
// import Checkbox from "@material-ui/core/Checkbox";
// import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
// import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

import { useForm, Controller } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import axios from "axios";
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

function EditBusPage() {
  const classes = useStyles();

  const navigate = useNavigate();

  const { handleSubmit, control } = useForm();

  const { _id } = useParams();
  const [busData, setBusData] = useState(null);

  useEffect(() => {
    async function fetchBusData() {
      try {
        const response = await axios.get(
          `http://localhost:3000/bus-manage/bus/${_id}`
        );
        const data = response.data;
        setBusData(data);
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
        `http://localhost:3000/bus-manage/bus/${_id}`,
        formData
      );
      console.log(response);
      if (response.status === 200) {
        // Redirect to bus list page or show success message
        alert("Bus data updated successfully.");
        navigate("/dashboard/bus"); // Redirect to bus list page
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Bus Registration
        </Typography>
        {busData ? (
          <form
            onSubmit={handleSubmit(onSubmit)}
            className={classes.form}
            noValidate
          >
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <Controller
                  name="busNumber"
                  control={control}
                  defaultValue={busData.busNumber}
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
              <Grid item xs={12} sm={6}>
                <Controller
                  name="busType"
                  control={control}
                  defaultValue={busData.busType}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      label="Bus Type"
                      variant="outlined"
                      fullWidth
                    />
                  )}
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <Controller
                  name="passengerCapacity"
                  control={control}
                  defaultValue={busData.passengerCapacity}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      label="Passenger Capacity"
                      variant="outlined"
                      fullWidth
                      type="number"
                    />
                  )}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <Controller
                  name="fuelConsumption"
                  control={control}
                  defaultValue={busData.fuelConsumption}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      label="Fuel Consumption"
                      variant="outlined"
                      type="number"
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

export default EditBusPage;
