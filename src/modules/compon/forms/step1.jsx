import React from "react";
import { Box, Container, Grid, TextField } from "@mui/material";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import "../../pages/login/login.css"

const Step1 = ({ formData, updateFormData, button, getData }) => {
  const phoneRegExp =
    /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

  const formSchema = Yup.object().shape({
    careHomeName: Yup.string().required("This Field is mandatory"),
    address: Yup.string().required("This Field is mandatory"),
    city: Yup.string().required("This Field is mandatory"),
    country: Yup.string().required("This Field is mandatory"),
    cno: Yup.string()
      .matches(phoneRegExp, "Phone number is not valid")
      .min(10, "must be at 10 char long"),
    email: Yup.string().email(),
  });

  const formOptions = { resolver: yupResolver(formSchema) };
  const { register, handleSubmit, reset, formState } = useForm(formOptions);
  const { errors } = formState;

  function onSubmit(data) {
    console.log(JSON.stringify(data, null, 4));
    let formData = data;
    getData(formData);
    return false;
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="form-group">
        <Container component="main" maxWidth="xs">
          <Box>
            <Container component="main" maxWidth="lg">
              <TextField
                {...register("careHomeName")}
                margin="dense"
                required
                size={"large"}
                id="careHomeName"
                label="Care Home Name"
                name="careHomeName"
                type="text"
                fullWidth
                variant={"outlined"}
                value={formData.careHomeName}
                onChange={(e) =>
                  updateFormData({ careHomeName: e.target.value })
                }
                error={!!errors.careHomeName}
                helperText={errors.careHomeName?.message}
              />
            </Container>

            <Container component="main" maxWidth="lg">
              <TextField
                {...register("address")}
                margin="dense"
                required
                size={"large"}
                id="address"
                label="Address"
                name="address"
                type="text"
                fullWidth
                variant={"outlined"}
                value={formData.address}
                onChange={(e) => updateFormData({ address: e.target.value })}
                error={!!errors.address}
                helperText={errors.address?.message}
              />
            </Container>

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
                    {...register("city")}
                    margin="dense"
                    required
                    size={"large"}
                    id="city"
                    label="City"
                    name="city"
                    type="text"
                    fullWidth
                    variant={"outlined"}
                    value={formData.city}
                    onChange={(e) => updateFormData({ city: e.target.value })}
                    error={!!errors.city}
                    helperText={errors.city?.message}
                  />
                </Grid>
                <Grid item md={6} xs={12}>
                  <TextField
                    {...register("country")}
                    margin="dense"
                    required
                    size={"large"}
                    id="country"
                    label="Country"
                    name="country"
                    type="text"
                    fullWidth
                    variant={"outlined"}
                    value={formData.country}
                    onChange={(e) =>
                      updateFormData({ country: e.target.value })
                    }
                    error={!!errors.country}
                    helperText={errors.country?.message}
                  />
                </Grid>
              </Grid>
            </Container>

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
                    {...register("cno")}
                    margin="dense"
                    required
                    size={"large"}
                    id="cno"
                    label="Contact No"
                    name="cno"
                    type="number"
                    fullWidth
                    variant={"outlined"}
                    value={formData.cno}
                    onChange={(e) => updateFormData({ cno: e.target.value })}
                    error={!!errors.cno}
                    helperText={errors.cno?.message}
                  />
                </Grid>
                <Grid item md={6} xs={12}>
                  <TextField
                    {...register("email")}
                    margin="dense"
                    required
                    size={"large"}
                    id="email"
                    label="Email"
                    name="email"
                    type="text"
                    fullWidth
                    variant={"outlined"}
                    value={formData.email}
                    onChange={(e) => updateFormData({ email: e.target.value })}
                    error={!!errors.email}
                    helperText={errors.email?.message}
                  />
                </Grid>
              </Grid>
            </Container>
          </Box>
          <Container component="main" maxWidth="lg">
            <Button
            className="loginBtn"
              variant="contained"
              sx={{
                borderRadius: "40px",
                width: "294px",
                backgroundColor: "#10CFC9",
                mt: 2,
                mb: 2,
              }}
              color="primary"
              type="submit"
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

export default Step1;
