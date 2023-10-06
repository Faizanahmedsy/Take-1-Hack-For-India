import { API } from "../../src/Api/index";
const initialState = {
  loginData: {},
};

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case API:
      return {
        ...state,
        loginData: action.data,
      };
    default:
      return state;
  }
};
export default loginReducer;
