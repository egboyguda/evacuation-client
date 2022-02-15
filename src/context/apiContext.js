import createDataContext from './createDataContext';
import url from '../api/urls';

const apiReducer = (state, action) => {
  switch (action.type) {
    case 'getDATA':
      return { ...state, evac: action.payload };
    case 'getEvac':
      return { ...state, evacuees: action.payload };
    default:
      return state;
  }
};

const getData = (dispatch) => async () => {
  try {
    const res = await url.get('/', { params: { date: Date.now() } });
    dispatch({ type: 'getDATA', payload: res.data });
    //console.log(res.data);
  } catch (error) {
    console.log(error.message);
  }
};
export const { Provider, Context } = createDataContext(
  apiReducer,
  { getData },
  { evac: null }
);
