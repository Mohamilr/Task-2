import { LOGIN_REDIRECT, SIGNUP_REDIRECT }  from './actionTypes';
import ApiCall from "../utils/apiCall";

export function LoginAction(body) {
    return async dispatch => {
        try {
            const response = await ApiCall.post("patients/api/login/", body);
            const { data } = response;

            console.log(response.data)

            ApiCall.defaults.headers.common['Authorization'] = `Bearer ${data.token}`;
            localStorage.setItem('token', data.token);

            //
            dispatch({type: LOGIN_REDIRECT});
          } catch (e) {
            console.error(e.response.data);
          }
    }
}

export function SignupAction(body) {
  return async dispatch => {
      try {
          const response = await ApiCall.post("patients/api/create/", body);
          const { data } = response;
          console.log(response)

          if(data) {
            dispatch({type: SIGNUP_REDIRECT});
          }
          
        } catch (e) {
          console.error(e.response.data);
        }
  }
}