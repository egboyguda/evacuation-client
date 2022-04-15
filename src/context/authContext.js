import createDataContext from "./createDataContext";
import AsyncStorage from "@react-native-async-storage/async-storage";
import url from "../api/urls";
import { navigate } from "../navigationRes";
const authReducer = (state, action) => {
  switch (action.type) {
    case "add_error":
      return { ...state, errorMessage: action.payload };
    case "signin":
      return {
        errorMessage: "",
        token: action.payload.token,
        isAdmin: action.payload.isAdmin,
        id: action.payload.id,
      };
    case "clear_error_message":
      return { ...state, errorMessage: "" };
    case "signout":
      return { token: null, errorMessage: "" };

    case "signup":
      return {
        ...state,
        errorMessage: "",
        token: action.payload.token,
        isAdmin: action.payload.isAdmin,
      };
    default:
      return state;
  }
};

const tryLocalSignin = (dispatch) => async () => {
  const token = await AsyncStorage.getItem("token");
  if (token) {
    dispatch({ type: "signin", payload: { token } });
    navigate("Map");
  } else {
    navigate("Login");
  }
};

const signup =
  (dispatch) =>
  async ({ email, password, name }) => {
    console.log("vs");
    try {
      const res = await url.post("/register", {
        username: email,
        password,
        isAdmin: false,
        name,
      });
      console.log(res.data.token);
      await AsyncStorage.setItem("token", res.data.token);
      //await AsyncStorage.setItem("isAdmin", res.data.isAdmin);
      console.log(await AsyncStorage.getItem("token"));
      console.log("called");
      dispatch({
        type: "signup",
        payload: { token: res.data.token, isAdmin: false },
      });
      navigate("Map");
    } catch (error) {
      dispatch({ type: "add_error", payload: error.message });
    }
  };
const signin =
  (dispatch) =>
  async ({ email, password }) => {
    try {
      const res = await url.post("/login", { username: email, password });
      await AsyncStorage.setItem("token", res.data.token);
      await dispatch({
        type: "signin",
        payload: {
          token: res.data.token,
          isAdmin: res.data.isAdmin,
          id: res.data.id,
        },
      });
      navigate("Map");
    } catch (error) {
      dispatch({ type: "add_error", payload: error.message });
    }
  };
const logout = (dispatch) => async () => {
  await AsyncStorage.removeItem("token");
  await dispatch({ type: "signout" });
  navigate("Login");
};

export const { Context, Provider } = createDataContext(
  authReducer,
  { signup, signin, tryLocalSignin, logout },
  { token: null, errorMessage: "", isAdmin: null, id: null }
);
