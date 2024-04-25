import React from 'react'
import '../../static/css/forgotPass.css'
import { Box, Button, Grid, Paper, TextField } from '@mui/material'
import img from '../../static/assets/images/loginpagePic.png'
import logo from '../../static/assets/images/arquellaLogoPng.png'
import Link from "@mui/material/Link";

import comb1 from "../../static/assets/images/honeycomb1.png";
import carouselImg from "../../static/assets/images/Group 182.svg";
import comb2 from "../../static/assets/images/honeycomb-vertical (1) 2.svg";
import arqLogoTop from "../../static/assets/images/Group 113.png";
import { useMediaQuery } from "@mui/material";
import Carousel from "react-material-ui-carousel";

export const ForgotPassword = () => {

  const matches = useMediaQuery('(min-width:600px)');


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

    <div> <Grid container spacing={2}>
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
      <Grid item xs={12} sm={6} lg={6}>
      {!matches &&<h2 className="formTitleHeader">Hospital Logo</h2>}
        <div className='fpContainer' style={{
          backgroundColor: '',
          backgroundSize: "cover",
          height: "auto",
          color: "",
          margin: "0px 0px 0px 0px",
          padding: "90px 0px 0px 0px",

        }}>
          <div className='containerForm '>
            <div className='formUpperContent'>
              {/* <img src={logo} width={236} height={73} /> */}
            </div>
            <div className='formContainer'>
            {matches && <h2 className="formTitleHeader">Hospital Logo</h2>}
              <div style={{

                margin: '36px 0px 16px 0px',
                padding: '0px 0px 0px 0px',

              }}>
                <TextField sx={{ color: '#10CFC9', width: '294px', }} id="outlined-basic" label="E-Mail" variant="outlined" />
              </div>

              <div style={{

                margin: '8px 0px 24px 0px',
                padding: '0px 0px 0px 0px',

              }}>
                <Button variant="contained" sx={{ borderRadius: '100px', width: '294px', backgroundColor: '#0EB9B3' }}>
                  
                  <span className='loginBtnLabel' >
                    Submit
                    </span></Button>
              </div>



              <div>
                <p style={{
                  fontFamily: 'Mulish !important',
                  margin: '0',
                  fontSize: '14px',
                  fontWeight: '700',
                  color:"#0EB9B3",
                }}>

                  <Link className='LinkFp'
                    href="/Login">Back to login
                  </Link> </p>
              </div>

            </div>

          </div>


        </div>
      </Grid>

    </Grid></div >
  )
}
