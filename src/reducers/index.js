import { combineReducers } from 'redux';
import { loginReducer, SignupReducer } from './register.reducer';
import { patientReducer } from './patient.reducer';
import { Referral, TimeZone, Country } from './formDataRequest.reducer';


const allReducers = combineReducers({
    login: loginReducer,
    signup: SignupReducer,
    referral: Referral,
    timezone: TimeZone,
    country: Country,
    patientData: patientReducer
});

export default allReducers;