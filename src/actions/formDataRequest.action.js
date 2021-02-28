import { REFERRAL, TIMEZONE, COUNTRY } from './actionTypes';
import ApiCall from "../utils/apiCall";

export function Referral () {
    return async dispatch => {
        try {
            const response = await ApiCall.get("patients/api/ref-methods");
            const { data } = response;

            //
            dispatch({type: REFERRAL, data });
          } catch (e) {
            console.error(e);
          }
    }
}

export function TimeZone () {
    return async dispatch => {
        try {
            const response = await ApiCall.get("patients/api/timezone");
            const { data } = response;

            //
            dispatch({type: TIMEZONE, data });
          } catch (e) {
            console.error(e);
          }
    }
}

export function Country () {
    return async dispatch => {
        try {
            const response = await ApiCall.get("patients/api/country");
            const { data } = response;
            
            //
            dispatch({type: COUNTRY, data });
          } catch (e) {
            console.error(e);
          }
    }
}