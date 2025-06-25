// src/components/timesReducer.js

export const initializeTimes = () => {
  const today = new Date();
  return fetchAPI(today); // this function is now available thanks to the script you added
};

export const updateTimes = (state, action) => {
  if (action.type === "update") {
    return fetchAPI(new Date(action.date));
  }
  return state;
};
