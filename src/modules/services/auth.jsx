
import axios from "axios";

const Apiurl = "https://app.eov.arquel.la/";

export const logInWithEmailAndPassword = async (userPayload) => {
  try {
    const response = await axios.post(Apiurl + "auth/login", userPayload);

    const json = response;
    console.log(json);
    return json;
  } catch (error) {
    console.error("Error", error);
  }
};

export const registerUser = async (registrationPayload) => {
  console.log("- - - - -  --- - - -", registrationPayload);
  try {
    const response = await axios.post(Apiurl + "auth/register", registrationPayload);
    const json = response;
    console.log(json);
    return json;
  } catch (error) {
    console.error("Error", error);
  }
};
