import createDataContext from './createDataContext';
//import { AsyncStorage } from  "@react-native-async-storage/async-storage";
import url from '../api/urls';

const authReducer = (state, action) => {
    switch (action.type) {
        case 'add_error':
            return { ...state, errorMessage: action.payload };
        case 'signin':
        return { errorMessage: '', token: action.payload.token ,isAdmin:action.payload.isAdmin};
        case 'clear_error_message':
            return { ...state, errorMessage: '' };
        case 'signout':
            return { token: null, errorMessage: '' };
        case 'signup':
            return { ...state, errorMessage: '', token: action.payload.token,isAdmin:action.payload.isAdmin };
        default:
            return state;
    }
}

const signup = (dispatch) => async({ email, password,name }) => {
    try {
        const res = await url.post('/register', {username:email, password ,isAdmin:false,name});
        dispatch({ type: 'signup',payload:{token:res.data.token,isAdmin:false} });
    } catch (error) {
        
        dispatch({ type: 'add_error', payload: error.message });
        
    }

}

export const { Context, Provider } = createDataContext(
    authReducer,
    { signup },
    { token: null, errorMessage: '' ,isAdmin:null}
)