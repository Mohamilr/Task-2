export const Referral = (state = [], action) => {
  switch (action.type) {
    case "REFERRAL":
      return (state = action.data);
    default:
      return state;
  }
};

export const TimeZone = (state = [], action) => {
  switch (action.type) {
    case "TIMEZONE":
      return (state = action.data);
    default:
      return state;
  }
};

export const Country = (state = [], action) => {
  switch (action.type) {
    case "COUNTRY":
      return (state = action.data);
    default:
      return state;
  }
};
