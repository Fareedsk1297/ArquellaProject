import React, { useState, useEffect, useRef } from "react";
import "../login/login.css"

import { Box, Paper, StepLabel } from "@mui/material";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import Typography from "@mui/material/Typography";
import Step1a from "../../compon/forms/step1a";
import logo from "../../../static/assets/images/arquellaLogoPng.png";
import Step1 from "../../compon/forms/step1";
import Step2 from "../../compon/forms/step2";
import Step3 from "../../compon/forms/step3";
// import { useNavigate } from "react-router-dom";
import FormControl from "@mui/material/FormControl";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import { registerUser } from "../../services/auth";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import Button from "@mui/material/Button";

import comb1 from "../../../static/assets/images/honeycomb1.png";
import carouselImg from "../../../static/assets/images/Group 182.svg";
import comb2 from "../../../static/assets/images/honeycomb-vertical (1) 2.svg";
import arqLogoTop from "../../../static/assets/images/Group 113.png";
import { useMediaQuery } from "@mui/material";
import Carousel from "react-material-ui-carousel";

const Register = (props) => {
  const [selectedValue, setSelectedValue] = React.useState("a");
  const [activeStep, setActiveStep] = useState(0);
  const [skippedSteps, setSkippedSteps] = useState([]);
  const steps = getSteps();

  const [careGroupName, setCareGroupName] = useState("");
  const [noOfHomes, setNoOfHomes] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [cno, setCno] = useState("");
  const [groupEmail, setGroupEmail] = useState("");
  // const navigate = useNavigate();
  const [careHomeName, setCareHomeName] = useState("");
  const [homeAddress, setHomeAddress] = useState("");
  const [homeCity, setHomeCity] = useState("");
  const [homeCountry, setHomeCountry] = useState("");
  const [homeCno, setHomeCno] = useState("");
  const [homeEmail, SetHomeEmail] = useState("");

  const [noOfRoom, SetNoOfRoom] = useState("");
  const [noOfZones, SetNoOfZones] = useState("");
  const [noOfCommRooms, SetNoOfCommRooms] = useState("");
  const [noOfEnSuite, SetNoOfEnSuite] = useState("");

  const [loginEmail, SetLoginEmail] = useState("");

  const [password, setPassword] = useState("");

  const [confirmPassword, setConfirmPassword] = useState("");

  const [noOfRoomHome, SetNoOfRoomHome] = useState("");
  const [noOfZonesHome, SetNoOfZonesHome] = useState("");
  const [noOfCommRoomsHome, SetNoOfCommRoomsHome] = useState("");
  const [noOfEnSuiteHOme, SetNoOfEnSuiteHome] = useState("");

  // Define the initial form data state as an object
  const [formData, setFormData] = useState({
    selectedValue: "a",
    careGroupName: "",
    noOfHomes: "",
    address: "",
    city: "",
    country: "",
    cno: "",
    groupEmail: "",
    careHomeName: "",
    homeAddress: "",
    homeCity: "",
    homeCountry: "",
    homeCno: "",
    homeEmail: "",
    noOfRoom: "",
    noOfZones: "",
    noOfCommRooms: "",
    noOfEnSuite: "",
    loginEmail: "",
    password: "",
    confirmPassword: "",
    noOfRoomHome: "",
    noOfZonesHome: "",
    noOfCommRoomsHome: "",
    noOfEnSuiteHome: "",
  });

  const [openLoader, setOpenLoader] = React.useState(false);

  const matches = useMediaQuery('(min-width:600px)');

  const handleCloseLoader = () => {
    setOpenLoader(false);
  };
  const handleToggle = () => {
    setOpenLoader(true);
  };


  // const [careGroupName, setCareGroupName] = useState("");
  //test commit
  function getSteps() {
    return ["", "", ""];
  }

  const isStepOptional = (step) => {
    return step === 1 || step === 2;
  };

  const isStepSkipped = (step) => {
    return skippedSteps.includes(step);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  const handleSkip = () => {
    if (!isStepSkipped(activeStep)) {
      setSkippedSteps([...skippedSteps, activeStep]);
    }
    setActiveStep(activeStep + 1);
  };

  const handleChange = (data) => {
    console.log("handle change called in from Register1", data);
    setSelectedValue(event.target.value);
  };

  //form1a data collection
  const getStep1a = (data) => {
    setActiveStep(activeStep + 1);

    setCareGroupName(data.careGroupName);
    setNoOfHomes(data.noOfHomes);

    setAddress(data.address);
    setCity(data.city);
    setCountry(data.country);
    setCno(data.cno);

    setGroupEmail(data.email);

    console.log(JSON.stringify(data, null, 2));
  };

  //form1 data collection
  function getStep1(data) {
    setActiveStep(activeStep + 1);

    setCareHomeName(data.careHomeName);

    setHomeCity(data.city);
    setHomeCountry(data.country);
    setHomeCno(data.cno);
    SetHomeEmail(data.email);
    setHomeAddress(data.address);
    console.log(JSON.stringify(data, null, 2));
  }

  //form2 data collection
  function getStep2(data) {
    setActiveStep(activeStep + 1);

    if (selectedValue === "a") {
      SetNoOfRoom(data.NumberOfRoomsInCareHome);
      SetNoOfZones(data.numberOfZonesInCareHome);
      SetNoOfCommRooms(data.NumberOfCommunityRoomsInCareHome);
      SetNoOfEnSuite(data.careHomeNumberOfEnSuitesInCareHome);
    } else {
      SetNoOfRoomHome(data.NumberOfRoomsInCareHome);
      SetNoOfZonesHome(data.numberOfZonesInCareHome);
      SetNoOfCommRoomsHome(data.NumberOfCommunityRoomsInCareHome);
      SetNoOfEnSuiteHome(data.careHomeNumberOfEnSuitesInCareHome);
    }

    console.log(JSON.stringify(data, null, 2));
  }
  //form3 data collection
  function getStep3(data) {
    console.log("--0-", data);

    SetLoginEmail(data.email);
    setPassword(data.password);
    setConfirmPassword(data.confirmPwd);

    handleNext(data);
  }

  //API call
  const handleNext = async (data) => {

    console.log("handlenext....", data);
    handleToggle();

    if (activeStep === steps.length - 1) {
      // Handle form submission and updating the active step
      handleFormSubmit(data);
    } else {
      setActiveStep(activeStep + 1);
      setSkippedSteps(skippedSteps.filter((skipItem) => skipItem !== activeStep));
    }
    console.log("handlenext....", data);
    const updatedReqPyloadData = {
      care_group_name: careGroupName,
      care_group_email: groupEmail,
      care_group_contact_no: cno,
      care_home_name: careHomeName,
      care_home_email: homeEmail,
      care_home_contact_no: homeCno,
      user_email_address: data.email,
      password: data.password,
      care_group_address: address,
      care_home_address: homeAddress,
      care_group_city: city,
      care_group_country: country,

      total_number_of_rooms_in_care_group: noOfRoom,
      total_number_of_zones_in_care_group: noOfZones,
      total_number_of_community_rooms_in_care_group: noOfCommRooms,
      total_number_of_en_suites_in_care_group: noOfEnSuite,

      care_home_city: homeCity,
      care_home_country: homeCountry,

      number_of_zones_in_care_home: noOfZonesHome,
      number_of_community_rooms_in_care_home: noOfCommRoomsHome,
      number_of_rooms_in_care_home: noOfRoomHome,
      number_of_en_suites_in_care_home: noOfEnSuiteHOme,
      no_of_care_homes: noOfHomes,
    };

    handleToggle();

    if (activeStep == steps.length - 1) {
      await registerUser(updatedReqPyloadData)
        .then((data) => {
          navigate("/login");
          handleToggle();
          console.log(" *//*-", JSON.stringify(data, null, 2));
          // localStorage.setItem("refreshToken", res.data.refresh_token);
          // handleCloseLoader();
          // redirect to home page or dashboard
        })
        .catch((error) => {
          console.log("condii runn *//*-", JSON.stringify(error, null, 2));
          handleCloseLoader();
        });
    } else {
      setActiveStep(activeStep + 1);
      setSkippedSteps(
        skippedSteps.filter((skipItem) => skipItem !== activeStep)
      );
    }
  };

  //update form data function................
  const updateFormData = (data) => {
    setFormData((prevFormData) => ({ ...prevFormData, ...data }));
  };

  const handleFormSubmit = (data) => {
    // Call the appropriate functions based on the active step
    if (activeStep === 0) {
      getStep1a(data);
    } else if (activeStep === 1) {
      getStep1(data);
    } else if (activeStep === 2) {
      getStep2(data);
    } else if (activeStep === 3) {
      getStep3(data);
    }
  };

  function getStepContent(step) {
    switch (step) {
      case 0:
        return selectedValue === "a" ? (
          <Step1a
            button={activeStep === steps.length - 1 ? "Finish" : "Next"}
            formData={formData}
            updateFormData={updateFormData}
            getData={getStep1a}
          />
        ) : (
          <Step1
            button={activeStep === steps.length - 1 ? "Finish" : "Next"}
            formData={formData}
            updateFormData={updateFormData}
            getData={getStep1}
          />
        );
      case 1:
        return (
          <Step2
            formData={formData}
            updateFormData={updateFormData}
            button={activeStep === steps.length - 1 ? "Finish" : "Next"}
            getData={getStep2}
          />
        );
      case 2:
        return (
          <Step3
            formData={formData}
            updateFormData={updateFormData}
            button={activeStep === steps.length - 1 ? "Finish" : "Next"}
            getData={getStep3}
          />
        );
      default:
        return "unknown step";
    }
  }

  // //switch forms on clicking next

  //first code .................
  // function getStepContent(step) {
  //   switch (step) {
  //     case 0:
  //       return selectedValue == "a" ? (
  //         <Step1a
  //           button={activeStep === steps.length - 1 ? "Finish" : "Next"}
  //           // change={handleState}
  //           handleChange={handleChange}
  //           handleRadio={selectedValue === "b"}
  //           getData={getStep1a}
  //         />
  //       ) : (
  //         <Step1
  //           button={activeStep === steps.length - 1 ? "Finish" : "Next"}
  //           handleChange={handleChange}
  //           // change={handleState}
  //           handleRadio={selectedValue === "a"}
  //           getData={getStep1}
  //         />
  //       );

  //     case 1:
  //       return (
  //         <Step2
  //           // change={handleState}
  //           handleChange={handleChange}
  //           button={activeStep === steps.length - 1 ? "Finish" : "Next"}
  //           getData={getStep2}
  //         />
  //       );
  //     case 2:
  //       return (
  //         <Step3
  //           button={activeStep === steps.length - 1 ? "Finish" : "Next"}
  //           getData={getStep3}
  //         />
  //       );

  //     default:
  //       return "unknown step";
  //   }
  // }

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
    <div className="">
      <Box sx={{ flexGrow: 1 }} xs={12} md={12} ls={12}>
        <Grid
          container
          spacing={0}
          xs={12}
          sm={12}
          lg={12}
          className="leftImgContainer"
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
                  <img src={arqLogoTop} alt="" srcset="" />
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

          <Grid item xs={12} md={6} ls={6} className="rightRegContainer">
            {!matches && <h2 className="formTitleHeader">Hospital Logo</h2>}
            <div className="formContainerTop">
              <div className="uperContian">
                {/* <div className="logoCont">
                  <img src={logo} />
                </div> */}

                <Container component="main" maxWidth="xs">


                  {/* Form dynamic text */}


                  {activeStep === steps.length ? (
                    <Typography variant="h3" align="center">
                      Thank You
                    </Typography>
                  ) : (
                    <Box
                      className="formParentContainer"
                      sx={{
                        boxShadow: 1,
                        width: 396,
                        // height: 707,
                        // px: 2,
                        // py: 2,
                        marginTop: 2,
                        display: "flex",
                        flexDirection: "column",
                        // alignItems: "center",
                        borderRadius: 5,
                        border: "1px solid #888C8C",
                        mt: 5,
                        // alignContent: "center",
                        // alignSelf: "center",
                        // marginLeft: -3,
                      }}
                    >
                      {matches && <h2 className="formTitleHeader">Hospital Logo</h2>}
                      {/* Radio button component */}
                      <Stepper
                        alternativeLabel
                        activeStep={activeStep}
                      // onClick={ ()=>  setActiveStep(activeStep + 1) }
                      >
                        {steps.map((step, index) => {
                          const labelProps = {};
                          const stepProps = {};

                          if (isStepSkipped(index)) {
                            stepProps.completed = false;
                          }
                          return (
                            <Step
                              {...stepProps}
                              key={index}
                              style={{ marginTop: 16 }}
                              onClick={() => setActiveStep(index)}
                              sx={{
                                "& .MuiStepLabel-root .Mui-completed": {
                                  color: "#10CFC9", // circle color (COMPLETED)
                                },
                                "& .MuiStepLabel-label.Mui-completed.MuiStepLabel-alternativeLabel":
                                {
                                  color: "grey.500", // Just text label (COMPLETED)
                                },
                                "& .MuiStepLabel-root .Mui-active": {
                                  color: "#10CFC9", // circle color (ACTIVE)
                                },
                                "& .MuiStepLabel-label.Mui-active.MuiStepLabel-alternativeLabel":
                                {
                                  color: "common.white", // Just text label (ACTIVE)
                                },
                                "& .MuiStepLabel-root .Mui-active .MuiStepIcon-text":
                                {
                                  fill: "white", // circle's number (ACTIVE)
                                },
                              }}
                            >
                              <StepLabel {...labelProps}>{step}</StepLabel>
                            </Step>
                          );
                        })}
                      </Stepper>
                      <p className="dynamicText">
                        {activeStep === 0 ? " Basic Information" : ""}
                        {activeStep === 1 ? " Care Home Details" : ""}
                        {activeStep === 2 ? " Manager login details" : ""}
                      </p>
                      {activeStep === 0 ? (
                        <FormControl
                          style={{
                            alignContent: "center",
                            alignSelf: "center",
                          }}
                          sx={{ mt: 4 }}
                        >
                          <RadioGroup
                            row
                            aria-labelledby="demo-row-radio-buttons-group-label"
                            name="row-radio-buttons-group"
                          >
                            <FormControlLabel
                              value="CareGroup"
                              control={
                                <Radio
                                  checked={selectedValue === "a"}
                                  onChange={handleChange}
                                  value="a"
                                  name="radio-buttons"
                                  slotProps={{ input: { "aria-label": "A" } }}
                                />
                              }
                              label="Care Group"
                            />
                            <FormControlLabel
                              value="CareHome"
                              control={
                                <Radio
                                  checked={selectedValue === "b"}
                                  onChange={handleChange}
                                  value="b"
                                  name="radio-buttons"
                                  slotProps={{ input: { "aria-label": "B" } }}
                                />
                              }
                              label="Care Home"
                            />
                          </RadioGroup>
                        </FormControl>
                      ) : (
                        <div />
                      )}

                      {/* Switch form on clicking on next  */}
                      {getStepContent(activeStep)}
                    </Box>
                  )}
                </Container>
              </div>
            </div>


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

    </div>
  );
};

export default Register;
