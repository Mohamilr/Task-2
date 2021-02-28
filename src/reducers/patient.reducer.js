export const patientReducer = (state = [], action) => {
    switch (action.type) {
      case "DASHBOARD_DATA":
       return state = action.data;
      default:
        return state;
    }
  };