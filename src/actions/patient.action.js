import { PATIENT_DATA }  from './actionTypes';
import ApiCall from "../utils/apiCall";

export function PatientData () {
    return async dispatch => {
        try {
            const token = localStorage.getItem('token')
            const response = await ApiCall.get("patients/api/get/", {
                    headers: {
                        'Content-type': 'application/json',
                        // 'Authorization': `Bearer ${token}`
                    }
            });
            const { data } = response;

            console.log(response)

            //
            // dispatch({type: PATIENT_DATA, data });
          } catch (e) {
            console.error(e);
          }
    }
}