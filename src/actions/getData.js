import axios from "axios";

export const getData = () => dispatch => {
  axios.get("https://swapi.co/api/people").then(res =>
    dispatch({
      type: "GET_DATA",
      payload: res.data
    })
  );
};
