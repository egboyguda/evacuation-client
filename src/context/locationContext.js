import createDateContext from "../context/createDataContext";

const locationReducer = (state, action) => {
  switch (action.type) {
    case "ADD_LOCATION":
      return { ...state, currentLocation: action.payload };
    default:
      return state;
  }
};

const addLocation = (dispatch) => (location) => {
  dispatch({ type: "ADD_LOCATION", payload: location });
};

export const { Provider, Context } = createDateContext(
  locationReducer,
  { addLocation },
  { currentLocation: null }
);
