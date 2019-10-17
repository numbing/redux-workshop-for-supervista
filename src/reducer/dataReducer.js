const initalState = {
  data: [],
  weather: []
};

export const dataReducer = (state = initalState, action) => {
  switch (action.type) {
    case "GET_DATA":
      return {
        ...state,
        data: action.payload
      };
    default:
      return state;
  }
};
export const weatherReducer = (state = initalState, action) => {
  switch (action.type) {
    case "GET_WEATHER":
      return {
        ...state,
        data: action.payload
      };
    default:
      return state;
  }
};
