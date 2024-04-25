import React from "react";
import { Box } from "@mui/material";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

const Step1a = ({ formData, updateFormData, button, getData }) => {
  const phoneRegExp =
    /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

  const formSchema = Yup.object().shape({
    careGroupName: Yup.string().required("This Field is mandatory"),
    noOfHomes: Yup.string().required("This Field is mandatory"),
    address: Yup.string().required("This Field is mandatory"),
    city: Yup.string().required("This Field is mandatory"),
    country: Yup.string().required("This Field is mandatory"),
    cno: Yup.string()
      .matches(phoneRegExp, "Phone number is not valid")
      .min(10, "must be at least 10 characters long"),
    email: Yup.string().email(),
  });

  const formOptions = { resolver: yupResolver(formSchema) };
  const { register, handleSubmit, formState } = useForm(formOptions);
  const { errors } = formState;

  function onSubmit(data) {
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
                {...register("careGroupName")}
                margin="dense"
                required
                size="large"
                id="careGroupName"
                label="Care Group Name"
                name="careGroupName"
                type="text"
                fullWidth
                variant="outlined"
                value={formData.careGroupName}
                onChange={(e) => updateFormData({ careGroupName: e.target.value })}
                error={!!errors.careGroupName}
                helperText={errors.careGroupName?.message}
              />
            </Container>

            <Container component="main" maxWidth="lg">
              <TextField
                {...register("noOfHomes")}
                margin="dense"
                required
                size="large"
                id="noOfHomes"
                label="Number of Homes"
                name="noOfHomes"
                type="number"
                fullWidth
                variant="outlined"
                value={formData.noOfHomes}
                onChange={(e) => updateFormData({ noOfHomes: e.target.value })}
                error={!!errors.noOfHomes}
                helperText={errors.noOfHomes?.message}
              />
            </Container>

            <Container component="main" maxWidth="lg">
              <TextField
                {...register("address")}
                margin="dense"
                required
                size="large"
                id="address"
                label="Address"
                name="address"
                type="text"
                fullWidth
                variant="outlined"
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
                    size="large"
                    id="city"
                    label="City"
                    name="city"
                    type="text"
                    fullWidth
                    variant="outlined"
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
                    size="large"
                    id="country"
                    label="Country"
                    name="country"
                    type="text"
                    fullWidth
                    variant="outlined"
                    value={formData.country}
                    onChange={(e) => updateFormData({ country: e.target.value })}
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
                    size="large"
                    id="cno"
                    label="Contact No"
                    name="cno"
                    type="number"
                    fullWidth
                    variant="outlined"
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
                    size="large"
                    id="email"
                    label="Email"
                    name="email"
                    type="text"
                    fullWidth
                    variant="outlined"
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
              className="loginBtn"
            >
              {button}
            </Button>
          </Container>

          <Container component="main" maxWidth="lg">
            <Grid
              container
              spacing={2}
              direction="row"
              alignItems="center"
              justifyContent="center"
              style={{ marginTop: 8, marginBottom: 30 }}
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

export default Step1a;
