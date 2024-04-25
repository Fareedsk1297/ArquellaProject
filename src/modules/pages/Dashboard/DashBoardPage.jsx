import React, { useEffect } from "react";

import Box from "@mui/material/Box";

import Typography from "@mui/material/Typography";

import axios from "axios";
import "./DashboardPage.css"
import { Grid } from "@mui/material";

//import inner components

//redux imports
import { useSelector, useDispatch } from 'react-redux'
import CallStatusBar from "./CallStatusBar"
import LiveCall from "./LiveCall"
import GraphStatus from "./GraphStatus"

//images export 
import ArqLogo from "../../../static/assets/images/ArqLogo.svg"

function DashBoardPage() {
  const [open, setOpen] = React.useState(false);

  const authToken =
    "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOjEsImVtYWlsIjoidGF0YUBnbWFpbC5jb20iLCJyb2xlIjoidXNlciIsImlhdCI6MTY4MzI3NjI2MywiZXhwIjoxNzE0ODMzODYzfQ.OcppcrQgm0_3GW8gBhOpMgdJnbKHX3RGC9sqkcdLN9E";

  const [resData, setResData] = React.useState([]);

  const apiUrl = "http://localhost:3007/care/caregroupandhomes";



  // useEffect(() => {

  //   axios.defaults.headers.common["Authorization"] = authToken;

  //   axios
  //     .post(apiUrl)

  //     .then((response) => {
  //       console.log("565", JSON.stringify(response.data, null, 2));

  //       setResData([response.data]);
  //     })

  //     .catch((error) => {
  //       console.log(error);
  //     });
  // }, [])

  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()


  return (
    <div className="dashboardCC">
      <Grid container spacing={2} className="dashboardParentContainer">
        <Grid item xs={9} className="dashboardLeftContainer">
            <Grid container spacing={2} className="statusParentContainer">
              <Grid item className="callStatusLeftContainer" xs={8}>
                <CallStatusBar />
              </Grid>
              <Grid item className="callStatusRightContainer" xs={3.65}>
                <LiveCall/>
              </Grid>
              <Grid item className="callStatusGraphContainer" xs={11.95}>
                <GraphStatus/>
              </Grid>
            </Grid>
          </Grid>
        <Grid item xs={3} className="dashboardRightContainer">
              <div>
                <img src={ArqLogo} alt="" srcSet="" />
              </div>
        </Grid>
      </Grid>
    </div>
  );
}

export default DashBoardPage;
