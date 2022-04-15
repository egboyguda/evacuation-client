import createDateContext from "../context/createDataContext";

const locationReducer = (state, action) => {
  switch (action.type) {
    case "ADD_LOCATION":
      return { ...state, currentLocation: action.payload };
    
    case "GET_DESTINATION":
      return { ...state, destination: action.payload };
    default:
      return state;
  }
};

const addLocation = (dispatch) => (location) => {
  dispatch({ type: "ADD_LOCATION", payload: location });
};

const getDestination = (dispatch) => (destination) => {
  dispatch({ type: "GET_DESTINATION", payload: destination });
}
export const { Provider, Context } = createDateContext(
  locationReducer,
  { addLocation ,getDestination},
  { currentLocation: null,destination:null }
);
