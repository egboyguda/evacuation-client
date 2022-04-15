import createDataContext from "./createDataContext";
import url from "../api/urls";

const apiReducer = (state, action) => {
  switch (action.type) {
    case "getDATA":
      return { ...state, evac: action.payload };
    case "getEvac":
      return { ...state, evacuees: action.payload };
    default:
      return state;
  }
};

const getData = (dispatch) => async () => {
  try {
    const res = await url.get("/", { params: { date: Date.now() } });
    dispatch({ type: "getDATA", payload: res.data });
    //console.log(res.data);
  } catch (error) {
    console.log(error.message);
  }
};
const addEvacuees = (dispatch) => async (name, _id) => {
  try {
    const res = await url.post("/evac", {
      name,
      _id,
      date: Date.now(),
    });
  } catch (error) {
    console.log(error.message);
  }
};
const deleteEvacuees = (dispatch) => async (_id) => {
  console.log(_id);
  try {
    const res = await url.delete("/evac", {
      data: {
        _id,
      },
    });
    dispatch({ type: "delEvacuees", payload: _id });
    console.log(res.data);
    navigate("Main");
  } catch (error) {
    console.log(error.message);
  }
};
export const { Provider, Context } = createDataContext(
  apiReducer,
  { getData, addEvacuees, deleteEvacuees },
  { evac: null }
);
