import axios from "axios";

// create an instance of axios
const ApiCall = axios.create({
  baseURL: "https://dev.drohealth.com/"
});


export default ApiCall;