import axios from "axios";

export const getData = () => dispatch => {
  axios
    .get("https://swapi.co/api/people")
    .then(res =>
      dispatch({
        type: "GET_DATA",
        payload: res.data
      })
    )
    .catch(error =>
      console.log("something went wrong with starwars api", error)
    );
};

export const getWeather = () => dispatch => {
  const API_KEY = "e5ced403947117877134523bd0915d32\n";
  axios
    .get(
      `http://api.openweathermap.org/data/2.5/weather?q=berlin,de&appid=${API_KEY}&units=metric`
    )
    .then(res =>
      dispatch({
        type: "GET_WEATHER",
        payload: res.data
      })
    );
};
