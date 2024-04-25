import React, { useState } from "react";
import { Box, Container, IconButton, InputAdornment } from "@mui/material";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

const Step3 = ({ formData, updateFormData, button, getData }) => {
  const [emailError, setEmailError] = useState("");

  const passwordRegExp =/^.{6,}$/;

  const formSchema = Yup.object().shape({
    password: Yup.string()
      .matches(passwordRegExp, "Password must be at least 6 characters long")
      .min(8, "Password must be at least 8 characters long"),
    confirmPwd: Yup.string()
      .required("Password is mandatory")
      .oneOf([Yup.ref("password")], "Passwords do not match"),
    email: Yup.string().email().required("Email is mandatory"),
  });

  const formOptions = { resolver: yupResolver(formSchema) };
  const { register, handleSubmit, reset, formState } = useForm(formOptions);
  const { errors } = formState;

  // Show Password State
  const [showPassword, setShowPassword] = React.useState(false);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleClickShowPassword = () => {
    setShowPassword((prev) => !prev);
  };

  const [showPassword1, setShowPassword1] = React.useState(false);
  const handleMouseDownPassword1 = (event) => {
    event.preventDefault();
  };

  const handleClickShowPassword1 = () => {
    setShowPassword1((prev) => !prev);
  };

  function onSubmit(data) {
    let formData = data;
    getData(formData);
    return false;
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Box sx={{ mt: 5, mb: 5 }}>
        <div className="form-group">
          <Container component="main" maxWidth="lg">
            <TextField
              {...register("email")}
              margin="dense"
              required
              id="userEmailAddress"
              label="Email Address"
              name="email"
              autoComplete="email"
              fullWidth
              type="email"
              variant="outlined"
              value={formData.email}
              onChange={(e) => updateFormData({ email: e.target.value })}
              error={!!errors.email}
              helperText={errors.email?.message}
            />
          </Container>

          <Container component="main" maxWidth="lg">
            <TextField
              {...register("password")}
              margin="dense"
              label="Password"
              name="password"
              type={showPassword ? "text" : "password"}
              fullWidth
              variant="outlined"
              value={formData.password}
              onChange={(e) => updateFormData({ password: e.target.value })}
              error={!!errors.password}
              helperText={errors.password?.message}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          </Container>

          <div className="pwText">
            <p className="pwText1">
              Password must be at least 8 characters long with 1 uppercase, 1 lowercase, and 1 numeric character
            </p>
          </div>

          <Container component="main" maxWidth="lg">
            <TextField
              {...register("confirmPwd")}
              margin="dense"
              label="Confirm Password"
              name="confirmPwd"
              type={showPassword1 ? "text" : "password"}
              fullWidth
              variant="outlined"
              value={formData.confirmPwd}
              onChange={(e) => updateFormData({ confirmPwd: e.target.value })}
              error={!!errors.confirmPwd}
              helperText={errors.confirmPwd?.message}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword1}
                      onMouseDown={handleMouseDownPassword1}
                    >
                      {showPassword1 ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          </Container>
        </div>

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
      </Box>
    </form>
  );
};

export default Step3;
