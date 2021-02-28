export const loginReducer = (state = false, action) => {
    switch (action.type) {
      case "LOGIN_REDIRECT":
       return state = true;
      default:
        return state;
    }
  };
  
  export const SignupReducer = (state = false, action) => {
      switch (action.type) {
          case "SIGNUP_REDIRECT":
           return state = true;
          default:
            return state;
        }
  };