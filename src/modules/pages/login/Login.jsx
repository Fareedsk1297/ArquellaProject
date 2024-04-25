import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import "./login.css";
import Checkbox from "@mui/material/Checkbox";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import LoginIcon from "@mui/icons-material/Login";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

import FormControlLabel from "@mui/material/FormControlLabel";

import Link from "@mui/material/Link";

import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { useNavigate } from "react-router-dom";

import FilledInput from "@mui/material/FilledInput";
import OutlinedInput from "@mui/material/OutlinedInput";

import InputAdornment from "@mui/material/InputAdornment";
import FormHelperText from "@mui/material/FormHelperText";

import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

import IconButton from "@mui/material/IconButton";

import logo from "../../../static/assets/images/arquellaLogoPng.png";
import comb1 from "../../../static/assets/images/honeycomb1.png";
import carouselImg from "../../../static/assets/images/Group 182.svg";
import comb2 from "../../../static/assets/images/honeycomb-vertical (1) 2.svg";

import axios from "axios";

import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { logInWithEmailAndPassword } from "../../services/auth";

import validator from "validator";

import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import Carousel from "react-material-ui-carousel";

import arqLogoTop from "../../../static/assets/images/Group 113.png";
import { useMediaQuery } from "@mui/material";
//redux imports
import { useSelector, useDispatch } from 'react-redux'
import {Session_Reducer_SetToken} from "../../../redux/features/SessionReducer"

const label = { inputProps: { "aria-label": "Checkbox demo" } };

function Login() {
  const [age, setAge] = React.useState("");
  const [email, setEmail] = useState("");

  const [open, setOpen] = React.useState(false);
  const [open1, setOpen1] = React.useState(false);
  const [emailError, setEmailError] = useState("");
  const [text, setText] = useState("");
  const [password, setPassword] = useState("");

  const [openLoader, setOpenLoader] = React.useState(false);

  // const sessionToken = useSelector((state) => state.sessionToken.value)
  const dispatch = useDispatch()

  //mediaQueryTracker
  const matches = useMediaQuery('(min-width:600px)');

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleClickOpen1 = () => {
    setOpen1(true);
  };

  const handleClose1 = () => {
    setOpen1(false);
  };

  const handleCloseLoader = () => {
    setOpenLoader(false);
  };
  const handleToggle = () => {
    setOpenLoader(!open);
  };

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const navigate = useNavigate();

  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));

  const openAlert = () => {
    handleClickOpen();
  };

  const openAlert1 = () => {
    handleClickOpen1();
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    handleToggle();

    const data = new FormData(event.currentTarget);
    console.log("login form daqta", data);

    let userPayload = {
      email: data.get("email"),
      password: data.get("password"),
    };

    if (text === "" || password.length === 0) {
      console.log("here in error11");
      handleCloseLoader();
      openAlert1();
    } else {
      await logInWithEmailAndPassword(userPayload).then((data) => {
        console.log("here in away");
        if (data === undefined) {
          handleCloseLoader();
          openAlert();
        } else {
          // console.log(JSON.stringify(data, null, 2));
          // console.log(data);
          dispatch(Session_Reducer_SetToken(data))
          // localStorage.setItem("refreshToken", data.data.refresh_token);
          handleCloseLoader();
          navigate("/CALL/dashboard");
        }
      });
    }
  };

  const validateEmail = (e) => {
    var email = e.target.value;

    setText(email);

    if (email === "" || undefined) {
      setEmailError("Enter something)");
    }

    if (validator.isEmail(email)) {
      // setEmailError("Valid Email :)");
    } else {
      setEmailError("Enter valid Email!");
    }
  };

  const validatePw = (e) => {
    console.log(
      "-----------------------------------------------",
      e.target.value
    );
    var password = e.target.value;

    setPassword(password);
  };

  function ItemSingle() {
    return (
      <Paper className="paperCarousel" style={{ display: "flex" }}>
        <img src={carouselImg} style={{ width: "173px", height: "173px" }} />
        <div className="carouselContent">
          <p>
            Smart wireless nurse call system lorem i lorem lorem lorem lort erf
            dfhdjhjdfhd bjkfdjgyudefj isdhjhsf pjksfhs{" "}
          </p>
        </div>
      </Paper>
    );
  }

  return (
    <div>
      <Box>
        <Grid
          item
          container
          spacing={0}
          xs={12}
          sm={12}
          lg={12}
          className="outerContainerLogin"
        >
          <Grid item xs={12} sm={6} lg={6} className="loginImageCont">
            <div className="loginImageCont">
              <img
                src={comb1}
                style={{ position: "absolute" }}
                width="560px"
                alt="saSa"
                className="leftCombImg"
              />
              <div className="textLogo">
                <div>
                  <img src={arqLogoTop} alt="" />
                </div>
                <div>
                  <p className="hedTwoLogo">Capturing moments of care </p>
                </div>
              </div>
              <Grid item xs={12}>
                <div className="ProjectDiv">
                  <Carousel autoPlay={true}>
                    <ItemSingle />
                  </Carousel>
                </div>
              </Grid>
            </div>
          </Grid>
          <Grid item xs={12} sm={6} lg={6} className="formContent">
          {!matches &&<h2 className="formTitleHeader">Hospital Logo</h2>}
          
            <div className="formContainerTop">
              <div className="uperContian">
                {/* <Button onClick={handleToggle}>Show backdrop</Button> */}
                <Backdrop
                  sx={{
                    color: "#fff",
                    zIndex: (theme) => theme.zIndex.drawer + 1,
                  }}
                  open={openLoader}
                  onClick={handleCloseLoader}
                >
                  <CircularProgress color="inherit" />
                </Backdrop>

                <Container component="main" maxWidth="xs">
                  <Box
                    className="formParentContainer"
                    sx={{
                      boxShadow: 1,
                      width: 374,
                      height: 525,
                      // px: 2,
                      // py: 2,
                      marginTop: 4.5,
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      borderRadius: 5,
                      border: "1px solid #888C8C",
                      alignContent: "center",
                      alignSelf: "center",
                    }}
                  >
                    {matches && <h2 className="formTitleHeader">Hospital Logo</h2>}
                    <Box
                      component="form"
                      onSubmit={handleSubmit}
                      noValidate
                      sx={{ mt: 2 }}
                    >
                      <Container component="main" maxWidth="lg">
                        <TextField
                        className="emailLogin"
                          margin="normal"
                          required
                          size={"large"}
                          id="email"
                          label="Email Address"
                          name="email"
                          autoComplete="email"
                          autoFocus
                          fullWidth
                          variant={"outlined"}
                          style={{ width: 294 }}
                          onChange={(text) => validateEmail(text)}
                        />
                      </Container>

                      <Container component="main">
                        <FormControl
                          variant="outlined"
                          style={{ width: "100%" }}
                        >
                          <InputLabel
                            htmlFor="outlined-adornment-password"
                            style={{ paddingLeft: 20 }}
                          >
                            Password
                          </InputLabel>
                          <OutlinedInput
                            id="outlined-adornment-password"
                            name="password"
                            type={showPassword ? "text" : "password"}
                            onChange={(e) => validatePw(e)}
                            endAdornment={
                              <InputAdornment position="end">
                                <IconButton
                                  aria-label="toggle password visibility"
                                  onClick={handleClickShowPassword}
                                  onMouseDown={handleMouseDownPassword}
                                  edge="end"
                                >
                                  {showPassword ? (
                                    <VisibilityOff />
                                  ) : (
                                    <Visibility />
                                  )}
                                </IconButton>
                              </InputAdornment>
                            }
                            label="Password"
                            // fullWidth
                            style={{
                              width: 294,
                              justifyContent: "center",
                              alignContent: "center",
                              alignSelf: "center",
                            }}
                          />
                        </FormControl>
                        {/* <FormControlLabel
            
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          /> */}
                        <div className="pwText">
                          <p className="pwText1">
                            Password must be at least 8 characters long with 1
                            uppercase 1 lowercase & 1 numeric character
                          </p>
                        </div>
                        <span
                          style={{
                            fontWeight: "bold",
                            color: "red",
                            fontSize: 14,
                            fontFamily: "muli",
                            marginTop: 10,
                          }}
                        >
                          {emailError}
                        </span>
                        <div className="checkboxCont">
                          <Checkbox
                            {...label}
                            defaultChecked
                            style={{ color: "#0EB9B3" }}
                          />
                          <p className="remember"> Remember Me</p>
                        </div>
                        <Button
                          className="loginBtn"
                          type="submit"
                          variant="contained"
                          startIcon={<LoginIcon style={{ color: "#1D192B" }} />}
                          sx={{
                            background: "#0EB9B3",
                            width: 294,
                            height: 40,
                            borderRadius: 20,
                            fontFamily: "muli",
                            fontWeight: 700,
                            fontSize: 14,
                            color: "#1D192B",
                            lineHeight: "20px",
                          }}
                          onClick={() => {}}
                        >
                          <span className="loginBtnLabel">LogIn</span>
                        </Button>
                      </Container>

                      <Button
                        variant="outlined"
                        className="registerButton"
                        sx={{
                          width: 294,
                          height: 40,
                          borderRadius: 20,
                          marginTop: 2,
                        }}
                        onClick={() => {
                          navigate("/registration");
                        }}
                      >
                        Register Now
                      </Button>

                      <Grid container className="fwpw">
                        <Grid item xs={6}>
                          <FormControl
                            sx={{ m: 1, minWidth: 100, paddingRight: " 2px" }}
                            className="languageParentDiv"
                          >
                            <InputLabel
                              id="demo-select-small-label"
                              style={{
                                marginTop: -4,
                                fontSize: "14px",
                                fontWeight: 700,
                                lineHeight: "14px",
                              }}
                            >
                              English
                            </InputLabel>
                            <Select
                              labelId="demo-select-small-label"
                              id="demo-select-small"
                              value={age}
                              label="English"
                              onChange={handleChange}
                              size="small"
                              sx={{
                                color: "black",
                                ".MuiOutlinedInput-notchedOutline": {
                                  borderColor: "#10CFC9",
                                },
                                "&.Mui-focused .MuiOutlinedInput-notchedOutline":
                                  {
                                    borderColor: "#10CFC9",
                                  },
                                "&:hover .MuiOutlinedInput-notchedOutline": {
                                  borderColor: "#10CFC9",
                                },
                                ".MuiSvgIcon-root ": {
                                  fill: "black !important",
                                },
                                borderRadius: 2,
                              }}
                              IconComponent={() => (
                                <KeyboardArrowDownIcon
                                  style={{
                                    marginRight: 0,
                                    pointerEvents: "none",
                                  }}
                                />
                              )}
                            >
                              <MenuItem value="">
                                <em>None</em>
                              </MenuItem>
                              <MenuItem value={10}>Ten</MenuItem>
                              <MenuItem value={20}>Twenty</MenuItem>
                              <MenuItem value={30}>Thirty</MenuItem>
                            </Select>
                          </FormControl>
                        </Grid>
                        <Grid item xs={6} style={{ marginTop: 15 }}>
                          <Link
                            href="/Forgotpw"
                            variant="body2"
                            className="forgotpw"
                            style={{ textDecoration: "none", marginLeft: 25 }}
                          >
                            {"Forgot password"}
                          </Link>
                        </Grid>
                      </Grid>
                    </Box>
                  </Box>
                </Container>
              </div>
            </div>
          </Grid>
          <img
            src={comb2}
            style={{ position: "absolute", right: "0px", bottom: "0px" }}
            width="560px"
            alt="saSa"
            className="rightCombImg"
          />
        </Grid>
      </Box>

      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Entered Email id or Password is incorrect"}
        </DialogTitle>
        {/* <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Let Google help apps determine location. This means sending anonymous
            location data to Google, even when no apps are running.
          </DialogContentText>
        </DialogContent> */}
        <DialogActions>
          <Button onClick={handleClose}>Try Again</Button>
        </DialogActions>
      </Dialog>

      <Dialog
        open={open1}
        onClose={handleClose1}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Enter Email id or Password "}
        </DialogTitle>
        {/* <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Let Google help apps determine location. This means sending anonymous
            location data to Google, even when no apps are running.
          </DialogContentText>
        </DialogContent> */}
        <DialogActions>
          <Button onClick={handleClose1}>Try Again</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default Login;
