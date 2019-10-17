import { combineReducers } from "redux";
import { dataReducer, weatherReducer } from "./dataReducer";

export default combineReducers({
  dataReducer: dataReducer,
  weatherReducer: weatherReducer
});
