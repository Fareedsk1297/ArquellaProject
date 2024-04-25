import React from "react";
import { Box, Container, Grid, TextField } from "@mui/material";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

const Step2 = ({ formData, updateFormData, button, getData, handleChange }) => {
  const formSchema = Yup.object().shape({
    NumberOfRoomsInCareHome: Yup.string().required("This Field is mandatory"),
    numberOfZonesInCareHome: Yup.string().required("This Field is mandatory"),
    NumberOfCommunityRoomsInCareHome: Yup.string().required(
      "This Field is mandatory"
    ),
    careHomeNumberOfEnSuitesInCareHome: Yup.string().required(
      "This Field is mandatory"
    ),
  });

  const formOptions = { resolver: yupResolver(formSchema) };
  const { register, handleSubmit, reset, formState } = useForm(formOptions);
  const { errors } = formState;

  function onSubmit(data) {
    let formData = data;
    getData(formData);
    handleChange(formData);
    return false;
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="form-group">
        <Container component="main" maxWidth="xs">
          <Box sx={{ mt: 3, mb: 5 }}>
            <Container component="main" maxWidth="lg">
              <Grid
                container
                spacing={2}
                direction="row"
                alignItems="center"
                justifyContent="center"
              >
                <Grid item md={6} xs={12}>
                  <TextField
                    {...register("NumberOfRoomsInCareHome")}
                    margin="dense"
                    required
                    size={"large"}
                    id="NumberOfRoomsInCareHome"
                    label="Number Of Rooms"
                    name="NumberOfRoomsInCareHome"
                    type="number"
                    autoFocus
                    fullWidth
                    variant={"outlined"}
                    value={formData.NumberOfRoomsInCareHome}
                    onChange={(e) =>
                      updateFormData({ NumberOfRoomsInCareHome: e.target.value })
                    }
                    error={!!errors.NumberOfRoomsInCareHome}
                    helperText={errors.NumberOfRoomsInCareHome?.message}
                  />
                </Grid>
                <Grid item md={6} xs={12}>
                  <TextField
                    {...register("numberOfZonesInCareHome")}
                    margin="dense"
                    required
                    size={"large"}
                    id="numberOfZonesInCareHome"
                    label="Number of Zones"
                    name="numberOfZonesInCareHome"
                    type="number"
                    fullWidth
                    variant={"outlined"}
                    value={formData.numberOfZonesInCareHome}
                    onChange={(e) =>
                      updateFormData({ numberOfZonesInCareHome: e.target.value })
                    }
                    error={!!errors.numberOfZonesInCareHome}
                    helperText={errors.numberOfZonesInCareHome?.message}
                  />
                </Grid>
              </Grid>
            </Container>

            <Container component="main" maxWidth="lg">
              <TextField
                {...register("NumberOfCommunityRoomsInCareHome")}
                margin="dense"
                required
                size={"large"}
                id="NumberOfCommunityRoomsInCareHome"
                label="Number of Community Rooms"
                name="NumberOfCommunityRoomsInCareHome"
                type="number"
                fullWidth
                variant={"outlined"}
                value={formData.NumberOfCommunityRoomsInCareHome}
                onChange={(e) =>
                  updateFormData({
                    NumberOfCommunityRoomsInCareHome: e.target.value,
                  })
                }
                error={!!errors.NumberOfCommunityRoomsInCareHome}
                helperText={errors.NumberOfCommunityRoomsInCareHome?.message}
              />
            </Container>

            <Container component="main" maxWidth="lg">
              <TextField
                {...register("careHomeNumberOfEnSuitesInCareHome")}
                margin="dense"
                required
                size={"large"}
                id="careHomeNumberOfEnSuitesInCareHome"
                label="Number of en Suites"
                name="careHomeNumberOfEnSuitesInCareHome"
                type="number"
                fullWidth
                variant={"outlined"}
                value={formData.careHomeNumberOfEnSuitesInCareHome}
                onChange={(e) =>
                  updateFormData({
                    careHomeNumberOfEnSuitesInCareHome: e.target.value,
                  })
                }
                error={!!errors.careHomeNumberOfEnSuitesInCareHome}
                helperText={errors.careHomeNumberOfEnSuitesInCareHome?.message}
              />
            </Container>
          </Box>
          <Container component="main" maxWidth="lg">
            <Button
              variant="contained"
              sx={{
                borderRadius: "40px",
                width: "294px",
                backgroundColor: "#10CFC9",
                mb: 2,
              }}
              color="primary"
              type="submit"
              className="loginBtn"
            >
              {button}
            </Button>
          </Container>

          <Container
            component="main"
            maxWidth="lg"
            style={{ marginTop: 8, marginBottom: 30 }}
          >
            <Grid
              container
              spacing={2}
              direction="row"
              alignItems="center"
              justifyContent="center"
            >
              <Grid item xs={8}>
                <p className="already">Already have an account?</p>
              </Grid>
              <Grid item xs={4}>
                <Link
                  href="/Login"
                  className="login"
                  style={{ textDecoration: "none", marginLeft: 25,color:'#0EB9B3',fontWeight:'700' }}
                >
                  {"login"}
                </Link>
              </Grid>
            </Grid>
          </Container>
        </Container>
      </div>
    </form>
  );
};

export default Step2;
