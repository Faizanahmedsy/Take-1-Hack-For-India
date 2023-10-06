// import { DataService } from "../../src/dataservice/dataservice";
// import { API } from "../../src/Api/index";
// import { setItem } from "../../src/localstorage";

//LOGIN API SETUP
export const handleLogin = (payload) => async () => {
  try {
    // const response = await DataService.post(API.auth.login, payload);
    // if (response.data.status) {
    //   setItem("apex_token", response.data.data.token);
    //   return response.data;
    // } else {
    //   return false;
    // }
  } catch (error) {
    // return false;
  }
};

//LOGOUT API SETUP
export const handlelogout = () => async () => {
  try {
    // const response = await DataService.post(API.auth.logout);
    // if (!response.data.error) {
    //   localStorage.clear();
    //   return response;
    // } else {
    //   return false;
    // }
  } catch (error) {
    return false;
  }
};

//FORGOT PASSWORD SETUP
export const handleForgot = (payload) => async () => {
  try {
    // const response = await DataService.post(API.auth.forgetpass, payload);
    // if (!response.data.error) {
    //   return response.data.data;
    // } else {
    //   return false;
    // }
  } catch (error) {
    // return false;
  }
};
